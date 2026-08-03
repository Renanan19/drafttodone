/**
 * Renders a laid out book to a print-ready PDF.
 *
 * Two details here were found the hard way and must not be undone:
 *
 * 1. Text is drawn with raw PDF operators, one BT/ET block per line, because
 *    pdf-lib's drawText registers a new font resource on every call. Drawing
 *    word by word through it made a three-page file 44 KB; this makes a
 *    five-page file 28 KB.
 * 2. Subsetted fonts are renamed with an "ABCDEF+" tag after saving. The PDF
 *    spec requires that tag on any subset, and pdf-lib does not add it.
 */

import {
  PDFDict,
  PDFDocument,
  PDFFont,
  PDFImage,
  PDFName,
  PDFOperator,
  PDFPage,
  beginText,
  endText,
  moveText,
  rgb,
  setFillingColor,
  setFontAndSize,
  showText,
} from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

import { FONT_FILES, TRIM, TYPE, marginsFor, textHeightFor, textWidthFor, type FontStyle } from "./kdp-rules";
import { canvasResampler, prepareImages, type PreparedImage, type Resampler } from "./images";
import {
  folioBaseline,
  layoutBook,
  runningHeadBaseline,
  type LaidBook,
  type Metrics,
  type PlacedImage,
  type PlacedLine,
} from "./pagination";
import type { BlockDoc } from "./model";

export type FetchFont = (path: string) => Promise<Uint8Array>;

export type RenderOptions = {
  /** Supplies the font files. Defaults to fetching them from /fonts. */
  fetchFont?: FetchFont;
  hyphenate: boolean;
  /** Copyright page wording, already localised by the caller. */
  legal: string[];
  /**
   * Resamples oversized images. Defaults to the canvas implementation, which
   * only exists in a browser; pass null to embed the originals untouched.
   */
  resampler?: Resampler | null;
};

export type RenderedPdf = {
  bytes: Uint8Array;
  pageCount: number;
  gutterInches: number;
  overflowingLines: number;
  worstGapRatio: number;
  /** Images that will print below 300 DPI at the size they were placed. */
  softImages: number;
  /**
   * The resampled images, so the EPUB can ship the same ones. Preparing them
   * twice would decode every picture again; shipping the originals turned a
   * 7 MB PDF's companion ebook into a 90 MB download.
   */
  images: PreparedImage[];
};

const defaultFetchFont: FetchFont = async (path) => {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`could not load ${path}: HTTP ${response.status}`);
  return new Uint8Array(await response.arrayBuffer());
};

type Fonts = Record<FontStyle, PDFFont>;

/**
 * Measuring dominates the cost of a render: every width goes through fontkit's
 * shaper, and the layout runs more than once to settle the gutter. Prose
 * repeats its vocabulary heavily, so caching by token turns a 14 000-word
 * manuscript from seconds into a fraction of one.
 */
function cachedMetrics(fonts: Fonts): Metrics {
  const cache = new Map<string, number>();
  return {
    width(text, style, size) {
      const key = `${style}\u0000${size}\u0000${text}`;
      const hit = cache.get(key);
      if (hit !== undefined) return hit;
      const width = fonts[style].widthOfTextAtSize(text, size);
      cache.set(key, width);
      return width;
    },
  };
}

