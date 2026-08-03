/**
 * Writes an EPUB 3 from a BlockDoc, in the browser.
 *
 * Ported from word_to_epub.py, keeping the decisions that make the file pass
 * retailer validation: an EPUB 3 navigation document *and* an EPUB 2 NCX for
 * older devices, one XHTML file per chapter, and reflowable text with no page
 * numbers anywhere — the print interior has those, an ebook must not.
 *
 * The mimetype entry has to be first in the archive and stored uncompressed;
 * that is a hard rule of the format, not a preference.
 */

import { strToU8, zipSync } from "fflate";
import type { Block, BlockDoc, ImageAsset, Inline } from "./model";
import { plainText } from "./model";
import { polishRuns } from "./typography";

const CSS = `@charset "utf-8";
html { font-size: 100%; }
body {
  margin: 5%;
  line-height: 1.5;
  text-align: justify;
  font-family: serif;
  hyphens: auto;
}
h1, h2 {
  text-align: left;
  line-height: 1.2;
  page-break-after: avoid;
  font-family: serif;
}
h1 { font-size: 1.6em; margin: 1.2em 0 0.8em; }
h2 { font-size: 1.2em; margin: 1.2em 0 0.4em; }
p { margin: 0; text-indent: 1.2em; }
p.first, h1 + p, h2 + p, blockquote p, .break + p { text-indent: 0; }
.break { text-align: center; text-indent: 0; margin: 1.2em 0; }
blockquote { margin: 1em 2em; font-style: italic; }
.u { text-decoration: underline; }
ul, ol { margin: 0.5em 0 0.5em 1.5em; }
figure { margin: 1em 0; text-align: center; }
img { max-width: 100%; height: auto; }
`;

/** Stylesheet paths, relative to the document that links them. */
const CSS_FROM_ROOT = "style.css";
const CSS_FROM_TEXT = "../style.css";

export type EpubOptions = {
  /** Copyright page wording, already localised. Rendered as the first section. */
  legal: string[];
  /** ISBN-13 if the author has one; otherwise a random urn:uuid is used. */
  isbn?: string;
  /** Overridable for deterministic tests. */
  now?: Date;
  identifier?: string;
  /**
   * Resampled images from the PDF pass. Without them the ebook ships whatever
   * Word stored, which on a real illustrated book is 90 MB of photographs.
   */
  images?: ImageAsset[];
};

export type RenderedEpub = {
  bytes: Uint8Array;
  chapterCount: number;
  imageCount: number;
};

const escapeXml = (s: string): string =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

function inlineToHtml(run: Inline): string {
  let html = escapeXml(run.text);
  if (run.sup) html = `<sup>${html}</sup>`;
  if (run.sub) html = `<sub>${html}</sub>`;
  if (run.underline) html = `<span class="u">${html}</span>`;
  if (run.italic) html = `<em>${html}</em>`;
  if (run.bold) html = `<strong>${html}</strong>`;
  if (run.href) html = `<a href="${escapeXml(run.href)}">${html}</a>`;
  return html;
}

const runsToHtml = (runs: Inline[]): string => runs.map(inlineToHtml).join("");

/** Groups consecutive list items so they land inside one <ul> or <ol>. */
function blocksToHtml(
  blocks: Block[],
  lang: BlockDoc["meta"]["lang"],
  images: ImageAsset[],
): string {
  const out: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;

  const closeList = () => {
    if (!list) return;
    const tag = list.ordered ? "ol" : "ul";
    out.push(`<${tag}>${list.items.join("")}</${tag}>`);
    list = null;
  };

  for (const block of blocks) {
    const runs = polishRuns(block.runs, lang);
    const html = runsToHtml(runs);

    if (block.kind === "listItem") {
      const ordered = block.ordered === true;
      if (list && list.ordered !== ordered) closeList();
      if (!list) list = { ordered, items: [] };
      list.items.push(`<li>${html}</li>`);
      continue;
    }

    closeList();

    switch (block.kind) {
      case "heading2":
        out.push(`<h2>${html}</h2>`);
        break;
      case "quote":
        out.push(`<blockquote><p>${html}</p></blockquote>`);
        break;
      case "sceneBreak":
        out.push(`<p class="break">*  *  *</p>`);
        break;
      case "image": {
        const asset = images[block.image ?? -1];
        // alt is empty on purpose: inventing a description would be worse than
        // none, and the author has no way to supply one here.
        if (asset) out.push(`<figure><img src="../images/${asset.name}" alt=""/></figure>`);
        break;
      }
      default:
        if (plainText(runs).trim() !== "") out.push(`<p>${html}</p>`);
    }
  }
  closeList();
  return out.join("\n");
}

/**
 * `css` is relative to the document being written: the navigation sits at the
 * root of OEBPS, the chapters one level down in text/. Getting this wrong is
 * silent in most readers but a hard EPUBCheck error.
 */
const xhtml = (lang: string, title: string, body: string, css: string): string =>
  `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="${lang}" xml:lang="${lang}">
<head>
<meta charset="utf-8"/>
<title>${escapeXml(title)}</title>
<link rel="stylesheet" type="text/css" href="${css}"/>
</head>
<body>
${body}
</body>
</html>
`;

