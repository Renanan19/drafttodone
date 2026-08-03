/**
 * Turns a BlockDoc into placed pages.
 *
 * Everything here is geometry, in PostScript points with the origin at the
 * bottom left — the same convention as the PDF itself, so the writer never has
 * to flip anything. No pdf-lib types appear in this file: layout only needs to
 * measure text, which the caller supplies.
 *
 * The gutter depends on the page count, and the page count depends on the
 * gutter. That circularity is resolved by laying out repeatedly until the
 * gutter stops changing, never by assuming it will.
 */

import {
  FOLIO_OFFSET,
  RUNNING_HEAD_OFFSET,
  TRIM,
  TYPE,
  gutterInchesFor,
  leading,
  marginsFor,
  textHeightFor,
  textWidthFor,
  type Margins,
} from "./kdp-rules";
import { breakParagraph, wrapText, type FontStyle, type Line, type Measure } from "./linebreak";
import type { Block, BlockDoc, Chapter } from "./model";
import { polishRuns } from "./typography";

export type Metrics = {
  /** Advance width of `text` in `style` at `size` points. */
  width(text: string, style: FontStyle, size: number): number;
};

export type PlacedLine = {
  kind: "line";
  line: Line;
  /** Baseline, in points from the bottom of the page. */
  y: number;
  size: number;
  /** Left edge of the text block on this page. */
  left: number;
};

export type PlacedText = {
  kind: "text";
  text: string;
  style: FontStyle;
  size: number;
  x: number;
  y: number;
};

export type PageItem = PlacedLine | PlacedText;

export type Page = {
  items: PageItem[];
  /** Printed page number, or null where the design omits it. */
  folio: number | null;
  runningHead: string | null;
  recto: boolean;
};

export type LaidBook = {
  pages: Page[];
  margins: Margins;
  gutterInches: number;
  /** Lines whose content overflowed the measure — surfaced in the report. */
  overflowingLines: number;
  /** Worst inter-word stretch across the body, as a multiple of a space. */
  worstGapRatio: number;
};

export type LayoutOptions = {
  metrics: Metrics;
  hyphenate: boolean;
  /** Copyright page wording, already localised. */
  legal: string[];
};

const MAX_PASSES = 3;

/**
 * Lays the book out, re-running whenever the finished page count lands in a
 * different gutter band than the one it was laid out with.
 */
export function layoutBook(doc: BlockDoc, options: LayoutOptions): LaidBook {
  let pageCount = 200; // a mid-table starting guess; the loop corrects it
  let widestGutter = 0;
  let result = layoutOnce(doc, options, pageCount);

  for (let pass = 1; pass < MAX_PASSES; pass++) {
    widestGutter = Math.max(widestGutter, result.gutterInches);
    const settled = gutterInchesFor(result.pages.length) === result.gutterInches;
    if (settled) return result;
    pageCount = result.pages.length;
    result = layoutOnce(doc, options, pageCount);
  }

  // Never leave the gutter too narrow: if the passes oscillate between two
  // bands, keep the wider one. A gutter that is too generous costs nothing but
  // margin; one that is too tight is a rejected file.
  const finalGutter = Math.max(widestGutter, result.gutterInches);
  return finalGutter === result.gutterInches
    ? result
    : layoutOnce(doc, options, pagesForGutter(finalGutter));
}

/** Smallest page count that forces the given gutter. */
function pagesForGutter(gutterInches: number): number {
  for (const pages of [150, 300, 500, 700, 900]) {
    if (gutterInchesFor(pages) >= gutterInches) return pages;
  }
  return 900;
}

