/**
 * Turns typewriter text into book text.
 *
 * Authors type straight quotes and three dots; printed French uses curly
 * apostrophes, guillemets, an ellipsis character and narrow no-break spaces
 * before its double punctuation. Doing this badly is more visible than not
 * doing it at all, so the rules here are deliberately conservative.
 *
 * The no-break spaces produced here are never sent to the PDF as glyphs — the
 * line breaker treats them as unbreakable spacing. See linebreak.ts.
 */

import type { DocLang, Inline } from "./model";

/** U+202F, the narrow no-break space French typography uses before ; ! ? */
export const NARROW_NBSP = " ";
/** U+00A0, the regular no-break space, used before a colon. */
export const NBSP = " ";

const APOSTROPHE = "’";
const ELLIPSIS = "…";
const EM_DASH = "—";
const LAQUO = "«";
const RAQUO = "»";
const LDQUO = "“";
const RDQUO = "”";

/** Applied in both languages: these are plain typesetting fixes. */
function common(text: string): string {
  return text
    // Apostrophe, but only between letters — a straight quote elsewhere is
    // probably an opening quotation mark and is handled below.
    .replace(/(\p{L})'(\p{L})/gu, `$1${APOSTROPHE}$2`)
    .replace(/\.\.\./g, ELLIPSIS)
    .replace(/(\s)--(\s)/g, `$1${EM_DASH}$2`)
    .replace(/^--(\s)/gm, `${EM_DASH}$1`);
}

/**
 * Pairs straight double quotes: odd occurrences open, even ones close. The
 * count carries across a paragraph's runs, so it lives in a caller-owned state.
 */
type QuoteState = { open: boolean };

function pairQuotes(text: string, open: string, close: string, state: QuoteState): string {
  return text.replace(/"/g, () => {
    const mark = state.open ? close : open;
    state.open = !state.open;
    return mark;
  });
}

/** French double punctuation takes a no-break space before it. */
function frenchSpacing(text: string): string {
  return text
    // Strip any existing space first so we never stack two.
    .replace(/[   ]*([;!?])/g, `${NARROW_NBSP}$1`)
    // A colon takes a full no-break space, and must not eat "http://".
    .replace(/[   ]*:(?!\/\/)/g, `${NBSP}:`)
    .replace(new RegExp(`${LAQUO}[   ]*`, "g"), `${LAQUO}${NARROW_NBSP}`)
    .replace(new RegExp(`[   ]*${RAQUO}`, "g"), `${NARROW_NBSP}${RAQUO}`);
}

function polish(text: string, lang: DocLang, state: QuoteState): string {
  const marks: [string, string] = lang === "fr" ? [LAQUO, RAQUO] : [LDQUO, RDQUO];
  const quoted = pairQuotes(common(text), marks[0], marks[1], state);
  return lang === "fr" ? frenchSpacing(quoted) : quoted;
}

/** Polishes a standalone string. Quote pairing starts fresh. */
export const polishText = (text: string, lang: DocLang): string =>
  polish(text, lang, { open: false });

/**
 * Polishes a paragraph's runs in place, one run at a time, carrying the quote
 * parity across them. Run boundaries are therefore never moved, so inline
 * formatting stays exactly where the author put it.
 *
 * Known limit: a pattern straddling a run boundary — "..." with the last dot in
 * the next run — is left alone. Word rarely splits runs mid-punctuation, and
 * guessing across the boundary risks corrupting correct text.
 */
export function polishRuns(runs: Inline[], lang: DocLang): Inline[] {
  const state: QuoteState = { open: false };
  return runs.map((run) => ({ ...run, text: polish(run.text, lang, state) }));
}
