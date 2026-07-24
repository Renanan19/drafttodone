import { Sparkles } from "lucide-react";
import type { Locale } from "./blog-content";
import { formatLongDate, glanceCopy } from "./glance-content";

/**
 * Answer-first summary card.
 *
 * Rendered immediately after the H1 so the first chunk of the page carries the
 * whole answer: what it is, who it is for, price, and the honest limits.
 * `data-speakable` matches the SpeakableSpecification in the page JSON-LD.
 */
export function AnswerBlock({
  locale,
  scope,
  updated,
}: {
  locale: Locale;
  /** One-sentence summary of this specific page. */
  scope: string;
  /** ISO date (YYYY-MM-DD) of the last content review. */
  updated: string;
}) {
  const t = glanceCopy[locale];
  const rows = [{ label: t.scopeLabel, value: scope }, ...t.rows];

  return (
    <section className="border-b border-line/70 bg-paper-2">
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6">
        <div
          data-speakable
          className="rounded-[18px] border border-line bg-paper p-7 shadow-[0_24px_60px_-40px_rgba(16,24,40,0.32)] sm:p-9"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-medium tracking-[-0.01em] text-ink">
              <Sparkles className="h-4 w-4 text-mint-deep" strokeWidth={2} />
              {t.heading}
            </h2>
            <p className="text-[13px] text-faint">
              {t.updatedLabel} <time dateTime={updated}>{formatLongDate(locale, updated)}</time>
            </p>
          </div>
          <dl className="mt-7 grid gap-5 sm:grid-cols-[minmax(9rem,10rem)_1fr] sm:gap-x-8 sm:gap-y-4">
            {rows.map((row) => (
              <div key={row.label} className="contents">
                <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-mint-deep sm:pt-0.5">
                  {row.label}
                </dt>
                <dd className="text-[15px] leading-relaxed text-ink-soft">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
