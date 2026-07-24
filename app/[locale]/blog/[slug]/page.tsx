import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Check, Clock } from "lucide-react";
import {
  BLOG_AUTHOR,
  blogCopy,
  blogIndexPath,
  getArticleStaticParams,
  getPostAlternates,
  getPostBySlug,
  getPostsForLocale,
  getPostTranslation,
  isLocale,
  postLocales,
  postPath,
  postUrl,
  SITE_NAME,
  SITE_URL,
  type BlogTranslation,
  type Locale,
} from "@/app/blog-content";
import { BlogFooter, BlogHeader, BlogVisual, CtaBand } from "@/app/blog-ui";
import { homePath, homeUrl } from "@/app/home-content";
import { seoDescription, seoTitle } from "@/app/seo-metadata";
import { commercialSolutionPages, editorialUrl, solutionPath } from "@/app/seo-pages";
import { ArticleAnswer } from "@/app/article-answer";
import {
  imageObject,
  itemListNode,
  organizationRef,
  speakableSpec,
  webPageNode,
  websiteRef,
} from "@/app/structured-data";

export const dynamicParams = false;

type ArticlePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  it: "it_IT",
  de: "de_DE",
};

const topicStopWords = new Set([
  "amazon", "book", "books", "drafttodone", "guide", "kdp", "livre", "livres",
  "buch", "bücher", "libro", "libri", "pour", "with", "your", "the", "and", "for",
  "avec", "les", "des", "und", "mit", "für", "con", "per", "una", "uno",
]);

function topicTokens(values: string[]) {
  return new Set(
    values
      .join(" ")
      .toLocaleLowerCase()
      .split(/[^\p{L}\p{N}]+/u)
      .filter((token) => token.length >= 3 && !topicStopWords.has(token)),
  );
}

function relevanceScore(source: BlogTranslation, target: BlogTranslation) {
  const sourceKeywords = new Set(source.keywords.map((keyword) => keyword.toLocaleLowerCase()));
  const exactKeywordMatches = target.keywords.filter((keyword) => sourceKeywords.has(keyword.toLocaleLowerCase())).length;
  const sourceTokens = topicTokens([source.title, source.category, ...source.keywords]);
  const targetTokens = topicTokens([target.title, target.category, ...target.keywords]);
  const tokenMatches = [...targetTokens].filter((token) => sourceTokens.has(token)).length;

  return exactKeywordMatches * 8 + tokenMatches + (source.category === target.category ? 5 : 0);
}

