import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Search, Sparkles } from "lucide-react";
import {
  blogCopy,
  blogIndexPath,
  blogIndexUrl,
  getBlogIndexAlternates,
  getPostsForLocale,
  isLocale,
  locales,
  postPath,
  postUrl,
  SITE_NAME,
  SITE_URL,
  type Locale,
} from "@/app/blog-content";
import { BlogFooter, BlogHeader, BlogVisual, CtaBand } from "@/app/blog-ui";
import { latestArticleUpdate } from "@/app/answer-engine-content";
import { collectionLabels } from "@/app/collection-labels";
import { formatLongDate } from "@/app/glance-content";
import { homeUrl } from "@/app/home-content";
import { seoDescription, seoTitle } from "@/app/seo-metadata";
import {
  breadcrumbList,
  imageObject,
  itemListNode,
  webPageNode,
} from "@/app/structured-data";

export const dynamicParams = false;

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  it: "it_IT",
  de: "de_DE",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const t = blogCopy[locale];
  const metadataTitle = seoTitle(t.metaTitle);
  const metadataDescription = seoDescription(t.metaDescription);

  return {
    metadataBase: new URL(SITE_URL),
    title: metadataTitle,
    description: metadataDescription,
    keywords: t.keywords,
    alternates: {
      canonical: blogIndexPath(locale),
      languages: getBlogIndexAlternates(),
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: blogIndexUrl(locale),
      siteName: SITE_NAME,
      type: "website",
      locale: openGraphLocales[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => openGraphLocales[item]),
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} publishing guides`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogIndexPage({ params }: BlogPageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale;
  const t = blogCopy[locale];
  const labels = collectionLabels[locale];
  const localizedPosts = getPostsForLocale(locale);
  // Counted, never typed: the number of guides per language changes on every
  // ship, and a stale figure in the answer-first block would be a false claim.
  const guideCount = localizedPosts.length;
  const summary = labels.summary(guideCount);
  const canonicalUrl = blogIndexUrl(locale);
  // Freshness for the collection itself: the newest review date among the
  // guides that actually exist in this language.
  const lastUpdated = latestArticleUpdate(locale);
  const guideListId = `${canonicalUrl}#guides`;
  const primaryImageId = `${canonicalUrl}#primaryimage`;

  const primaryImage = imageObject({
    url: `${SITE_URL}/opengraph-image`,
    caption: `${SITE_NAME} — ${t.h1}`,
    id: primaryImageId,
  });

  const breadcrumb = breadcrumbList([
    { name: SITE_NAME, url: homeUrl(locale) },
    { name: t.blog, url: canonicalUrl },
  ]);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#blog`,
      name: t.metaTitle,
      description: t.metaDescription,
      url: canonicalUrl,
      inLanguage: locale,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      mainEntity: localizedPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.translation.title,
        description: post.translation.description,
        url: `${SITE_URL}${postPath(locale, post)}`,
        datePublished: post.date,
        dateModified: post.updated,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
        },
      })),
    },
    // The page node: what this URL is, when the collection last changed, and
    // which enumerated list is the thing the page exists to present.
    webPageNode({
      type: "CollectionPage",
      url: canonicalUrl,
      name: t.metaTitle,
      description: t.metaDescription,
      locale,
      dateModified: lastUpdated,
      breadcrumb,
      primaryEntity: { "@id": guideListId },
      extra: {
        // Same string as the visible `data-speakable` block.
        abstract: summary,
        keywords: t.keywords.join(", "),
        about: t.keywords.map((keyword) => ({
          "@type": "Thing",
          name: keyword,
        })),
        primaryImageOfPage: primaryImage,
        image: { "@id": primaryImageId },
      },
    }),
    // Microsoft's AEO guidance calls out ItemList for exactly this shape of
    // page: a category index whose options should be enumerated, not inferred
    // from whichever links a crawler happened to follow.
    itemListNode({
      id: guideListId,
      name: labels.listName,
      description: t.metaDescription,
      locale,
      items: localizedPosts.map((post) => ({
        name: post.translation.title,
        url: postUrl(locale, post),
        description: post.translation.description,
      })),
    }),
    breadcrumb,
  ];

  return (
    <div lang={locale} className="min-h-screen bg-paper text-ink">
      <BlogHeader locale={locale} />
      <main>
        <section className="relative overflow-hidden border-b border-line/70">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(169,240,214,0.24),transparent)]"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                {t.eyebrow}
              </p>
              <h1 className="text-balance font-display text-[2.75rem] font-medium leading-[1.05] tracking-[-0.015em] text-ink sm:text-6xl">
                {t.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted">
                {t.subtitle}
              </p>
              <div
                data-speakable
                className="mt-8 max-w-2xl rounded-[18px] border border-line bg-paper-2 p-5 sm:p-6"
              >
                <h2 className="flex items-center gap-2.5 font-display text-2xl font-medium tracking-[-0.01em] text-ink">
                  <Sparkles className="h-4 w-4 text-mint-deep" strokeWidth={2} />
                  {labels.summaryHeading}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{summary}</p>
                <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-faint">
                  <span>{labels.guideCount(guideCount)}</span>
                  <span aria-hidden>·</span>
                  <span>
                    {t.updatedLabel}{" "}
                    <time dateTime={lastUpdated}>{formatLongDate(locale, lastUpdated)}</time>
                  </span>
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-2">
                {localizedPosts.map((post) => (
                  <a
                    key={post.key}
                    href={`#${post.key}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-2 px-3 py-1 text-[12px] font-medium text-muted transition-colors hover:text-ink"
                  >
                    <Check className="h-3 w-3 text-mint" strokeWidth={3} />
                    {post.translation.category}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative">
              <BlogVisual
                post={localizedPosts[0]}
                label={t.pillarLabel}
                title={localizedPosts[0].translation.title}
              />
            </div>
          </div>
        </section>

        <section className="border-b border-line/70 bg-paper-2">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-10 sm:px-6 md:grid-cols-3">
            {[
              t.keywords[1],
              t.keywords[2],
              t.keywords[4],
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-paper text-mint-deep">
                  <Search className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium text-ink-soft">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {localizedPosts.map((post, index) => (
              <article
                key={post.key}
                id={post.key}
                className="group rounded-[18px] border border-line bg-paper p-4 transition-shadow duration-300 hover:shadow-[0_24px_60px_-34px_rgba(16,24,40,0.38)]"
              >
                <BlogVisual
                  post={post}
                  label={`${t.pillarLabel} 0${index + 1}`}
                  title={post.translation.title}
                  compact
                />
                <div className="p-3 pt-6">
                  <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium uppercase tracking-[0.16em] text-faint">
                    <span className="text-mint-deep">{post.translation.category}</span>
                    <span>{post.readingTime} {t.readTimeLabel}</span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-[-0.01em] text-ink">
                    <a href={postPath(locale, post)}>{post.translation.title}</a>
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {post.translation.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                    <time dateTime={post.updated} className="text-sm text-faint">
                      {t.updatedLabel} {formatLongDate(locale, post.updated)}
                    </time>
                    <a
                      href={postPath(locale, post)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-mint-deep"
                    >
                      {/* Intent-bearing anchor text: "Read the KDP keywords guide"
                          carries a topic, "Read guide" carries nothing. */}
                      {labels.readGuideAbout(post.translation.category)}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaBand locale={locale} />
      </main>
      <BlogFooter locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
