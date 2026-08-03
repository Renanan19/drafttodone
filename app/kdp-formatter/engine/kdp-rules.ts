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
