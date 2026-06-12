import type { Metadata } from "next";
import {
  blogCopy,
  blogIndexPath,
  locales,
  postEntries,
  posts,
  postPath,
  SITE_NAME,
  SITE_URL,
} from "../blog-content";
import { BlogFooter, BlogHeader } from "../blog-ui";
import { solutionPages, solutionPath } from "../seo-pages";

export const metadata: Metadata = {
  title: `Sitemap | ${SITE_NAME}`,
  description:
    "HTML sitemap for DraftToDone.io: multilingual blog guides, AI publishing software pages, RSS feed, robots.txt and XML sitemap.",
  alternates: {
    canonical: "/site-map",
  },
};

export default function HtmlSitemapPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${SITE_NAME} sitemap`,
    url: `${SITE_URL}/site-map`,
    hasPart: [
      {
        "@type": "WebPage",
        name: "Home",
        url: SITE_URL,
      },
      ...locales.map((locale) => ({
        "@type": "CollectionPage",
        name: `${blogCopy[locale].blog} ${locale}`,
        url: `${SITE_URL}${blogIndexPath(locale)}`,
      })),
      ...solutionPages.flatMap((page) =>
        locales.map((locale) => ({
          "@type": "WebPage",
          name: page.translations[locale].title,
          url: `${SITE_URL}${solutionPath(locale, page)}`,
        })),
      ),
      ...posts.flatMap((post) =>
        postEntries(post).map(({ locale, article }) => ({
          "@type": "Article",
          name: article.title,
          url: `${SITE_URL}${postPath(locale, post)}`,
        })),
      ),
    ],
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <BlogHeader locale="en" />
      <main>
        <section className="border-b border-line/70">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              Crawl map
            </p>
            <h1 className="font-display text-[2.75rem] font-medium leading-[1.05] tracking-[-0.015em] text-ink sm:text-6xl">
              DraftToDone.io sitemap
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              All public pages, feeds and crawl resources for the multilingual AI publishing knowledge base.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[18px] border border-line bg-paper-2 p-6">
            <h2 className="font-display text-3xl font-medium text-ink">Core URLs</h2>
            <ul className="mt-5 grid gap-3 text-sm">
              {[
                ["Home", "/"],
                ["XML sitemap", "/sitemap.xml"],
                ["Robots", "/robots.txt"],
                ["RSS feed", "/feed.xml"],
                ["LLMs text", "/llms.txt"],
                ["AI text", "/ai.txt"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a className="text-muted transition-colors hover:text-ink" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8">
            <section className="rounded-[18px] border border-line bg-paper p-6">
              <h2 className="font-display text-3xl font-medium text-ink">Solution Pages</h2>
              <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                {solutionPages.flatMap((page) =>
                  locales.map((locale) => (
                    <a
                      key={`${page.key}-${locale}`}
                      className="text-muted transition-colors hover:text-ink"
                      href={solutionPath(locale, page)}
                    >
                      [{locale}] {page.translations[locale].title}
                    </a>
                  )),
                )}
              </div>
            </section>

            <section className="rounded-[18px] border border-line bg-paper p-6">
              <h2 className="font-display text-3xl font-medium text-ink">Blog Indexes</h2>
              <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                {locales.map((locale) => (
                  <a
                    key={locale}
                    className="text-muted transition-colors hover:text-ink"
                    href={blogIndexPath(locale)}
                  >
                    [{locale}] {blogCopy[locale].metaTitle}
                  </a>
                ))}
              </div>
            </section>

            <section className="rounded-[18px] border border-line bg-paper p-6">
              <h2 className="font-display text-3xl font-medium text-ink">Articles</h2>
              <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                {posts.flatMap((post) =>
                  postEntries(post).map(({ locale, article }) => (
                    <a
                      key={`${post.key}-${locale}`}
                      className="text-muted transition-colors hover:text-ink"
                      href={postPath(locale, post)}
                    >
                      [{locale}] {article.title}
                    </a>
                  )),
                )}
              </div>
            </section>
          </div>
        </section>
      </main>
      <BlogFooter locale="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
