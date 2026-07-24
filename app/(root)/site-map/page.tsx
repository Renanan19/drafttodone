import type { Metadata } from "next";
import { answerEngineResources, LATEST_CONTENT_UPDATE } from "../../answer-engine-content";
import {
  blogCopy,
  blogIndexUrl,
  locales,
  postEntries,
  posts,
  postUrl,
  SITE_NAME,
  SITE_URL,
} from "../../blog-content";
import { BlogFooter, BlogHeader } from "../../blog-ui";
import { formatLongDate } from "../../glance-content";
import { homeUrl } from "../../home-content";
import {
  commercialSolutionPages,
  editorialUrl,
  getEditorialPage,
  solutionUrl,
} from "../../seo-pages";
import { breadcrumbList, itemListNode, webPageNode } from "../../structured-data";

const PAGE_URL = `${SITE_URL}/site-map`;

const META_DESCRIPTION =
  "HTML sitemap for DraftToDone.io: every public URL in one place — home pages, solution pages, editorial standards, the four blog indexes, every guide, and the feeds and crawl resources answer engines read.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Sitemap | ${SITE_NAME}`,
  description: META_DESCRIPTION,
  alternates: {
    canonical: "/site-map",
  },
};

/**
 * One group of URLs. The same objects drive the rendered lists and the
 * structured data, so the crawl map a reader sees and the one an answer engine
 * parses can never drift apart.
 */
type SitemapLink = {
  name: string;
  /** Absolute URL — the structured data needs it; the anchor uses the path. */
  url: string;
  description?: string;
};

type SitemapGroup = {
  id: string;
  name: string;
  description: string;
  links: SitemapLink[];
};

/** Same-origin absolute URLs are rendered as paths so previews stay on-host. */
function toPath(url: string) {
  return url.startsWith(SITE_URL) ? url.slice(SITE_URL.length) || "/" : url;
}

const editorialPage = getEditorialPage();

const sitemapGroups: SitemapGroup[] = [
  {
    id: "core",
    name: "Core URLs",
    description: "The DraftToDone.io home page in each of the four published languages.",
    links: locales.map((locale) => ({
      name: `[${locale}] ${SITE_NAME}`,
      url: homeUrl(locale),
    })),
  },
  {
    id: "editorial-standards",
    name: "Editorial standards",
    description:
      "Who builds DraftToDone, how these pages are written, sourced and reviewed, and what the product explicitly does not promise. Published in all four languages.",
    links: locales.map((locale) => ({
      name: `[${locale}] ${editorialPage.translations[locale].title}`,
      url: editorialUrl(locale),
      description: editorialPage.translations[locale].description,
    })),
  },
  {
    id: "crawl-resources",
    name: "Feeds and crawl resources",
    description:
      "Machine-readable surfaces for search crawlers and answer engines: feeds, crawl policy and dated product facts.",
    links: [
      {
        name: "XML sitemap",
        url: answerEngineResources.sitemap,
        description: "Every indexable URL with its last-modified date and language alternates.",
      },
      {
        name: "Robots",
        url: answerEngineResources.robots,
        description: "Crawl policy, including the AI crawlers that are explicitly allowed.",
      },
      {
        name: "RSS feed",
        url: answerEngineResources.rss,
        description: "New and updated guides as they publish.",
      },
      {
        name: "LLMs text",
        url: answerEngineResources.llms,
        description: "Short plain-text map of the site for language models.",
      },
      {
        name: "Full LLM context",
        url: answerEngineResources.llmsFull,
        description: "The long-form plain-text context file: product facts, guides and limits.",
      },
      {
        name: "AI text",
        url: answerEngineResources.ai,
        description: "AI usage and attribution policy for this site's content.",
      },
      {
        name: "Answer-engine JSON",
        url: answerEngineResources.answerEngine,
        description: "Dated JSON with product facts, pricing, freshness and citation guidance.",
      },
      {
        name: "Content index JSON",
        url: answerEngineResources.contentIndex,
        description: "Every page and guide, with locale, description and last-updated date.",
      },
    ],
  },
  {
    id: "solution-pages",
    name: "Solution pages",
    description:
      "Product and tool pages, one per buying intent, each published in four languages.",
    links: commercialSolutionPages.flatMap((page) =>
      locales.map((locale) => ({
        name: `[${locale}] ${page.translations[locale].title}`,
        url: solutionUrl(locale, page),
        description: page.translations[locale].description,
      })),
    ),
  },
  {
    id: "blog-indexes",
    name: "Blog indexes",
    description: "One guide index per language, each listing every guide published in it.",
    links: locales.map((locale) => ({
      name: `[${locale}] ${blogCopy[locale].metaTitle}`,
      url: blogIndexUrl(locale),
      description: blogCopy[locale].metaDescription,
    })),
  },
  {
    id: "articles",
    name: "Articles",
    description: "Every published guide, in every language it exists in.",
    links: posts.flatMap((post) =>
      postEntries(post).map(({ locale, article }) => ({
        name: `[${locale}] ${article.title}`,
        url: postUrl(locale, post),
        description: article.description,
      })),
    ),
  },
];

