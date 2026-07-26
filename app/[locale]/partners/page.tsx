import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import {
  blogCopy,
  isLocale,
  locales,
  SITE_NAME,
  SITE_URL,
  type Locale,
} from "@/app/blog-content";
import { BlogFooter, BlogHeader } from "@/app/blog-ui";
import { LeadCapture } from "@/app/lead-capture";
import {
  AFFILIATE_COMMISSION_PCT,
  partnersCopy,
  partnersPath,
  yearlyCommissionEur,
} from "@/app/partners-content";
import { seoDescription, seoTitle } from "@/app/seo-metadata";
import {
  breadcrumbList,
  organizationRef,
  speakableSpec,
  webPageNode,
} from "@/app/structured-data";

export const dynamicParams = false;

const UPDATED = "2026-07-26";

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  it: "it_IT",
  de: "de_DE",
};

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = partnersCopy[locale];

  const title = seoTitle(copy.meta.title);
  const description = seoDescription(copy.meta.description);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: partnersPath(locale),
      languages: Object.fromEntries(locales.map((item) => [item, partnersPath(item)])),
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${partnersPath(locale)}`,
      siteName: SITE_NAME,
      type: "website",
      locale: openGraphLocales[locale],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PartnersPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale;
  const copy = partnersCopy[locale];
  const t = blogCopy[locale];
  const canonicalUrl = `${SITE_URL}${partnersPath(locale)}`;
  const languagePaths = Object.fromEntries(
    locales.map((item) => [item, partnersPath(item)]),
  ) as Record<Locale, string>;

  const headline = copy.affiliate.headline
    .replace("{pct}", String(AFFILIATE_COMMISSION_PCT))
    .replace("{commission}", String(yearlyCommissionEur()));

  const breadcrumb = breadcrumbList([
    { name: SITE_NAME, url: SITE_URL },
    { name: copy.eyebrow, url: canonicalUrl },
  ]);

  const jsonLd = [
    webPageNode({
      type: "WebPage",
      url: canonicalUrl,
      name: copy.meta.title,
      description: copy.meta.description,
      locale,
      dateModified: UPDATED,
      breadcrumb,
      extra: { abstract: copy.lead, publisher: organizationRef },
    }),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      inLanguage: locale,
      speakable: speakableSpec,
      mainEntity: copy.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    breadcrumb,
  ];

  return (
    <div lang={locale} className="min-h-screen bg-paper text-ink">
      <BlogHeader locale={locale} paths={languagePaths} />
      <main>
        <section className="relative overflow-hidden border-b border-line/70">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(169,240,214,0.26),transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {copy.eyebrow}
            </p>
            <h1 className="text-balance font-display text-[2.75rem] font-medium leading-[1.05] tracking-[-0.015em] text-ink sm:text-6xl">
              {copy.h1}
            </h1>
            <p data-speakable className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
              {copy.lead}
            </p>
          </div>
        </section>

        {/* Affiliate */}
        <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6">
          <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
            {copy.affiliate.h2}
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted">
            {copy.affiliate.body}
          </p>

          <p className="mt-9 rounded-[18px] border border-mint/50 bg-mint-soft/30 p-7 text-balance font-display text-[1.65rem] font-medium leading-[1.2] tracking-[-0.01em] text-ink">
            {headline}
          </p>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2">
            {copy.affiliate.terms.map((term) => (
              <div key={term.label} className="bg-paper p-6">
                <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
                  {term.label}
                </dt>
                <dd className="mt-2.5 text-[15px] leading-relaxed text-ink">{term.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 rounded-[18px] border border-line bg-paper-2 p-7">
            <h3 className="font-display text-2xl font-medium tracking-[-0.01em] text-ink">
              {copy.affiliate.kitHeading}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{copy.affiliate.kitBody}</p>
            <ul className="mt-6 grid gap-3">
              {copy.affiliate.kit.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Creator partnership */}
        <section className="border-y border-line/70 bg-paper-2">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6">
            <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
              {copy.creator.h2}
            </h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted">
              {copy.creator.body}
            </p>
            <ul className="mt-7 grid gap-3">
              {copy.creator.points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Apply */}
        <section id="apply" className="scroll-mt-24 mx-auto max-w-3xl px-5 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-ink">
            {copy.apply.h2}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">{copy.apply.body}</p>
          <div className="mt-8">
            <LeadCapture locale={locale} source="partners" />
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-line/70 bg-paper-2">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
            <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
              {copy.faqHeading}
            </h2>
            <div className="mt-6 divide-y divide-line rounded-[18px] border border-line bg-paper">
              {copy.faq.map((item) => (
                <div key={item.q} className="p-6">
                  <h3 className="text-lg font-semibold text-ink">{item.q}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[13px] text-faint">
              {t.updatedLabel} {UPDATED}
            </p>
          </div>
        </section>
      </main>
      <BlogFooter locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
