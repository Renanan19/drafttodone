import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Layers, Minus, Search, ShieldCheck } from "lucide-react";
import {
  blogCopy,
  blogIndexPath,
  getPostTranslation,
  isLocale,
  locales,
  postLocales,
  postPath,
  posts,
  postUrl,
  SITE_NAME,
  SITE_URL,
  type BlogPost,
  type Locale,
} from "@/app/blog-content";
import { BlogFooter, BlogHeader } from "@/app/blog-ui";
import { KdpRoyaltyCalculator } from "@/app/kdp-royalty-calculator";
import {
  commercialSolutionPages,
  getSolutionAlternates,
  getSolutionBySlug,
  getSolutionStaticParams,
  solutionPath,
  solutionUrl,
} from "@/app/seo-pages";
import { APP_SIGNUP_URL, APP_URL } from "@/app/home-content";
import { seoDescription, seoTitle } from "@/app/seo-metadata";
import { AnswerBlock } from "@/app/answer-block";
import { contrastCopy } from "@/app/contrast-content";
import { contrastLabels } from "@/app/glance-content";
import { getTopicLinks, topicLinkCopy, type TopicLink } from "@/app/topic-links";
import {
  aggregateOffer,
  breadcrumbList,
  imageObject,
  itemListNode,
  organizationRef,
  softwareRef,
  speakableSpec,
  webPageNode,
  websiteRef,
} from "@/app/structured-data";

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
  const metadataTitle = seoTitle(solution.seoTitle ?? solution.title);
  const metadataDescription = seoDescription(solution.seoDescription ?? solution.description);

  return {
    metadataBase: new URL(SITE_URL),
    title: metadataTitle,
    description: metadataDescription,
    keywords: solution.keywords,
    alternates: {
      canonical: solutionPath(locale, page),
      languages: getSolutionAlternates(page),
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: solutionUrl(locale, page),
      siteName: SITE_NAME,
      type: "website",
      locale: openGraphLocales[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => openGraphLocales[item]),
      images: [
        {
          url: `${solutionPath(locale, page)}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: solution.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: [`${solutionPath(locale, page)}/opengraph-image`],
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
  const canonicalUrl = solutionUrl(locale, page);
  const languagePaths = Object.fromEntries(
    locales.map((item) => [item, solutionPath(item, page)]),
  ) as Record<Locale, string>;
  const isEditorial = page.kind === "editorial";
  const moreTools = commercialSolutionPages.filter((item) => item.key !== page.key);
  const contrast = contrastCopy[page.key]?.[locale];
  const ogImageUrl = `${canonicalUrl}/opengraph-image`;
  // The intent bridge: the 3-4 guides that answer the questions this page
  // sells the answer to, with anchors that name the job. A guide that has no
  // translation in this locale is dropped rather than linked to English.
  const topicGuides = getTopicLinks(page.key)
    .map((link) => {
      const post = posts.find((item) => item.key === link.postKey);
      return post ? { link, post } : undefined;
    })
    .filter(
      (entry): entry is { link: TopicLink; post: BlogPost } =>
        entry !== undefined && postLocales(entry.post).includes(locale),
    );

  const breadcrumb = breadcrumbList([
    { name: SITE_NAME, url: SITE_URL },
    { name: solution.eyebrow, url: canonicalUrl },
  ]);

  const jsonLd = [
    webPageNode({
      type: isEditorial ? ["WebPage", "AboutPage"] : "WebPage",
      url: canonicalUrl,
      name: solution.title,
      description: solution.description,
      locale,
      dateModified: page.updated,
      image: { url: ogImageUrl, caption: solution.h1 },
      breadcrumb,
      extra: {
        // The lead answers who it is for and what it does before any scroll:
        // the first chunk of the page has to stand on its own.
        abstract: solution.lead,
        keywords: solution.keywords.join(", "),
        about: isEditorial ? organizationRef : softwareRef,
        ...(solution.sources && solution.sources.length > 0
          ? {
              citation: solution.sources.map((source) => ({
                "@type": "CreativeWork",
                name: source.label,
                url: source.href,
              })),
            }
          : {}),
        ...(contrast ? { disambiguatingDescription: contrast.definition } : {}),
      },
    }),
    ...(isEditorial
      ? []
      : [
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "@id": `${canonicalUrl}#software`,
            name: SITE_NAME,
            applicationCategory: "PublishingApplication",
            applicationSubCategory: "AI publishing software",
            operatingSystem: "Web",
            url: APP_URL,
            installUrl: APP_SIGNUP_URL,
            mainEntityOfPage: canonicalUrl,
            isPartOf: {
              "@id": `${SITE_URL}/#software`,
            },
            description: contrast?.definition ?? solution.description,
            inLanguage: locale,
            availableLanguage: ["English", "French", "Italian", "German"],
            offers: aggregateOffer(),
            featureList: solution.sections.flatMap((section) => section.points),
            publisher: organizationRef,
            brand: organizationRef,
            isSimilarTo: websiteRef,
            keywords: solution.keywords.join(", "),
            citation: solution.sources?.map((source) => ({
              "@type": "CreativeWork",
              name: source.label,
              url: source.href,
            })),
          },
        ]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      inLanguage: locale,
      speakable: speakableSpec,
      mainEntity: solution.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    // Every H2 on the page is addressable and enumerated: a section that can be
    // named and linked is a section an answer engine can cite on its own.
    itemListNode({
      id: `${canonicalUrl}#sections`,
      name: solution.title,
      locale,
      items: solution.sections.map((section) => ({
        name: section.title,
        url: `${canonicalUrl}#${section.id}`,
        description: section.body,
      })),
    }),
    // The intent bridge as data: which guide resolves which job, stated in the
    // same words as the visible anchor, so the relationship survives without
    // the HTML.
    ...(topicGuides.length > 0
      ? [
          itemListNode({
            id: `${canonicalUrl}#topic-guides`,
            name: topicLinkCopy[locale].heading,
            description: topicLinkCopy[locale].intro,
            locale,
            items: topicGuides.map(({ link, post }) => ({
              name: link.anchor[locale],
              url: postUrl(locale, post),
              description: getPostTranslation(post, locale).description,
            })),
          }),
        ]
      : []),
    ...(moreTools.length > 0
      ? [
          itemListNode({
            id: `${canonicalUrl}#related`,
            name: t.tools,
            locale,
            items: moreTools.map((item) => ({
              name: item.translations[locale].h1,
              url: solutionUrl(locale, item),
              description: item.translations[locale].description,
            })),
          }),
        ]
      : []),
    breadcrumb,
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
            {!isEditorial && (
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
            )}
            <a
              href={APP_SIGNUP_URL}
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-[15px] font-medium text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0"
            >
              {solution.cta}
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
          </div>
        </section>

        <AnswerBlock locale={locale} scope={solution.description} updated={page.updated} />

        {contrast && (
          <section className="border-b border-line/70">
            <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6">
              <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
                {contrastLabels[locale].heading}
              </h2>
              <p data-speakable className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
                <span className="sr-only">{contrastLabels[locale].definition}: </span>
                {contrast.definition}
              </p>
              <div className="mt-9 grid gap-5 md:grid-cols-2">
                <div className="rounded-[18px] border border-line bg-paper p-6">
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
                    {contrastLabels[locale].bestFor}
                  </h3>
                  <ul className="mt-5 grid gap-3">
                    {contrast.bestFor.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[18px] border border-line bg-paper-2 p-6">
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {contrastLabels[locale].notFor}
                  </h3>
                  <ul className="mt-5 grid gap-3">
                    {contrast.notFor.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-faint" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 rounded-[18px] border border-line bg-paper p-6">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
                  {contrastLabels[locale].contrasts}
                </h3>
                <ul className="mt-5 grid gap-4">
                  {contrast.contrasts.map((item) => (
                    <li key={item} className="text-[15px] leading-relaxed text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

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
                  {/* Headings are now full questions (~50 chars), so the card
                      title steps down a size to keep three even columns. */}
                  <h2 className="mt-6 text-balance font-display text-[1.6rem] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
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

        {topicGuides.length > 0 && (
          <section id="topic-guides" className="border-t border-line/70">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
              <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
                {topicLinkCopy[locale].heading}
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
                {topicLinkCopy[locale].intro}
              </p>
              <div className="mt-9 grid gap-5 md:grid-cols-2">
                {topicGuides.map(({ link, post }) => {
                  const guide = getPostTranslation(post, locale);
                  return (
                    <a
                      key={post.key}
                      href={postPath(locale, post)}
                      className="group flex flex-col rounded-[18px] border border-line bg-paper p-6 transition-shadow duration-300 hover:shadow-[0_24px_60px_-34px_rgba(16,24,40,0.38)]"
                    >
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
                        {guide.category}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-medium leading-tight tracking-[-0.01em] text-ink">
                        {link.anchor[locale]}
                      </h3>
                      <span className="mt-5 inline-flex items-start gap-2 text-sm leading-relaxed text-muted transition-colors group-hover:text-ink">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-mint transition-transform group-hover:translate-x-0.5" />
                        <span>{guide.title}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        )}

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
            {solution.sources && solution.sources.length > 0 && (
              <div className="mt-8 rounded-[18px] border border-line bg-paper p-6">
                <h3 className="font-display text-2xl font-medium text-ink">{t.sources}</h3>
                <ul className="mt-4 grid gap-3 text-sm">
                  {solution.sources.map((source) => (
                    <li key={source.href}>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
                      >
                        {source.label}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={blogIndexPath(locale)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper-3"
              >
                {t.blog}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={APP_SIGNUP_URL}
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
