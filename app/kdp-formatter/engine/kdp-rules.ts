/**
 * Single source of truth for every KDP print constraint the formatter applies.
 *
 * The numbers come from the paperback formatting guide this tool ships inside
 * (app/ai-writing-seo-posts.ts, key "kdp-paperback-formatting"). Change them
 * here and nowhere else, so the tool can never contradict the article.
 */

/** PostScript points per inch. Every internal measurement is in points. */
export const PT_PER_INCH = 72;

export const inches = (n: number) => n * PT_PER_INCH;

/** 6 x 9 in — the only trim size supported in v1. */
export const TRIM = {
  widthIn: 6,
  heightIn: 9,
  width: inches(6),
  height: inches(9),
} as const;

/**
 * KDP's minimum gutter grows with the page count, because a thicker book
 * curves more at the spine. We apply one step above the minimum: the minimums
 * are pass/fail thresholds, not good typography.
 */
const GUTTER_TABLE: ReadonlyArray<{ maxPages: number; minIn: number }> = [
  { maxPages: 150, minIn: 0.375 },
  { maxPages: 300, minIn: 0.5 },
  { maxPages: 500, minIn: 0.625 },
  { maxPages: 700, minIn: 0.75 },
  { maxPages: Infinity, minIn: 0.875 },
];

/** Comfort added on top of the KDP minimum gutter. */
const GUTTER_COMFORT_IN = 0.125;

/** Absolute KDP floor for any element, outside the gutter. Used by the checks. */
export const MIN_MARGIN_IN = 0.25;

export const gutterMinInchesFor = (pageCount: number): number =>
  GUTTER_TABLE.find((row) => pageCount <= row.maxPages)!.minIn;

export const gutterInchesFor = (pageCount: number): number =>
  gutterMinInchesFor(pageCount) + GUTTER_COMFORT_IN;

/**
 * Page margins for a given page count. The gutter is the inner margin, so it
 * swaps sides between recto and verso — that mirroring is what makes the text
 * block sit correctly once the book is bound.
 */
export type Margins = {
  gutter: number;
  outer: number;
  top: number;
  bottom: number;
};

export const marginsFor = (pageCount: number): Margins => ({
  gutter: inches(gutterInchesFor(pageCount)),
  outer: inches(0.875),
  top: inches(0.75),
  bottom: inches(0.75),
});

export const textWidthFor = (margins: Margins): number =>
  TRIM.width - margins.gutter - margins.outer;

export const textHeightFor = (margins: Margins): number =>
  TRIM.height - margins.top - margins.bottom;

/**
 * Body typography. Tuned on French prose: 11.5 pt Crimson Text over a 4.5 in
 * measure gives roughly 66-70 characters per line and 34 lines per page, which
 * is a normal trade paperback. Revisit against a real manuscript before
 * treating these as settled.
 */
export const TYPE = {
  bodySize: 11.5,
  lineHeight: 1.35,
  /** First-line indent, expressed in ems of the body size. */
  indentEm: 1.2,
  chapterTitleSize: 20,
  /** Blank space above a chapter title, as a fraction of the text height. */
  chapterSinkRatio: 0.18,
  runningHeadSize: 9,
  folioSize: 10,
  frontMatterTitleSize: 26,
  frontMatterAuthorSize: 13,
  legalSize: 9.5,
} as const;

export const leading = (): number => TYPE.bodySize * TYPE.lineHeight;

/** Distance from the text block to the running head / folio baselines. */
export const RUNNING_HEAD_OFFSET = inches(0.3);
export const FOLIO_OFFSET = inches(0.35);

/** Spine width, needed to build the cover once the interior is locked. */
export const spineWidthInches = (pageCount: number, paper: "white" | "cream"): number =>
  pageCount * (paper === "white" ? 0.002252 : 0.0025);

/**
 * The trim sizes KDP prints, for the cover template tool.
 *
 * `TRIM` above stays 6 × 9 because the formatter only typesets that size; the
 * cover generator has no such limit, since a template is arithmetic rather
 * than typesetting. Both read their gutter and spine rules from this file, so
 * a cover built here can never disagree with an interior built there.
 */
export const TRIM_SIZES: ReadonlyArray<{ widthIn: number; heightIn: number; label: string }> = [
  { widthIn: 5, heightIn: 8, label: '5" × 8"' },
  { widthIn: 5.06, heightIn: 7.81, label: '5.06" × 7.81"' },
  { widthIn: 5.25, heightIn: 8, label: '5.25" × 8"' },
  { widthIn: 5.5, heightIn: 8.5, label: '5.5" × 8.5"' },
  { widthIn: 6, heightIn: 9, label: '6" × 9"' },
  { widthIn: 6.14, heightIn: 9.21, label: '6.14" × 9.21"' },
  { widthIn: 6.69, heightIn: 9.61, label: '6.69" × 9.61"' },
  { widthIn: 7, heightIn: 10, label: '7" × 10"' },
  { widthIn: 7.44, heightIn: 9.69, label: '7.44" × 9.69"' },
  { widthIn: 7.5, heightIn: 9.25, label: '7.5" × 9.25"' },
  { widthIn: 8, heightIn: 10, label: '8" × 10"' },
  { widthIn: 8.5, heightIn: 11, label: '8.5" × 11"' },
];

/** KDP asks for 0.125" of bleed on the three outer edges of a cover. */
export const COVER_BLEED_IN = 0.125;

/** Keep text and logos this far inside the trim and away from the spine folds. */
export const COVER_SAFE_MARGIN_IN = 0.25;

/** KDP prints paperbacks from 24 pages up. */
export const MIN_PRINT_PAGES = 24;

export type CoverTemplate = {
  spineIn: number;
  /** Full flat cover including bleed: back + spine + front. */
  totalWidthIn: number;
  totalHeightIn: number;
  /** Whether KDP permits type on the spine at this page count. */
  spineTextAllowed: boolean;
};

/**
 * The full wraparound a printer needs: back cover, spine and front cover laid
 * flat, plus bleed on the top, bottom and both outer edges.
 */
export const coverTemplate = (
  pageCount: number,
  paper: "white" | "cream",
  trim: { widthIn: number; heightIn: number },
): CoverTemplate => {
  const spineIn = spineWidthInches(pageCount, paper);
  return {
    spineIn,
    totalWidthIn: trim.widthIn * 2 + spineIn + COVER_BLEED_IN * 2,
    totalHeightIn: trim.heightIn + COVER_BLEED_IN * 2,
    spineTextAllowed: pageCount >= SPINE_TEXT_MIN_PAGES,
  };
};

/** KDP only allows text on the spine from 100 pages up. */
export const SPINE_TEXT_MIN_PAGES = 100;

/**
 * Refuse manuscripts we would only mangle.
 *
 * Illustrated non-fiction routinely passes 90 MB, because Word stores whatever
 * the camera produced. Those images are resampled to 300 DPI at column width
 * before anything is drawn, so the limit is about what a browser tab can hold
 * while unzipping, not about the finished book.
 */
export const MAX_INPUT_BYTES = 200 * 1024 * 1024;

export const FONT_FILES = {
  regular: "/fonts/crimson-text/CrimsonText-Regular.ttf",
  italic: "/fonts/crimson-text/CrimsonText-Italic.ttf",
  bold: "/fonts/crimson-text/CrimsonText-Bold.ttf",
  boldItalic: "/fonts/crimson-text/CrimsonText-BoldItalic.ttf",
} as const;

export type FontStyle = keyof typeof FONT_FILES;
