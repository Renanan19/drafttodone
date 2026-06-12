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
  const solutionLinks = solutionPages
    .flatMap((page) =>
      locales.map((locale) => `- ${page.translations[locale].title}: ${solutionUrl(locale, page)}`),
    )
    .join("\n");

  const blogLinks = locales
    .map((locale) => `- ${blogCopy[locale].metaTitle}: ${blogIndexUrl(locale)}`)
    .join("\n");

  const articleLinks = posts
    .flatMap((post) =>
      postEntries(post).map(
        ({ locale, article }) => `- ${article.title}: ${postUrl(locale, post)}`,
      ),
    )
    .join("\n");

  const body = `# ${SITE_NAME} AI Crawl Guide

Purpose: multilingual AI publishing software and knowledge base for manuscripts, KDP SEO, book covers, metadata, launch systems and catalog operations.

Crawler policy: public pages may be crawled and indexed. See ${SITE_URL}/robots.txt.

Primary resources:
- Home: ${SITE_URL}
- XML sitemap: ${SITE_URL}/sitemap.xml
- HTML sitemap: ${SITE_URL}/site-map
- RSS feed: ${SITE_URL}/feed.xml
- JSON content index: ${SITE_URL}/content-index.json
- LLMs text: ${SITE_URL}/llms.txt

Solution pages:
${solutionLinks}

Blog indexes:
${blogLinks}

Articles:
${articleLinks}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
