/**
 * Breaks a paragraph into justified lines.
 *
 * The model is boxes and glue: a chunk is an unbreakable run of text (a word,
 * plus anything joined to it by a no-break space), and chunks are separated by
 * breakable spaces. Justification stretches only those separating spaces, so a
 * French "mot !" never comes apart.
 *
 * No-break spaces are widths, never glyphs — Crimson Text has no U+202F, and
 * asking fontkit to encode one would throw. The renderer draws text pieces and
 * skips space pieces, advancing by their width.
 */

import { breakPoints } from "./hyphenate";
import type { DocLang, Inline } from "./model";
import { NARROW_NBSP, NBSP } from "./typography";

export type FontStyle = "regular" | "italic" | "bold" | "boldItalic";

export const styleFor = (run: Inline): FontStyle => {
  if (run.bold && run.italic) return "boldItalic";
  if (run.bold) return "bold";
  if (run.italic) return "italic";
  return "regular";
};

/** A piece of a line: text to draw, or pure advance for a no-break space. */
export type Piece =
  | { kind: "text"; text: string; style: FontStyle }
  | { kind: "space"; width: number };

/** An unbreakable group of pieces. */
type Chunk = {
  pieces: Piece[];
  width: number;
  /** A manual line break (Shift+Enter in Word) follows this chunk. */
  breakAfter?: boolean;
};

export type LaidPiece = Piece & { x: number };

export type Line = {
  pieces: LaidPiece[];
  /** First-line indent already included in the piece offsets. */
  indent: number;
  /** True when this line ends on a hyphen we inserted. */
  hyphenated: boolean;
  /** True for the last line of the paragraph, which is not justified. */
  last: boolean;
  /** Achieved space width divided by the natural space width. */
  gapRatio: number;
};

export type Measure = (text: string, style: FontStyle) => number;

export type BreakOptions = {
  width: number;
  firstIndent: number;
  lang: DocLang;
  hyphenate: boolean;
  /** Narrow no-break space width, as a fraction of the body size. */
  narrowSpaceEm?: number;
  bodySize: number;
  /** Maximum consecutive hyphenated lines. */
  maxLadder?: number;
};

const DEFAULT_LADDER = 2;
/** Widest a justified space may stretch before the line goes ragged. */
const MAX_STRETCH = 1.8;
/** Tightest a justified space may be squeezed. Below this the words touch. */
const MIN_SHRINK = 0.92;
const NARROW_SPACE_EM = 0.17;

/**
 * Splits runs into chunks. A no-break space is folded into the surrounding
 * chunk, so "mot !" and "« mot »" stay on one line.
 */
function toChunks(runs: Inline[], measure: Measure, options: BreakOptions): Chunk[] {
  const narrowWidth = (options.narrowSpaceEm ?? NARROW_SPACE_EM) * options.bodySize;
  const nbspWidth = measure(" ", "regular");

  const chunks: Chunk[] = [];
  let pieces: Piece[] = [];
  let width = 0;

  const flush = () => {
    if (pieces.length > 0) chunks.push({ pieces, width });
    pieces = [];
    width = 0;
  };

  for (const run of runs) {
    const style = styleFor(run);
    // Split on breakable whitespace only; the no-break spaces stay in the text.
    const parts = run.text.split(/([ \t\n\r]+)/);
    for (const part of parts) {
      if (part === "") continue;
      if (/^[ \t\n\r]+$/.test(part)) {
        flush();
        // A manual line break ends the line wherever it falls. Dialogue and
        // verse depend on it, and Word writes it as its own element rather
        // than as a paragraph.
        if (part.includes("\n") && chunks.length > 0) {
          chunks[chunks.length - 1].breakAfter = true;
        }
        continue;
      }
      for (const piece of splitNoBreakSpaces(part, style, narrowWidth, nbspWidth)) {
        pieces.push(piece);
        width += piece.kind === "text" ? measure(piece.text, piece.style) : piece.width;
      }
    }
  }
  flush();
  return chunks;
}

function splitNoBreakSpaces(
  text: string,
  style: FontStyle,
  narrowWidth: number,
  nbspWidth: number,
): Piece[] {
  const out: Piece[] = [];
  let buffer = "";
  for (const ch of text) {
    if (ch === NARROW_NBSP || ch === NBSP) {
      if (buffer) out.push({ kind: "text", text: buffer, style });
      buffer = "";
      out.push({ kind: "space", width: ch === NARROW_NBSP ? narrowWidth : nbspWidth });
    } else {
      buffer += ch;
    }
  }
  if (buffer) out.push({ kind: "text", text: buffer, style });
  return out;
}

/** A chunk is hyphenatable only when it is one plain word. */
function soleWord(chunk: Chunk): { text: string; style: FontStyle } | null {
  if (chunk.pieces.length !== 1) return null;
  const piece = chunk.pieces[0];
  return piece.kind === "text" ? { text: piece.text, style: piece.style } : null;
}

/**
 * Greedy word wrap that returns plain strings, for centred display text such as
 * chapter titles. Reconstructing a string from laid out pieces would drop the
 * breakable spaces, which are gaps between chunks rather than pieces of their
 * own — that is how "Chapitre 1" once came out as "Chapitre1".
 */
