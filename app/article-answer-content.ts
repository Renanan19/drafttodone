import type { Locale } from "./blog-content";

/**
 * UI labels for the answer-first block on blog articles.
 *
 * Retrieval pipelines chunk a page (~500 tokens per chunk) and score each chunk
 * on its own. The "In short" card exists so the very first chunk of an article
 * already carries a complete answer plus its freshness and sourcing signals,
 * instead of a narrative intro that only makes sense after the whole page.
 *
 * Every string lives in all four locales: an English label inside a French,
 * Italian or German page weakens both the reader's trust and the language
 * signal answer engines read.
 */

export type ArticleAnswerCopy = {
  /** Card heading. */
  heading: string;
  /** Prefix for the last content-review date. */
  reviewedLabel: string;
  /** Exactly one cited source. */
  sourcesOne: string;
  /** Two or more cited sources; `{count}` is replaced with the number. */
  sourcesMany: string;
};

export const articleAnswerCopy: Record<Locale, ArticleAnswerCopy> = {
  en: {
    heading: "In short",
    reviewedLabel: "Last reviewed",
    sourcesOne: "1 source cited",
    sourcesMany: "{count} sources cited",
  },
  fr: {
    heading: "En bref",
    reviewedLabel: "Dernière relecture",
    sourcesOne: "1 source citée",
    sourcesMany: "{count} sources citées",
  },
  it: {
    heading: "In breve",
    reviewedLabel: "Ultima revisione",
    sourcesOne: "1 fonte citata",
    sourcesMany: "{count} fonti citate",
  },
  de: {
    heading: "Kurz gefasst",
    reviewedLabel: "Zuletzt geprüft",
    sourcesOne: "1 zitierte Quelle",
    sourcesMany: "{count} zitierte Quellen",
  },
};

/** "3 sources cited" in the page language, with a real singular form. */
export function sourcesCitedLabel(locale: Locale, count: number) {
  const copy = articleAnswerCopy[locale];
  if (count === 1) return copy.sourcesOne;
  return copy.sourcesMany.replace("{count}", String(count));
}
