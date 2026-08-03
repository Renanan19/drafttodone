/**
 * Turns a finished render into the facts and warnings the author needs.
 *
 * Warnings are written as codes, not sentences: the wording lives in copy.ts so
 * both languages stay in step, and so the engine never has to know about the UI.
 */

import { SPINE_TEXT_MIN_PAGES, gutterMinInchesFor, spineWidthInches } from "./kdp-rules";
import type { BlockDoc } from "./model";
import type { RenderedPdf } from "./pdf-writer";

export type WarningCode =
  | "chaptersGuessed"
  | "noChapters"
  | "imagesBelowDpi"
  | "imagesUnreadable"
  | "linesOverflow"
  | "loose"
  | "spineTooThinForText"
  | "belowKdpMinimumPages";

export type Warning = { code: WarningCode; count?: number };

export type Report = {
  pageCount: number;
  imageCount: number;
  chapterCount: number;
  gutterInches: number;
  gutterMinInches: number;
  spineWhiteInches: number;
  spineCreamInches: number;
  warnings: Warning[];
};

/** KDP will not print a paperback under this many pages. */
const KDP_MIN_PAGES = 24;

export function buildReport(doc: BlockDoc, pdf: RenderedPdf): Report {
  const warnings: Warning[] = [];

  if (doc.chapterSource === "heuristic") warnings.push({ code: "chaptersGuessed" });
  if (doc.chapterSource === "single") warnings.push({ code: "noChapters" });
  if (pdf.softImages > 0) {
    warnings.push({ code: "imagesBelowDpi", count: pdf.softImages });
  }
  if (doc.unreadableImages > 0) {
    warnings.push({ code: "imagesUnreadable", count: doc.unreadableImages });
  }
  if (pdf.overflowingLines > 0) {
    warnings.push({ code: "linesOverflow", count: pdf.overflowingLines });
  }
  // Above roughly twice the natural space, justification reads as holes in the
  // page rather than as even grey.
  if (pdf.worstGapRatio > 2) warnings.push({ code: "loose" });
  if (pdf.pageCount < KDP_MIN_PAGES) warnings.push({ code: "belowKdpMinimumPages" });
  if (pdf.pageCount < SPINE_TEXT_MIN_PAGES) warnings.push({ code: "spineTooThinForText" });

  return {
    pageCount: pdf.pageCount,
    imageCount: doc.images.length,
    chapterCount: doc.chapters.length,
    gutterInches: pdf.gutterInches,
    gutterMinInches: gutterMinInchesFor(pdf.pageCount),
    spineWhiteInches: spineWidthInches(pdf.pageCount, "white"),
    spineCreamInches: spineWidthInches(pdf.pageCount, "cream"),
    warnings,
  };
}
