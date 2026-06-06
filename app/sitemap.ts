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
      lastModified: new Date("2026-06-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...locales.map((locale) => ({
      url: blogIndexUrl(locale),
      lastModified: new Date("2026-06-06"),
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