export function wrapText(
  text: string,
  measure: Measure,
  style: FontStyle,
  width: number,
): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  const lines: string[] = [];
  let current = words[0];
  for (const word of words.slice(1)) {
    const candidate = `${current} ${word}`;
    if (measure(candidate, style) <= width) current = candidate;
    else {
      lines.push(current);
      current = word;
    }
  }
  lines.push(current);
  return lines;
}

export function breakParagraph(
  runs: Inline[],
  measure: Measure,
  options: BreakOptions,
): Line[] {
  const chunks = toChunks(runs, measure, options);
  if (chunks.length === 0) return [];

  const spaceWidth = measure(" ", "regular");
  const maxLadder = options.maxLadder ?? DEFAULT_LADDER;

  const lines: Line[] = [];
  let current: Chunk[] = [];
  let currentWidth = 0;
  let ladder = 0;

  const indentOf = () => (lines.length === 0 ? options.firstIndent : 0);
  const availableOf = () => options.width - indentOf();

  const emit = (hyphenated: boolean, last: boolean) => {
    lines.push(layout(current, measure, {
      width: options.width,
      indent: indentOf(),
      spaceWidth,
      hyphenated,
      last,
    }));
    ladder = hyphenated ? ladder + 1 : 0;
    current = [];
    currentWidth = 0;
  };

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const gap = current.length > 0 ? spaceWidth : 0;

    // Spaces may be squeezed as well as stretched. Fitting one more word by
    // tightening the line is nearly invisible; leaving it out forces the line
    // to stretch or go ragged, which is not. Real prose showed six ragged
    // lines a page before this, all of them avoidable.
    const squeeze = current.length > 0 ? current.length * spaceWidth * (1 - MIN_SHRINK) : 0;

    if (currentWidth + gap + chunk.width - squeeze <= availableOf()) {
      current.push(chunk);
      currentWidth += gap + chunk.width;
      // A forced break ends the line here, unjustified — stretching a line the
      // author chose to end short is exactly wrong.
      if (chunk.breakAfter) emit(false, true);
      continue;
    }

    // Does not fit. Try to hyphenate it across the break.
    const word = options.hyphenate && ladder < maxLadder && i < chunks.length - 1
      ? soleWord(chunk)
      : null;
    const split = word
      ? findSplit(word, currentWidth + gap, availableOf(), measure, options.lang)
      : null;

    if (split) {
      current.push({
        pieces: [{ kind: "text", text: split.head, style: word!.style }],
        width: measure(split.head, word!.style),
      });
      chunks[i] = {
        pieces: [{ kind: "text", text: split.tail, style: word!.style }],
        width: measure(split.tail, word!.style),
      };
      emit(true, false);
      i -= 1; // reconsider the tail on the next line
      continue;
    }

    if (current.length > 0) {
      emit(false, false);
      i -= 1;
      continue;
    }

    // A single chunk wider than the whole measure: accept the overflow rather
    // than loop forever. The report flags it.
    current.push(chunk);
    currentWidth = chunk.width;
  }

  if (current.length > 0) emit(false, true);
  return lines;
}

/** Longest prefix of `word` that still fits once broken. */
function findSplit(
  word: { text: string; style: FontStyle },
  used: number,
  available: number,
  measure: Measure,
  lang: DocLang,
): { head: string; tail: string } | null {
  const points = breakPoints(word.text, lang);
  for (let i = points.length - 1; i >= 0; i--) {
    const { index, hyphen } = points[i];
    const head = hyphen ? `${word.text.slice(0, index)}-` : word.text.slice(0, index);
    if (used + measure(head, word.style) <= available) {
      return { head, tail: word.text.slice(index) };
    }
  }
  return null;
}

function layout(
  chunks: Chunk[],
  measure: Measure,
  opts: { width: number; indent: number; spaceWidth: number; hyphenated: boolean; last: boolean },
): Line {
  const available = opts.width - opts.indent;
  const content = chunks.reduce((sum, c) => sum + c.width, 0);
  const gaps = chunks.length - 1;

  const fitted = gaps === 0 ? opts.spaceWidth : (available - content) / gaps;

  // The last line of a paragraph, and any line with a single chunk, keeps its
  // natural spacing: stretching them is the classic amateur mistake. It may
  // still need squeezing, because a line is allowed to fit by tightening, and
  // composing it loose afterwards would push it past the margin.
  const wanted = opts.last || gaps === 0 ? Math.min(opts.spaceWidth, fitted) : fitted;

  // Past the cap, a justified line stops reading as even grey and starts
  // reading as holes. One ragged line is better than a line full of rivers,
  // so beyond the cap we give up on reaching the margin.
  const ratio = wanted / opts.spaceWidth;
  const gap =
    ratio > MAX_STRETCH ? opts.spaceWidth : Math.max(wanted, opts.spaceWidth * MIN_SHRINK);

  const pieces: LaidPiece[] = [];
  let x = opts.indent;
  for (const chunk of chunks) {
    for (const piece of chunk.pieces) {
      pieces.push({ ...piece, x });
      // Single-piece chunks already know their width; only mixed chunks
      // (text joined by a no-break space) need re-measuring.
      x += piece.kind !== "text"
        ? piece.width
        : chunk.pieces.length === 1
          ? chunk.width
          : measure(piece.text, piece.style);
    }
    x += gap;
  }

  return {
    pieces,
    indent: opts.indent,
    hyphenated: opts.hyphenated,
    last: opts.last,
    gapRatio: gap / opts.spaceWidth,
  };
}