export async function renderPdf(doc: BlockDoc, options: RenderOptions): Promise<RenderedPdf> {
  const load = options.fetchFont ?? defaultFetchFont;
  const pdf = await PDFDocument.create();
  pdf.registerFontkit(fontkit);

  const styles = Object.keys(FONT_FILES) as FontStyle[];
  const files = await Promise.all(styles.map((style) => load(FONT_FILES[style])));
  const embedded = await Promise.all(
    files.map((bytes) => pdf.embedFont(bytes, { subset: true })),
  );
  const fonts = Object.fromEntries(styles.map((s, i) => [s, embedded[i]])) as Fonts;

  const metrics = cachedMetrics(fonts);

  // Images are sized against a mid-table column: the gutter can still shift by
  // an eighth of an inch, which is far too little to be worth resampling twice.
  const margins = marginsFor(200);
  const images = await prepareImages(
    doc.images,
    textWidthFor(margins),
    textHeightFor(margins),
    options.resampler === undefined ? canvasResampler : options.resampler,
  );

  const book = layoutBook(doc, {
    metrics,
    hyphenate: options.hyphenate,
    legal: options.legal,
    imageSizes: images.map((image) => image.pixels),
  });

  pdf.setTitle(doc.meta.title);
  if (doc.meta.author) pdf.setAuthor(doc.meta.author);
  pdf.setLanguage(doc.meta.lang);
  pdf.setProducer("DraftToDone KDP formatter");
  pdf.setCreator("DraftToDone KDP formatter");

  await drawPages(pdf, book, fonts, images);

  const bytes = await tagFontSubsets(await pdf.save());

  return {
    bytes,
    pageCount: book.pages.length,
    gutterInches: book.gutterInches,
    overflowingLines: book.overflowingLines,
    worstGapRatio: book.worstGapRatio,
    softImages: book.softImages,
    images,
  };
}

/**
 * Encoding a string to glyph ids runs it through fontkit's shaper, exactly like
 * measuring does, and prose repeats its words just as much. Caching the encoded
 * form is safe: the glyphs are registered in the subset on the first call, and
 * the resulting value object is immutable.
 */
function cachedEncoder(fonts: Fonts) {
  const cache = new Map<string, ReturnType<PDFFont["encodeText"]>>();
  return (style: FontStyle, text: string) => {
    const key = `${style} ${text}`;
    const hit = cache.get(key);
    if (hit !== undefined) return hit;
    const encoded = fonts[style].encodeText(text);
    cache.set(key, encoded);
    return encoded;
  };
}

type Encoder = ReturnType<typeof cachedEncoder>;

async function drawPages(
  pdf: PDFDocument,
  book: LaidBook,
  fonts: Fonts,
  images: PreparedImage[],
): Promise<void> {
  const embedded = await embedImages(pdf, images);
  const headY = runningHeadBaseline(book.margins);
  const folioY = folioBaseline(book.margins);
  const textWidth = TRIM.width - book.margins.gutter - book.margins.outer;
  const encode = cachedEncoder(fonts);

  for (const spec of book.pages) {
    const page = pdf.addPage([TRIM.width, TRIM.height]);
    const keys = new Map<PDFFont, PDFName>();
    const keyFor = (font: PDFFont): PDFName => {
      let key = keys.get(font);
      if (!key) {
        key = page.node.newFontDictionary(font.name, font.ref);
        keys.set(font, key);
      }
      return key;
    };

    for (const item of spec.items) {
      if (item.kind === "text") {
        drawPieces(page, keyFor, fonts, encode, item.size, item.y, [
          { text: item.text, style: item.style, x: item.x },
        ]);
      } else if (item.kind === "image") {
        drawImage(page, embedded, item);
      } else {
        drawLine(page, keyFor, fonts, encode, item);
      }
    }

    const left = spec.recto ? book.margins.gutter : book.margins.outer;

    if (spec.runningHead) {
      const width = fonts.italic.widthOfTextAtSize(spec.runningHead, TYPE.runningHeadSize);
      drawPieces(page, keyFor, fonts, encode, TYPE.runningHeadSize, headY, [
        { text: spec.runningHead, style: "italic", x: left + (textWidth - width) / 2 },
      ]);
    }

    if (spec.folio !== null) {
      const label = String(spec.folio);
      const width = fonts.regular.widthOfTextAtSize(label, TYPE.folioSize);
      drawPieces(page, keyFor, fonts, encode, TYPE.folioSize, folioY, [
        { text: label, style: "regular", x: left + (textWidth - width) / 2 },
      ]);
    }
  }
}

/**
 * Embeds each image once, whatever the number of pages that draw it.
 *
 * An image pdf-lib will not take — an exotic format, or a JPEG variant it
 * rejects — is skipped rather than allowed to fail the whole render. The
 * report already warns about images it could not read.
 */
