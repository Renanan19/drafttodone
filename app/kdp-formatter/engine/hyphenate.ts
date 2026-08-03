/**
 * Hyphenation points for French and English.
 *
 * Justified French without hyphenation is not a rougher result, it is a broken
 * one: measured on the reference paragraph, the worst line stretched its spaces
 * to 5.6x their natural width. With hyphenation the same paragraph peaks at
 * 1.57x. That is why this module exists rather than being a later polish step.
 *
 * Patterns are loaded on demand — together they are around 45 KB.
 */

import type Hypher from "hypher";
import type { DocLang } from "./model";

/**
 * Letters required either side of the hyphen. Three and three is the French
 * trade rule; it also means no word shorter than six letters is ever broken,
 * which is what stops "hiver" turning into "hi-ver".
 */
const MIN_BEFORE = 3;
const MIN_AFTER = 3;

type Hyphenator = { hyphenate(word: string): string[] };

const loaded = new Map<DocLang, Hyphenator>();
const cache = new Map<string, number[]>();

export async function loadHyphenator(lang: DocLang): Promise<void> {
  if (loaded.has(lang)) return;
  const [{ default: Hypher }, patterns] = await Promise.all([
    import("hypher"),
    lang === "fr" ? import("hyphenation.fr") : import("hyphenation.en-us"),
  ]);
  loaded.set(lang, new Hypher(patterns.default) as unknown as Hyphenator);
}

/**
 * Break positions inside `word`, as indices at which a hyphen may be inserted.
 * Returns an empty list when the word must not be broken.
 *
 * French forbids breaking straight after an elision: "s'était" must never
 * become "s'é-tait". Counting the minimum from the last apostrophe rather than
 * from the start of the token handles every elision without listing them.
 */
export function hyphenationPoints(word: string, lang: DocLang): number[] {
  const key = `${lang}\u0000${word}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const points = compute(word, lang);
  cache.set(key, points);
  return points;
}

/** A place a token may be split, and whether a hyphen belongs at the break. */
export type BreakPoint = { index: number; hyphen: boolean };

/** Long enough to wreck a line, and carrying a URL or path separator. */
const SPLITTABLE = /^(?=.{12,})\S*[./_]\S*$/;
const SEPARATORS = new Set([".", "/", "_"]);
/** Characters required either side of a separator before a break is worth it. */
const MIN_SEGMENT = 4;

/**
 * Where a token may be broken across lines.
 *
 * Ordinary words break at syllables and take a hyphen. Long tokens carrying
 * dots or slashes — URLs, domains, file paths — break *after* a separator and
 * take no hyphen, because a hyphen inside an address reads as part of it.
 *
 * Without this, one unbreakable URL forces the line before it to stretch its
 * spaces past three times their natural width. Measured on real documents,
 * that was 19% of the justified lines.
 */
export function breakPoints(word: string, lang: DocLang): BreakPoint[] {
  const syllables = hyphenationPoints(word, lang);
  if (syllables.length > 0) return syllables.map((index) => ({ index, hyphen: true }));
  if (!SPLITTABLE.test(word)) return [];

  const points: BreakPoint[] = [];
  for (let i = 0; i < word.length - 1; i++) {
    if (!SEPARATORS.has(word[i])) continue;
    // Break after the separator, so a line ends on "example." not "example".
    const index = i + 1;
    if (index >= MIN_SEGMENT && word.length - index >= MIN_SEGMENT) {
      points.push({ index, hyphen: false });
    }
  }
  return points;
}

function compute(word: string, lang: DocLang): number[] {
  const hyphenator = loaded.get(lang);
  if (!hyphenator) return [];

  // Strip surrounding punctuation; only the alphabetic core can be broken.
  const match = /^([^\p{L}]*)(\p{L}[\p{L}''’-]*?)([^\p{L}]*)$/u.exec(word);
  if (!match) return [];
  const [, prefix, core] = match;

  // A word already containing a hyphen may only break at that hyphen.
  const existing = core.indexOf("-");
  if (existing !== -1) {
    const after = core.length - existing - 1;
    return existing >= MIN_BEFORE && after >= MIN_AFTER
      ? [prefix.length + existing + 1]
      : [];
  }

  // Everything before the last apostrophe is an elided article, not a syllable.
  const elision = Math.max(core.lastIndexOf("'"), core.lastIndexOf("’"));
  const stem = elision === -1 ? core : core.slice(elision + 1);
  const stemOffset = prefix.length + (elision === -1 ? 0 : elision + 1);

  if (stem.length < MIN_BEFORE + MIN_AFTER) return [];

  const syllables = hyphenator.hyphenate(stem);
  const points: number[] = [];
  let at = 0;
  for (let i = 0; i < syllables.length - 1; i++) {
    at += syllables[i].length;
    if (at >= MIN_BEFORE && stem.length - at >= MIN_AFTER) points.push(stemOffset + at);
  }
  return points;
}

/** Test seam: lets the unit tests install a hyphenator without dynamic import. */
export function _setHyphenator(lang: DocLang, hyphenator: Hyphenator | null): void {
  cache.clear();
  if (hyphenator) loaded.set(lang, hyphenator);
  else loaded.delete(lang);
}

export type { Hypher };
