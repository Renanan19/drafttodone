import type { MetadataRoute } from "next";
import {
  blogIndexUrl,
  getBlogIndexAlternates,
  getPostAlternates,
  locales,
  posts,
  postUrl,
  SITE_URL,
} from "./blog-content";
import {
  getSolutionAlternates,
  solutionPages,
  solutionUrl,
} from "./seo-pages";

export const dynamic = "force-static";

function absoluteAlternates(alternates: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(alternates).map(([locale, path]) => [locale, `${SITE_URL}${path}`]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogAlternates = absoluteAlternates(getBlogIndexAlternates());

  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/site-map`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/ai.txt`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/content-index.json`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    ...solutionPages.flatMap((page) => {
      const alternates = absoluteAlternates(getSolutionAlternates(page));

      return locales.map((locale) => ({
        url: solutionUrl(locale, page),
        lastModified: new Date(page.updated),
        changeFrequency: "weekly" as const,
        priority: 0.95,
        alternates: {
          languages: alternates,
        },
      }));
    }),
    ...locales.map((locale) => ({
      url: blogIndexUrl(locale),
      lastModified: new Date("2026-06-07"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: blogAlternates,
      },
    })),
    ...posts.flatMap((post) => {
      const alternates = absoluteAlternates(getPostAlternates(post));

      return locales.map((locale) => ({
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