export function renderEpub(doc: BlockDoc, options: EpubOptions): RenderedEpub {
  const lang = doc.meta.lang;
  const modified = (options.now ?? new Date()).toISOString().replace(/\.\d{3}Z$/, "Z");
  const identifier =
    options.identifier ??
    (options.isbn ? `urn:isbn:${options.isbn.replace(/[^0-9X]/gi, "")}` : `urn:uuid:${uuid()}`);

  // Only images a block actually references are packaged: an unused media part
  // left in the archive is an EPUBCheck error, not a harmless extra.
  const used = new Set<number>();
  for (const chapter of doc.chapters) {
    for (const block of chapter.blocks) {
      if (block.kind === "image" && block.image !== undefined) used.add(block.image);
    }
  }
  const available = options.images ?? doc.images;
  const usedImages = available.filter((_, index) => used.has(index));

  const sections: { file: string; title: string; content: string }[] = [];

  sections.push({
    file: "text/front.xhtml",
    title: doc.meta.title,
    content: xhtml(
      lang,
      doc.meta.title,
      [
        `<h1>${escapeXml(doc.meta.title)}</h1>`,
        doc.meta.author ? `<p class="first">${escapeXml(doc.meta.author)}</p>` : "",
        ...options.legal.map((line) => `<p class="first">${escapeXml(line)}</p>`),
      ]
        .filter(Boolean)
        .join("\n"),
      CSS_FROM_TEXT,
    ),
  });

  doc.chapters.forEach((chapter, index) => {
    const number = String(index + 1).padStart(3, "0");
    const title = chapter.title || `${index + 1}`;
    sections.push({
      file: `text/chapter-${number}.xhtml`,
      title,
      content: xhtml(
        lang,
        title,
        [
          chapter.title ? `<h1>${escapeXml(chapter.title)}</h1>` : "",
          blocksToHtml(chapter.blocks, lang, available),
        ]
          .filter(Boolean)
          .join("\n"),
        CSS_FROM_TEXT,
      ),
    });
  });

  const manifest = [
    '<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>',
    '<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>',
    '<item id="css" href="style.css" media-type="text/css"/>',
    ...sections.map(
      (s, i) => `<item id="s${i}" href="${s.file}" media-type="application/xhtml+xml"/>`,
    ),
    ...usedImages.map(
      (image, i) =>
        `<item id="img${i}" href="images/${image.name}" media-type="${image.mediaType}"/>`,
    ),
  ];
  const spine = sections.map((_, i) => `<itemref idref="s${i}"/>`);

  const opf = `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid" xml:lang="${lang}">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="bookid">${escapeXml(identifier)}</dc:identifier>
    <dc:title>${escapeXml(doc.meta.title)}</dc:title>
    <dc:creator>${escapeXml(doc.meta.author)}</dc:creator>
    <dc:language>${lang}</dc:language>
    <meta property="dcterms:modified">${modified}</meta>
  </metadata>
  <manifest>
    ${manifest.join("\n    ")}
  </manifest>
  <spine toc="ncx">
    ${spine.join("\n    ")}
  </spine>
</package>
`;

  // The navigation lists chapters only: the reader does not need a link to the
  // copyright page, and retailers flag a table of contents padded with it.
  const navItems = sections
    .filter((s) => s.file.startsWith("text/chapter-"))
    .map((s) => `      <li><a href="${s.file}">${escapeXml(s.title)}</a></li>`)
    .join("\n");

  const nav = xhtml(
    lang,
    tocTitle(lang),
    `<nav epub:type="toc" id="toc">
  <h1>${escapeXml(tocTitle(lang))}</h1>
  <ol>
${navItems}
  </ol>
</nav>`,
    CSS_FROM_ROOT,
  );

  const navPoints = sections
    .filter((s) => s.file.startsWith("text/chapter-"))
    .map(
      (s, i) => `    <navPoint id="navpoint-${i + 1}" playOrder="${i + 1}">
      <navLabel><text>${escapeXml(s.title)}</text></navLabel>
      <content src="${s.file}"/>
    </navPoint>`,
    )
    .join("\n");

  const ncx = `<?xml version="1.0" encoding="utf-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="${escapeXml(identifier)}"/>
    <meta name="dtb:depth" content="1"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle><text>${escapeXml(doc.meta.title)}</text></docTitle>
  <navMap>
${navPoints}
  </navMap>
</ncx>
`;

  const container = `<?xml version="1.0" encoding="utf-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>
`;

  const files: Record<string, [Uint8Array, { level: 0 | 6 }]> = {
    // Must be the first entry and stored, not deflated.
    mimetype: [strToU8("application/epub+zip"), { level: 0 }],
    "META-INF/container.xml": [strToU8(container), { level: 6 }],
    "OEBPS/content.opf": [strToU8(opf), { level: 6 }],
    "OEBPS/nav.xhtml": [strToU8(nav), { level: 6 }],
    "OEBPS/toc.ncx": [strToU8(ncx), { level: 6 }],
    "OEBPS/style.css": [strToU8(CSS), { level: 6 }],
  };
  for (const section of sections) {
    files[`OEBPS/${section.file}`] = [strToU8(section.content), { level: 6 }];
  }
  for (const image of usedImages) {
    // Already-compressed formats gain nothing from deflate and cost time.
    files[`OEBPS/images/${image.name}`] = [image.bytes, { level: 0 }];
  }

  return {
    bytes: zipSync(files),
    chapterCount: doc.chapters.length,
    imageCount: usedImages.length,
  };
}

const tocTitle = (lang: string) => (lang === "fr" ? "Table des matières" : "Contents");

function uuid(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
