import { Clock, Quote, Sparkles } from "lucide-react";
import { blogCopy, type BlogTranslation, type Locale } from "./blog-content";
import { formatLongDate } from "./glance-content";
import { articleAnswerCopy, sourcesCitedLabel } from "./article-answer-content";

/**
 * Answer-first blocks for blog articles.
 *
 * Two pieces, both aimed at how retrieval actually works:
 *
 * 1. `ArticleAnswer` — a short, self-contained answer rendered right after the
 *    hero, so the first chunk of the page states the answer, the review date,
 *    the reading time and how many official sources back it. It carries
 *    `data-speakable`, which is the selector used by the page's
 *    SpeakableSpecification.
 * 2. `ArticleToc` — a visible table of contents. Anchor links give every H2 an
 *    addressable URL and repeat the ancestor headings that travel with each
 *    chunk, which is what makes a section citable on its own.
 *
 * Neither component invents content: every sentence comes from fields already
 * published in the post.
 */

/** Ends a fragment with a full stop so joined sentences stay readable. */
function asSentence(value: string) {
  const text = value.trim();
  if (!text) return "";
  return /[.!?…:;]$/.test(text) ? text : `${text}.`;
}

/**
 * The direct answer: the post's own summary, then the first one or two
 * checklist items (they are already written as complete, standalone
 * sentences). Falls back to the opening paragraph when a post has no
 * checklist.
 */
export function articleAnswerSentences(article: BlogTranslation) {
  const support = article.checklist.slice(0, 2);
  const fallback = support.length > 0 ? support : article.intro.slice(0, 1);

  return [article.description, ...fallback].map(asSentence).filter(Boolean);
}

export function ArticleAnswer({
  locale,
  article,
  updated,
  readingTime,
  sourcesHref,
}: {
  locale: Locale;
  article: BlogTranslation;
  /** ISO date (YYYY-MM-DD) of the last content review. */
  updated: string;
  readingTime: number;
  /** Anchor of the on-page sources list, when the post cites sources. */
  sourcesHref?: string;
}) {
  const copy = articleAnswerCopy[locale];
  const t = blogCopy[locale];
  const answer = articleAnswerSentences(article).join(" ");
  const sourceCount = article.sources?.length ?? 0;

  return (
    <div
      data-speakable
      className="rounded-[18px] border border-line bg-paper-2 p-6 shadow-[0_24px_60px_-40px_rgba(16,24,40,0.32)] sm:p-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h2 className="flex items-center gap-2.5 font-display text-2xl font-medium tracking-[-0.01em] text-ink">
          <Sparkles className="h-4 w-4 text-mint-deep" strokeWidth={2} />
          {copy.heading}
        </h2>
        <p className="text-[13px] text-faint">
          {copy.reviewedLabel}{" "}
          <time dateTime={updated}>{formatLongDate(locale, updated)}</time>
        </p>
      </div>
      <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{answer}</p>
      <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
        <li className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-mint-deep" strokeWidth={2} />
          {readingTime} {t.readTimeLabel}
        </li>
        {sourceCount > 0 && (
          <li className="inline-flex items-center gap-1.5">
            <Quote className="h-3.5 w-3.5 text-mint-deep" strokeWidth={2} />
            {sourcesHref ? (
              <a
                href={sourcesHref}
                className="underline decoration-line underline-offset-4 transition-colors hover:text-ink"
              >
                {sourcesCitedLabel(locale, sourceCount)}
              </a>
            ) : (
              sourcesCitedLabel(locale, sourceCount)
            )}
          </li>
        )}
      </ul>
    </div>
  );
}

export type ArticleTocItem = { id: string; title: string };

export function ArticleToc({
  locale,
  items,
  className,
}: {
  locale: Locale;
  items: ArticleTocItem[];
  /** Layout-only classes: the card chrome stays owned by this component. */
  className?: string;
}) {
  const t = blogCopy[locale];

  return (
    <nav
      aria-label={t.tableOfContents}
      className={`rounded-[18px] border border-line bg-paper p-5 ${className ?? ""}`}
    >
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-mint-deep">
        {t.tableOfContents}
      </p>
      <ol className="mt-4 grid gap-3 text-sm">
        {items.map((item, index) => (
          <li key={item.id} className="flex gap-3">
            <span aria-hidden className="pt-px text-[12px] font-medium tabular-nums text-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
            <a href={`#${item.id}`} className="text-muted transition-colors hover:text-ink">
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
