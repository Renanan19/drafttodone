import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, AlertTriangle, Check } from "lucide-react";
import {
  blogCopy,
  isLocale,
  locales,
  SITE_NAME,
  SITE_URL,
  type Locale,
} from "@/app/blog-content";
import { BlogFooter, BlogHeader } from "@/app/blog-ui";
import { APP_SIGNUP_URL } from "@/app/home-content";
import { LeadCapture } from "@/app/lead-capture";
import { playbookCopy, playbookPath } from "@/app/playbook-content";
import { seoDescription, seoTitle } from "@/app/seo-metadata";
import {
  breadcrumbList,
  itemListNode,
  organizationRef,
  softwareRef,
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
  const copy = playbookCopy[locale];

  const title = seoTitle(copy.meta.title);
  const description = seoDescription(copy.meta.description);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: playbookPath(locale),
      languages: Object.fromEntries(locales.map((item) => [item, playbookPath(item)])),
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${playbookPath(locale)}`,
      siteName: SITE_NAME,
      type: "article",
      locale: openGraphLocales[locale],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PlaybookPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale;
  const copy = playbookCopy[locale];
  const t = blogCopy[locale];
  const canonicalUrl = `${SITE_URL}${playbookPath(locale)}`;
  const languagePaths = Object.fromEntries(
    locales.map((item) => [item, playbookPath(item)]),
  ) as Record<Locale, string>;

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
      extra: {
        abstract: copy.lead,
        about: softwareRef,
        publisher: organizationRef,
      },
    }),
    // Each step is a named, addressable node so an answer engine can cite one
    // step rather than having to swallow the whole page.
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${canonicalUrl}#howto`,
      name: copy.h1,
      description: copy.lead,
      inLanguage: locale,
      totalTime: "PT30M",
      publisher: organizationRef,
      step: copy.steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.body,
        url: `${canonicalUrl}#${step.id}`,
        itemListElement: step.points.map((point) => ({
          "@type": "HowToDirection",
          text: point,
        })),
      })),
    },
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
    itemListNode({
      id: `${canonicalUrl}#steps`,
      name: copy.stepsHeading,
      locale,
      items: copy.steps.map((step) => ({
        name: step.title,
        url: `${canonicalUrl}#${step.id}`,
        description: step.body,
      })),
    }),
    breadcrumb,
  ];

  return (
    <div lang={locale} className="min-h-screen bg-paper text-ink">
      <BlogHeader locale={locale} paths={languagePaths} />
      <main>
        {/* Hero */}
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
            <p className="mt-6 max-w-3xl border-l-2 border-mint pl-5 text-[15px] leading-relaxed text-ink-soft">
              {copy.authorNote}
            </p>
          </div>
        </section>

        {/* The loop */}
        <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6">
          <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
            {copy.stepsHeading}
          </h2>
          <div className="mt-10 grid gap-6">
            {copy.steps.map((step) => (
              <article
                key={step.id}
                id={step.id}
                className="scroll-mt-24 rounded-[18px] border border-line bg-paper p-7 shadow-[0_24px_60px_-38px_rgba(16,24,40,0.32)]"
              >
                <p className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
                  {step.number}
                </p>
                <h3 className="mt-3 text-balance font-display text-[1.75rem] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{step.body}</p>
                <ul className="mt-6 grid gap-3">
                  {step.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3 rounded-xl bg-paper-2 p-4">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft" strokeWidth={2} />
                  <p className="text-[14px] leading-relaxed text-ink-soft">
                    <span className="font-semibold text-ink">{copy.mistakeLabel}: </span>
                    {step.mistake}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* The email gate — the kit, not the playbook */}
        <section id="kit" className="scroll-mt-24 border-y border-line/70 bg-paper-2">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
            <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
              {copy.gate.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{copy.gate.body}</p>
            <ul className="mt-7 grid gap-3">
              {copy.gate.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LeadCapture locale={locale} source="playbook" />
            </div>
          </div>
        </section>

        {/* Where the product sits inside the method */}
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-ink">
            {copy.toolHeading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">{copy.toolBody}</p>
          <a
            href={APP_SIGNUP_URL}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-[15px] font-medium text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0"
          >
            {copy.toolCta}
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </a>
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
          </div>
        </section>

        {/* Close */}
        <section className="mx-auto max-w-3xl px-5 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-ink">
            {copy.closingHeading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{copy.closingBody}</p>
          <p className="mt-8 text-[13px] text-faint">
            {t.updatedLabel} {UPDATED}
          </p>
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