/** Short lists sit in the narrow column, long ones in the wide column. */
const sideGroupIds = new Set(["core", "editorial-standards", "crawl-resources"]);
const sideGroups = sitemapGroups.filter((group) => sideGroupIds.has(group.id));
const mainGroups = sitemapGroups.filter((group) => !sideGroupIds.has(group.id));

export default function HtmlSitemapPage() {
  const totalUrls = sitemapGroups.reduce((sum, group) => sum + group.links.length, 0);
  const groupSize = (id: string) =>
    sitemapGroups.find((group) => group.id === id)?.links.length ?? 0;
  // Every figure below is counted from the same arrays the page renders, so the
  // summary cannot outlive the content it describes.
  const summary = `This page lists all ${totalUrls} public DraftToDone.io URLs in ${sitemapGroups.length} groups: the home page in ${locales.length} languages, ${commercialSolutionPages.length} solution pages, the editorial standards page in ${locales.length} languages, ${groupSize("blog-indexes")} blog indexes, ${groupSize("articles")} guide URLs and ${groupSize("crawl-resources")} machine-readable feeds and crawl resources. It is written for crawlers, answer engines and anyone who wants the whole crawl map on one screen.`;

  const groupListId = `${PAGE_URL}#groups`;
  const groupListNodeId = (group: SitemapGroup) => `${PAGE_URL}#${group.id}-list`;

  const breadcrumb = breadcrumbList([
    { name: SITE_NAME, url: SITE_URL },
    { name: "Sitemap", url: PAGE_URL },
  ]);

  const jsonLd = [
    webPageNode({
      type: "CollectionPage",
      url: PAGE_URL,
      name: `${SITE_NAME} sitemap`,
      description: META_DESCRIPTION,
      locale: "en",
      dateModified: LATEST_CONTENT_UPDATE,
      image: { url: `${SITE_URL}/opengraph-image`, caption: `${SITE_NAME} sitemap` },
      breadcrumb,
      primaryEntity: { "@id": groupListId },
      extra: {
        // Same string as the visible `data-speakable` block.
        abstract: summary,
        // The page is the sum of its lists: reference them instead of dumping a
        // loose, unordered pile of nodes an engine has to re-group itself.
        hasPart: sitemapGroups.map((group) => ({ "@id": groupListNodeId(group) })),
      },
    }),
    // Index of indexes: the groups themselves, in the order they are rendered.
    itemListNode({
      id: groupListId,
      name: `${SITE_NAME} sitemap sections`,
      description: `The ${sitemapGroups.length} URL groups on this page, each enumerated in its own list.`,
      locale: "en",
      items: sitemapGroups.map((group) => ({
        name: group.name,
        url: `${PAGE_URL}#${group.id}`,
        description: group.description,
      })),
    }),
    // One positioned, counted ItemList per group.
    ...sitemapGroups.map((group) =>
      itemListNode({
        id: groupListNodeId(group),
        name: group.name,
        description: group.description,
        locale: "en",
        items: group.links.map((link) => ({
          name: link.name,
          url: link.url,
          description: link.description,
        })),
      }),
    ),
    breadcrumb,
  ];

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
              All public pages, feeds and crawl resources for the multilingual AI publishing
              knowledge base.
            </p>
            <div
              data-speakable
              className="mt-8 max-w-3xl rounded-[18px] border border-line bg-paper-2 p-5 sm:p-6"
            >
              <h2 className="font-display text-2xl font-medium tracking-[-0.01em] text-ink">
                What does this sitemap list?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{summary}</p>
              <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-faint">
                <span>{totalUrls} URLs</span>
                <span aria-hidden>·</span>
                <span>
                  Updated{" "}
                  <time dateTime={LATEST_CONTENT_UPDATE}>
                    {formatLongDate("en", LATEST_CONTENT_UPDATE)}
                  </time>
                </span>
              </p>
            </div>
            <nav aria-label="Sitemap sections" className="mt-8 flex flex-wrap gap-2">
              {sitemapGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-2 px-3 py-1 text-[12px] font-medium text-muted transition-colors hover:text-ink"
                >
                  {group.name}
                  <span className="text-faint">{group.links.length}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-8 self-start">
            {sideGroups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className="scroll-mt-24 rounded-[18px] border border-line bg-paper-2 p-6"
              >
                <h2 className="font-display text-3xl font-medium text-ink">{group.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{group.description}</p>
                <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {group.links.length} URLs
                </p>
                <ul className="mt-5 grid gap-3 text-sm">
                  {group.links.map((link) => (
                    <li key={link.url}>
                      <a
                        className="text-muted transition-colors hover:text-ink"
                        href={toPath(link.url)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="grid gap-8">
            {mainGroups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className="scroll-mt-24 rounded-[18px] border border-line bg-paper p-6"
              >
                <h2 className="font-display text-3xl font-medium text-ink">{group.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{group.description}</p>
                <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {group.links.length} URLs
                </p>
                <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                  {group.links.map((link) => (
                    <li key={link.url}>
                      <a
                        className="text-muted transition-colors hover:text-ink"
                        href={toPath(link.url)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
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
