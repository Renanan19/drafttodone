import {
  blogCopy,
  blogIndexUrl,
  locales,
  posts,
  postUrl,
  SITE_NAME,
  SITE_URL,
} from "../blog-content";
import { solutionPages, solutionUrl } from "../seo-pages";

export const dynamic = "force-static";

export function GET() {
  const indexes = locales
    .map((locale) => `- ${blogCopy[locale].blog} (${locale}): ${blogIndexUrl(locale)}`)
    .join("\n");

  const articles = posts
    .flatMap((post) =>
      locales.map((locale) => {
        const article = post.translations[locale];
        return `- [${locale}] ${article.title}: ${postUrl(locale, post)}`;
      }),
    )
    .join("\n");

  const solutions = solutionPages
    .flatMap((page) =>
      locales.map((locale) => {
        const solution = page.translations[locale];
        return `- [${locale}] ${solution.title}: ${solutionUrl(locale, page)}`;
      }),
    )
    .join("\n");

  const body = `# ${SITE_NAME}

${SITE_NAME} is a multilingual AI publishing product and SEO knowledge base for writers, indie publishers and catalog operators.

## Crawl Policy

All standards-compliant crawlers are allowed to access the public site.

## Primary URLs

- Home: ${SITE_URL}
- Sitemap: ${SITE_URL}/sitemap.xml
- HTML sitemap: ${SITE_URL}/site-map
- RSS feed: ${SITE_URL}/feed.xml
- AI crawl guide: ${SITE_URL}/ai.txt
- JSON content index: ${SITE_URL}/content-index.json

## Solution Pages

${solutions}

## Blog Indexes

${indexes}

## Articles

${articles}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