export function generateStaticParams() {
  return getArticleStaticParams();
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const post = getPostBySlug(locale, slug);

  if (!post) {
    return {
      title: SITE_NAME,
    };
  }

  const article = getPostTranslation(post, locale);
  const metadataTitle = seoTitle(article.seoTitle ?? article.title);
  const metadataDescription = seoDescription(article.seoDescription ?? article.description);

  return {
    metadataBase: new URL(SITE_URL),
    title: metadataTitle,
    description: metadataDescription,
    keywords: article.keywords,
    authors: [{ name: BLOG_AUTHOR }],
    alternates: {
      canonical: postPath(locale, post),
      languages: getPostAlternates(post),
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: postUrl(locale, post),
      siteName: SITE_NAME,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [BLOG_AUTHOR],
      locale: openGraphLocales[locale],
      alternateLocale: postLocales(post)
        .filter((item) => item !== locale)
        .map((item) => openGraphLocales[item]),
      images: [
        {
          url: `${postPath(locale, post)}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: [`${postPath(locale, post)}/opengraph-image`],
    },
  };
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale;
  const post = getPostBySlug(locale, slug);
  if (!post) notFound();

  const t = blogCopy[locale];
  const article = getPostTranslation(post, locale);
  const relatedPosts = getPostsForLocale(locale)
    .filter((item) => item.key !== post.key)
    .map((item) => ({ item, score: relevanceScore(article, item.translation) }))
    .sort((left, right) => right.score - left.score || right.item.updated.localeCompare(left.item.updated))
    .map(({ item }) => item)
    .slice(0, 6);
  const articleTopicTokens = topicTokens([article.title, article.category, ...article.keywords]);
  const relatedSolutions = commercialSolutionPages
    .map((item) => {
      const translation = item.translations[locale];
      const targetTokens = topicTokens([translation.title, translation.h1, ...translation.keywords]);
      const score = [...targetTokens].filter((token) => articleTopicTokens.has(token)).length;
      return { item, translation, score };
    })
    .sort((left, right) => right.score - left.score || right.item.updated.localeCompare(left.item.updated))
    .slice(0, 3);
  const wordCount = [
    article.title,
    article.description,
    ...article.intro,
    ...article.sections.flatMap((section) => [
      section.title,
      ...section.body,
      ...(section.bullets ?? []),
    ]),
    ...article.checklist,
    ...article.faq.flatMap((item) => [item.question, item.answer]),
  ].join(" ").split(/\s+/).filter(Boolean).length;
  const languagePaths = Object.fromEntries(
    postLocales(post).map((item) => [item, postPath(item, post)]),
  ) as Partial<Record<Locale, string>>;

  const canonicalUrl = postUrl(locale, post);
  const articleImage = imageObject({
    url: `${canonicalUrl}/opengraph-image`,
    caption: article.title,
  });

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline: article.title,
      description: article.description,
      image: articleImage,
      author: {
        "@type": "Organization",
        name: BLOG_AUTHOR,
      },
      publisher: organizationRef,
      isPartOf: websiteRef,
      // How these guides are written, reviewed and sourced — and what the
      // product deliberately does not claim.
      publishingPrinciples: editorialUrl(locale),
      speakable: speakableSpec,
      datePublished: post.date,
      dateModified: post.updated,
      inLanguage: locale,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${canonicalUrl}#webpage` },
      articleSection: article.category,
      keywords: article.keywords.join(", "),
      wordCount,
      timeRequired: `PT${post.readingTime}M`,
      about: article.keywords.map((keyword) => ({
        "@type": "Thing",
        name: keyword,
      })),
      citation: article.sources?.map((source) => ({
        "@type": "CreativeWork",
        name: source.label,
        url: source.href,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((item) => ({
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
          item: homeUrl(locale),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: t.blog,
          item: `${SITE_URL}${blogIndexPath(locale)}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: canonicalUrl,
        },
      ],
    },
    webPageNode({
      url: canonicalUrl,
      name: article.title,
      description: article.description,
      locale,
      datePublished: post.date,
      dateModified: post.updated,
      image: { url: `${canonicalUrl}/opengraph-image`, caption: article.title },
      primaryEntity: { "@id": `${canonicalUrl}#article` },
      extra: {
        articleSection: article.category,
        keywords: article.keywords.join(", "),
        timeRequired: `PT${post.readingTime}M`,
      },
    }),
    // Each H2 is anchored and enumerated so a single section can be retrieved,
    // quoted and linked without the rest of the article.
    itemListNode({
      id: `${canonicalUrl}#sections`,
      name: `${article.title} — ${t.tableOfContents}`,
      locale,
      items: article.sections.map((section) => ({
        name: section.title,
        url: `${canonicalUrl}#${section.id}`,
      })),
    }),
  ];

  return (
    <div lang={locale} className="min-h-screen bg-paper text-ink">
      <BlogHeader locale={locale} paths={languagePaths} />
      <main>
        <article>
          <header className="relative overflow-hidden border-b border-line/70">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(169,240,214,0.2),transparent)]"
            />
            <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
              <div>
                <nav className="mb-7 flex flex-wrap items-center gap-2 text-sm text-muted">
                  <a href={homePath(locale)} className="transition-colors hover:text-ink">
                    {SITE_NAME}
                  </a>
                  <span>/</span>
                  <a href={blogIndexPath(locale)} className="transition-colors hover:text-ink">
                    {t.blog}
                  </a>
                  <span>/</span>
                  <span className="text-ink">{article.category}</span>
                </nav>
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                  {article.category}
                </p>
                <h1 className="text-balance font-display text-[2.55rem] font-medium leading-[1.05] tracking-[-0.015em] text-ink sm:text-6xl">
                  {article.title}
                </h1>
                <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted">
                  {article.description}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-faint">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" />
                    {t.updatedLabel} {post.updated}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {post.readingTime} {t.readTimeLabel}
                  </span>
                </div>
              </div>
              <BlogVisual post={post} label={article.category} title={article.title} />
            </div>
          </header>

          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="min-w-0">
              <ArticleAnswer
                locale={locale}
                article={article}
                updated={post.updated}
                readingTime={post.readingTime}
                sourcesHref={
                  article.sources && article.sources.length > 0 ? "#official-sources" : undefined
                }
              />

              <div className="mt-12 space-y-5 text-xl leading-relaxed text-ink-soft">
                {article.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-14 space-y-14">
                {article.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-muted">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-6 grid gap-3">
                        {section.bullets.map((item) => (
                          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <section className="mt-16 rounded-[18px] border border-line bg-paper-2 p-6 sm:p-8">
                <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-ink">
                  {t.checklist}
                </h2>
                <ul className="mt-6 grid gap-4">
                  {article.checklist.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-soft text-mint-deep">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-16">
                <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-ink">
                  {t.faq}
                </h2>
                <div className="mt-6 divide-y divide-line rounded-[18px] border border-line">
                  {article.faq.map((item) => (
                    <div key={item.question} className="p-6">
                      <h3 className="text-lg font-semibold text-ink">{item.question}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {article.sources && article.sources.length > 0 && (
                <section className="mt-16" aria-labelledby="official-sources">
                  <h2 id="official-sources" className="font-display text-3xl font-medium tracking-[-0.01em] text-ink">
                    {t.sources}
                  </h2>
                  <ul className="mt-6 grid gap-3 rounded-[18px] border border-line bg-paper-2 p-6 text-[15px]">
                    {article.sources.map((source) => (
                      <li key={source.href}>
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink"
                        >
                          {source.label}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[18px] border border-line bg-paper p-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-mint-deep">
                  {t.tableOfContents}
                </p>
                <nav className="mt-4 grid gap-3 text-sm">
                  {article.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-muted transition-colors hover:text-ink"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </article>

        <section className="border-t border-line/70 bg-paper-2">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
            <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
              {t.related}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <a
                  key={item.key}
                  href={postPath(locale, item)}
                  className="group rounded-[18px] border border-line bg-paper p-5 transition-shadow duration-300 hover:shadow-[0_24px_60px_-34px_rgba(16,24,40,0.38)]"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
                    {item.translation.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-ink">
                    {item.translation.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors group-hover:text-ink">
                    {t.readGuide}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line/70">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
            <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
              {t.tools}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedSolutions.map(({ item, translation }) => (
                <a
                  key={item.key}
                  href={solutionPath(locale, item)}
                  className="group rounded-[18px] border border-line bg-paper p-5 transition-shadow duration-300 hover:shadow-[0_24px_60px_-34px_rgba(16,24,40,0.38)]"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
                    {translation.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-ink">
                    {translation.h1}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors group-hover:text-ink">
                    {translation.cta}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
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
