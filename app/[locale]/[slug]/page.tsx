import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Layers, Search, ShieldCheck } from "lucide-react";
import {
  blogCopy,
  blogIndexPath,
  isLocale,
  locales,
  SITE_NAME,
  SITE_URL,
  type Locale,
} from "@/app/blog-content";
import { BlogFooter, BlogHeader } from "@/app/blog-ui";
import { KdpRoyaltyCalculator } from "@/app/kdp-royalty-calculator";
import {
  getSolutionAlternates,
  getSolutionBySlug,
  getSolutionStaticParams,
  solutionPages,
  solutionPath,
  solutionUrl,
} from "@/app/seo-pages";
import { APP_URL } from "@/app/home-content";

export const dynamicParams = false;

type SolutionPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  it: "it_IT",
  de: "de_DE",
};

export function generateStaticParams() {
  return getSolutionStaticParams();
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const page = getSolutionBySlug(locale, slug);

  if (!page) {
    return {
      title: SITE_NAME,
    };
  }

  const solution = page.translations[locale];

  return {
    title: `${solution.title} | ${SITE_NAME}`,
    description: solution.description,
    keywords: solution.keywords,
    alternates: {
      canonical: solutionPath(locale, page),
      languages: getSolutionAlternates(page),
    },
    openGraph: {
      title: solution.title,
      description: solution.description,
      url: solutionUrl(locale, page),
      siteName: SITE_NAME,
      type: "website",
      locale: openGraphLocales[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => openGraphLocales[item]),
    },
    twitter: {
      card: "summary_large_image",
      title: solution.title,
      description: solution.description,
    },
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale;
  const page = getSolutionBySlug(locale, slug);
  if (!page) notFound();

  const t = blogCopy[locale];
  const solution = page.translations[locale];
  const languagePaths = Object.fromEntries(
    locales.map((item) => [item, solutionPath(item, page)]),
  ) as Record<Locale, string>;
  const moreTools = solutionPages.filter((item) => item.key !== page.key);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "PublishingApplication",
      operatingSystem: "Web",
      url: solutionUrl(locale, page),
      description: solution.description,
      inLanguage: locale,
      offers: {
        "@type": "AggregateOffer",
        availability: "https://schema.org/OnlineOnly",
        lowPrice: "14.99",
        highPrice: "390",
        offerCount: "2",
        priceCurrency: "EUR",
      },
      featureList: solution.sections.flatMap((section) => section.points),
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      keywords: solution.keywords.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: solution.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: SITE_NAME,
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: solution.eyebrow,
          item: solutionUrl(locale, page),
        },
      ],
    },
  ];

  const icons = [Layers, ShieldCheck, Search];

  return (
    <div lang={locale} className="min-h-screen bg-paper text-ink">
      <BlogHeader locale={locale} paths={languagePaths} />
      <main>
        <section className="relative overflow-hidden border-b border-line/70">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(169,240,214,0.26),transparent)]"
          />
          <div className="relative mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 sm:py-24">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {solution.eyebrow}
            </p>
            <h1 className="text-balance font-display text-[2.75rem] font-medium leading-[1.05] tracking-[-0.015em] text-ink sm:text-6xl">
              {solution.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-balance text-lg leading-relaxed text-muted">
              {solution.lead}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
              {solution.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-2 px-3 py-1 text-[12px] font-medium text-muted"
                >
                  <Check className="h-3 w-3 text-mint" strokeWidth={3} />
                  {keyword}
                </span>
              ))}
            </div>
            <a
              href={APP_URL}
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-[15px] font-medium text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0"
            >
              {solution.cta}
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
          </div>
        </section>

        {page.tool === "kdpRoyaltyCalculator" && <KdpRoyaltyCalculator locale={locale} />}

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {solution.sections.map((section, index) => {
              const Icon = icons[index] ?? Check;
              return (
                <article
                  key={section.id}
                  id={section.id}
                  className="rounded-[18px] border border-line bg-paper p-7 shadow-[0_24px_60px_-38px_rgba(16,24,40,0.32)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-paper-3 text-mint-deep">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-[-0.01em] text-ink">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{section.body}</p>
                  <ul className="mt-6 grid gap-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-line/70 bg-paper-2">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6">
            <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
              {t.faq}
            </h2>
            <div className="mt-6 divide-y divide-line rounded-[18px] border border-line bg-paper">
              {solution.faq.map((item) => (
                <div key={item.question} className="p-6">
                  <h3 className="text-lg font-semibold text-ink">{item.question}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={blogIndexPath(locale)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper-3"
              >
                {t.blog}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={APP_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
              >
                {solution.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
        {moreTools.length > 0 && (
          <section className="border-t border-line/70">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
              <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-ink">
                {t.tools}
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {moreTools.map((item) => {
                  const target = item.translations[locale];
                  return (
                    <a
                      key={item.key}
                      href={solutionPath(locale, item)}
                      className="group rounded-[18px] border border-line bg-paper p-6 transition-shadow duration-300 hover:shadow-[0_24px_60px_-34px_rgba(16,24,40,0.38)]"
                    >
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
                        {target.eyebrow}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-ink">
                        {target.h1}
                      </h3>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors group-hover:text-ink">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <BlogFooter locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
