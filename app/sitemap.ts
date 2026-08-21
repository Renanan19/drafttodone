import type { MetadataRoute } from "next";
import {
  blogIndexUrl,
  getBlogIndexAlternates,
  getPostAlternates,
  locales,
  postLocales,
  posts,
  postUrl,
  SITE_URL,
} from "./blog-content";
import {
  getSolutionAlternates,
  solutionPages,
  solutionUrl,
} from "./seo-pages";
import {
  ANSWER_ENGINE_UPDATED,
  answerEngineResources,
  LATEST_CONTENT_UPDATE,
  latestArticleUpdate,
} from "./answer-engine-content";
import { getHomeAlternates, homeUrl } from "./home-content";
import { playbookPath } from "./playbook-content";
import { partnersPath } from "./partners-content";

export const dynamic = "force-static";

/**
 * The home entry is the one place where a naive `${SITE_URL}${path}` disagrees
 * with the page it describes: Next resolves `canonical: "/"` to
 * `https://drafttodone.io` with no trailing slash, and the rendered hreflang
 * set matches. Concatenating "/" here produced `https://drafttodone.io/`, so
 * the sitemap's `<loc>` was absent from its own hreflang set — the condition
 * under which the whole cluster gets discarded. Normalising the root path back
 * to "" keeps the sitemap byte-identical to the HTML.
 */
function absoluteAlternates(alternates: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(alternates).map(([locale, path]) => [
      locale,
      `${SITE_URL}${path === "/" ? "" : path}`,
    ]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogAlternates = absoluteAlternates(getBlogIndexAlternates());

  const homeAlternates = absoluteAlternates(getHomeAlternates());

  const playbookAlternates = absoluteAlternates(
    Object.fromEntries(locales.map((locale) => [locale, playbookPath(locale)])),
  );

  const partnersAlternates = absoluteAlternates(
    Object.fromEntries(locales.map((locale) => [locale, partnersPath(locale)])),
  );

  return [
    ...locales.map((locale) => ({
      url: homeUrl(locale),
      lastModified: new Date(LATEST_CONTENT_UPDATE),
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? 1 : 0.9,
      alternates: { languages: homeAlternates },
    })),
    {
      url: `${SITE_URL}/site-map`,
      lastModified: new Date(LATEST_CONTENT_UPDATE),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: answerEngineResources.llms,
      lastModified: new Date(ANSWER_ENGINE_UPDATED),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: answerEngineResources.llmsFull,
      lastModified: new Date(ANSWER_ENGINE_UPDATED),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: answerEngineResources.ai,
      lastModified: new Date(ANSWER_ENGINE_UPDATED),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: answerEngineResources.contentIndex,
      lastModified: new Date(ANSWER_ENGINE_UPDATED),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: answerEngineResources.answerEngine,
      lastModified: new Date(ANSWER_ENGINE_UPDATED),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: answerEngineResources.rss,
      lastModified: new Date(latestArticleUpdate("en")),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    // Includes the editorial standards page: it is part of solutionPages and
    // must stay crawlable, just at a lower priority than the commercial pages.
    ...solutionPages.flatMap((page) => {
      const alternates = absoluteAlternates(getSolutionAlternates(page));

      return locales.map((locale) => ({
        url: solutionUrl(locale, page),
        lastModified: new Date(page.updated),
        changeFrequency: "weekly" as const,
        priority: page.kind === "editorial" ? 0.6 : 0.95,
        alternates: {
          languages: alternates,
        },
      }));
    }),
    // The lead magnet: fully readable, so it earns its own ranking rather than
    // sitting behind the email form it asks for.
    ...locales.map((locale) => ({
      url: `${SITE_URL}${playbookPath(locale)}`,
      lastModified: new Date("2026-07-26"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: { languages: playbookAlternates },
    })),
    // Affiliates and creators are a distribution channel, so the page has to be
    // findable by them rather than only linked from the footer.
    ...locales.map((locale) => ({
      url: `${SITE_URL}${partnersPath(locale)}`,
      lastModified: new Date("2026-07-26"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: partnersAlternates },
    })),
    ...locales.map((locale) => ({
      url: blogIndexUrl(locale),
      lastModified: new Date(latestArticleUpdate(locale)),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: blogAlternates,
      },
    })),
    ...posts.flatMap((post) => {
      const alternates = absoluteAlternates(getPostAlternates(post));

      return postLocales(post).map((locale) => ({
        url: postUrl(locale, post),
        lastModified: new Date(post.updated),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {
          languages: alternates,
        },
      }));
    }),
  ];
}
