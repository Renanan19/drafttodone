import {
  blogCopy,
  blogIndexUrl,
  locales,
  postEntries,
  posts,
  postUrl,
  SITE_NAME,
  SITE_URL,
} from "../blog-content";
import { solutionPages, solutionUrl } from "../seo-pages";

export const dynamic = "force-static";

export function GET() {
  const body = {
    site: {
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "AI publishing software and multilingual SEO knowledge base for KDP books, manuscripts, covers, metadata and catalog operations.",
      resources: {
        sitemap: `${SITE_URL}/sitemap.xml`,
        htmlSitemap: `${SITE_URL}/site-map`,
        robots: `${SITE_URL}/robots.txt`,
        rss: `${SITE_URL}/feed.xml`,
        llms: `${SITE_URL}/llms.txt`,
        ai: `${SITE_URL}/ai.txt`,
      },
    },
    solutionPages: solutionPages.flatMap((page) =>
      locales.map((locale) => ({
        type: "solution",
        locale,
        title: page.translations[locale].title,
        description: page.translations[locale].description,
        keywords: page.translations[locale].keywords,
        url: solutionUrl(locale, page),
        updated: page.updated,
      })),
    ),
    blogIndexes: locales.map((locale) => ({
      type: "blog-index",
      locale,
      title: blogCopy[locale].metaTitle,
      description: blogCopy[locale].metaDescription,
      keywords: blogCopy[locale].keywords,
      url: blogIndexUrl(locale),
    })),
    articles: posts.flatMap((post) =>
      postEntries(post).map(({ locale, article }) => ({
        type: "article",
        locale,
        title: article.title,
        description: article.description,
        category: article.category,
        keywords: article.keywords,
        url: postUrl(locale, post),
        published: post.date,
        updated: post.updated,
        readingTimeMinutes: post.readingTime,
      })),
    ),
  };

  return Response.json(body);
}