function layoutOnce(doc: BlockDoc, options: LayoutOptions, pageCountGuess: number): LaidBook {
  const margins = marginsFor(pageCountGuess);
  const textWidth = textWidthFor(margins);
  const textHeight = textHeightFor(margins);
  const step = leading();

  const pages: Page[] = [];
  let page: Page | null = null;
  let y = 0;
  let overflowingLines = 0;
  let worstGapRatio = 1;

  const leftOf = (index: number) =>
    index % 2 === 0 ? margins.gutter : margins.outer; // index 0 is page 1, a recto

  const startPage = (opts: { folio: boolean; head: string | null }): Page => {
    const index = pages.length;
    const recto = index % 2 === 0;
    const created: Page = {
      items: [],
      folio: opts.folio ? index + 1 : null,
      runningHead: opts.head,
      recto,
    };
    pages.push(created);
    page = created;
    y = TRIM.height - margins.top - TYPE.bodySize;
    return created;
  };

  const blankPage = () => {
    startPage({ folio: false, head: null });
  };

  const remaining = () => y - margins.bottom;

  const measureAt = (size: number): Measure => (text, style) =>
    options.metrics.width(text, style, size);

  const centred = (text: string, style: FontStyle, size: number, baseline: number) => {
    const width = options.metrics.width(text, style, size);
    const left = leftOf(pages.length - 1);
    page!.items.push({
      kind: "text",
      text,
      style,
      size,
      x: left + (textWidth - width) / 2,
      y: baseline,
    });
  };

  // --- front matter ----------------------------------------------------------
  // Half title, blank, title page, copyright. Conventional order; readers do
  // notice when a book opens straight onto chapter one.
  startPage({ folio: false, head: null });
  centred(doc.meta.title, "regular", TYPE.frontMatterTitleSize, TRIM.height * 0.62);
  blankPage();

  startPage({ folio: false, head: null });
  centred(doc.meta.title, "bold", TYPE.frontMatterTitleSize, TRIM.height * 0.62);
  if (doc.meta.author) {
    centred(doc.meta.author, "regular", TYPE.frontMatterAuthorSize, TRIM.height * 0.62 - 46);
  }

  startPage({ folio: false, head: null });
  let legalY = margins.bottom + TYPE.legalSize * 8;
  for (const rawLine of options.legal) {
    for (const line of breakParagraph([{ text: rawLine }], measureAt(TYPE.legalSize), {
      width: textWidth,
      firstIndent: 0,
      lang: doc.meta.lang,
      hyphenate: false,
      bodySize: TYPE.legalSize,
    })) {
      page!.items.push({
        kind: "line",
        line,
        y: legalY,
        size: TYPE.legalSize,
        left: leftOf(pages.length - 1),
      });
      legalY -= TYPE.legalSize * 1.4;
    }
    legalY -= TYPE.legalSize * 0.5;
  }

  // --- body ------------------------------------------------------------------
  for (const chapter of doc.chapters) {
    // Chapters open on a recto. pages.length is the count so far, so the next
    // page is a recto when that count is even.
    if (pages.length % 2 !== 0) blankPage();

    startPage({ folio: false, head: null });
    y -= textHeight * TYPE.chapterSinkRatio;

    if (chapter.title) {
      const titleLines = wrapText(
        chapter.title,
        measureAt(TYPE.chapterTitleSize),
        "bold",
        textWidth,
      );
      for (const line of titleLines) {
        centred(line, "bold", TYPE.chapterTitleSize, y);
        y -= TYPE.chapterTitleSize * 1.25;
      }
      y -= step * 2;
    }

    let firstOfSection = true;
    // Word keeps list numbers in numbering.xml, which the reader does not
    // parse. Consecutive ordered items are numbered here instead, and the
    // count resets as soon as the list ends.
    let ordinal = 0;

    for (const block of chapter.blocks) {
      let runs = polishRuns(block.runs, doc.meta.lang);
      const spec = blockSpec(block, firstOfSection, textWidth);

      if (block.kind !== "listItem") ordinal = 0;

      // The marker is drawn as text, so it wraps and justifies with the item.
      if (block.kind === "listItem") {
        ordinal += 1;
        runs = [{ text: block.ordered ? `${ordinal}. ` : "• " }, ...runs];
      }

      if (block.kind === "sceneBreak") {
        if (remaining() < step * 3) {
          startPage({ folio: true, head: headFor(doc, pages.length) });
        }
        y -= step;
        centred("*  *  *", "regular", TYPE.bodySize, y);
        y -= step * 2;
        firstOfSection = true;
        continue;
      }

      const lines = breakParagraph(runs, measureAt(spec.size), {
        width: spec.width,
        firstIndent: spec.indent,
        lang: doc.meta.lang,
        hyphenate: options.hyphenate && block.kind === "paragraph",
        bodySize: spec.size,
      });
      if (lines.length === 0) continue;

      y -= spec.spaceBefore;

      for (const line of lines) {
        if (remaining() < 0) {
          startPage({ folio: true, head: headFor(doc, pages.length) });
        }
        const left = leftOf(pages.length - 1) + spec.left;
        page!.items.push({ kind: "line", line, y, size: spec.size, left });

        if (!line.last) worstGapRatio = Math.max(worstGapRatio, line.gapRatio);
        if (lineRight(line, options.metrics, spec.size) > spec.width + 0.5) overflowingLines += 1;

        y -= spec.size * TYPE.lineHeight;
      }

      y -= spec.spaceAfter;
      firstOfSection = block.kind === "heading2";
    }
  }

  return {
    pages,
    margins,
    gutterInches: gutterInchesFor(pageCountGuess),
    overflowingLines,
    worstGapRatio,
  };
}

const headFor = (doc: BlockDoc, indexOfNextPage: number): string =>
  indexOfNextPage % 2 === 0 ? doc.meta.title : doc.meta.author || doc.meta.title;

function lineRight(line: Line, metrics: Metrics, size: number): number {
  const last = line.pieces[line.pieces.length - 1];
  if (!last) return 0;
  return last.x + (last.kind === "text" ? metrics.width(last.text, last.style, size) : last.width);
}

type BlockSpec = {
  size: number;
  width: number;
  /** Extra left offset relative to the text block. */
  left: number;
  indent: number;
  spaceBefore: number;
  spaceAfter: number;
};

function blockSpec(block: Block, firstOfSection: boolean, textWidth: number): BlockSpec {
  const step = leading();
  switch (block.kind) {
    case "heading2":
      return {
        size: TYPE.bodySize * 1.15,
        width: textWidth,
        left: 0,
        indent: 0,
        spaceBefore: step,
        spaceAfter: step * 0.5,
      };
    case "quote":
      return {
        size: TYPE.bodySize,
        width: textWidth - TYPE.bodySize * 4,
        left: TYPE.bodySize * 2,
        indent: 0,
        spaceBefore: step * 0.5,
        spaceAfter: step * 0.5,
      };
    case "listItem":
      return {
        size: TYPE.bodySize,
        width: textWidth - TYPE.bodySize * 2,
        left: TYPE.bodySize * 2,
        indent: 0,
        spaceBefore: 0,
        spaceAfter: 0,
      };
    default:
      return {
        size: TYPE.bodySize,
        width: textWidth,
        left: 0,
        // The opening paragraph of a section is set flush; only continuations
        // are indented. Indenting the first line of a chapter is a tell.
        indent: firstOfSection ? 0 : TYPE.bodySize * TYPE.indentEm,
        spaceBefore: 0,
        spaceAfter: 0,
      };
  }
}

/** Baseline for the running head on a given page. */
export const runningHeadBaseline = (margins: Margins): number =>
  TRIM.height - margins.top + RUNNING_HEAD_OFFSET;

/** Baseline for the folio on a given page. */
export const folioBaseline = (margins: Margins): number => margins.bottom - FOLIO_OFFSET;

export type { Chapter };