async function embedImages(
  pdf: PDFDocument,
  images: PreparedImage[],
): Promise<(PDFImage | null)[]> {
  const out: (PDFImage | null)[] = [];
  for (const image of images) {
    try {
      if (image.mediaType === "image/png") out.push(await pdf.embedPng(image.bytes));
      else if (image.mediaType === "image/jpeg") out.push(await pdf.embedJpg(image.bytes));
      else out.push(null);
    } catch {
      out.push(null);
    }
  }
  return out;
}

function drawImage(page: PDFPage, images: (PDFImage | null)[], item: PlacedImage): void {
  const image = images[item.image];
  if (!image) return;
  page.drawImage(image, { x: item.x, y: item.y, width: item.width, height: item.height });
}

type DrawPiece = { text: string; style: FontStyle; x: number };

/**
 * Crimson Text has no glyph for the no-break spaces, and fontkit throws rather
 * than substituting. The line breaker already turned the ones it inserted into
 * advances; this catches any an author typed into a title by hand.
 */
const drawable = (text: string): string => text.replace(/[   ]/g, " ");

function drawLine(
  page: PDFPage,
  keyFor: (font: PDFFont) => PDFName,
  fonts: Fonts,
  encode: Encoder,
  item: PlacedLine,
): void {
  const pieces: DrawPiece[] = [];
  for (const piece of item.line.pieces) {
    // Space pieces are advances, not glyphs: Crimson Text has no U+202F and
    // encoding one would throw inside fontkit.
    if (piece.kind !== "text") continue;
    pieces.push({ text: piece.text, style: piece.style, x: item.left + piece.x });
  }
  drawPieces(page, keyFor, fonts, encode, item.size, item.y, pieces);
}

/** One BT/ET block for the whole line, switching fonts only where needed. */
function drawPieces(
  page: PDFPage,
  keyFor: (font: PDFFont) => PDFName,
  fonts: Fonts,
  encode: Encoder,
  size: number,
  y: number,
  pieces: DrawPiece[],
): void {
  if (pieces.length === 0) return;

  const ops: PDFOperator[] = [beginText(), setFillingColor(rgb(0, 0, 0))];
  let currentStyle: FontStyle | null = null;
  let cursor = 0;
  let started = false;

  for (const piece of pieces) {
    const text = drawable(piece.text);
    if (text === "") continue;
    if (piece.style !== currentStyle) {
      ops.push(setFontAndSize(keyFor(fonts[piece.style]), size));
      currentStyle = piece.style;
    }
    // The first move sets the baseline; later ones shift along it.
    ops.push(moveText(piece.x - cursor, started ? 0 : y));
    cursor = piece.x;
    started = true;
    ops.push(showText(encode(piece.style, text)));
  }

  if (!started) return;
  ops.push(endText());
  page.pushOperators(...ops);
}

/**
 * Adds the "ABCDEF+" prefix the PDF spec requires on subsetted fonts.
 *
 * The tag is derived from the font name rather than from a counter, because a
 * single font appears as BaseFont on both the Type0 and CIDFont dictionaries
 * and as FontName on its descriptor — all three must carry the same tag.
 */
async function tagFontSubsets(bytes: Uint8Array): Promise<Uint8Array> {
  const pdf = await PDFDocument.load(bytes);

  for (const [, object] of pdf.context.enumerateIndirectObjects()) {
    if (!(object instanceof PDFDict)) continue;
    for (const key of ["BaseFont", "FontName"] as const) {
      const value = object.get(PDFName.of(key));
      if (!(value instanceof PDFName)) continue;
      const name = value.asString().slice(1);
      if (/^[A-Z]{6}\+/.test(name)) continue;
      object.set(PDFName.of(key), PDFName.of(`${subsetTag(name)}+${name}`));
    }
  }

  return pdf.save();
}

function subsetTag(name: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < name.length; i++) {
    hash ^= name.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  let tag = "";
  for (let i = 0; i < 6; i++) {
    tag += String.fromCharCode(65 + (hash % 26));
    hash = Math.floor(hash / 26);
  }
  return tag;
}
