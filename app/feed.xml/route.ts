import {
  BLOG_AUTHOR,
  blogIndexUrl,
  postEntries,
  posts,
  postUrl,
  SITE_NAME,
  SITE_URL,
} from "../blog-content";
import { LATEST_ARTICLE_UPDATE } from "../answer-engine-content";

export const dynamic = "force-static";

function xml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = posts
    .flatMap((post) =>
      postEntries(post).map(({ locale, article }) => {
        const url = postUrl(locale, post);

        return `<item>
  <title>${xml(article.title)}</title>
  <link>${xml(url)}</link>
  <guid isPermaLink="true">${xml(url)}</guid>
  <description>${xml(article.description)}</description>
  <author>${xml(BLOG_AUTHOR)}</author>
  <category>${xml(article.category)}</category>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  <atom:updated>${post.updated}T00:00:00Z</atom:updated>
  <dc:language>${xml(locale)}</dc:language>
</item>`;
      }),
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel>
  <title>${xml(`${SITE_NAME} SEO Publishing Blog`)}</title>
  <link>${xml(blogIndexUrl("en"))}</link>
  <atom:link href="${xml(`${SITE_URL}/feed.xml`)}" rel="self" type="application/rss+xml" />
  <description>${xml("Multilingual guides about AI publishing, KDP SEO, book covers, manuscripts, metadata and catalog operations.")}</description>
  <language>en</language>
  <lastBuildDate>${new Date(LATEST_ARTICLE_UPDATE).toUTCString()}</lastBuildDate>
  <managingEditor>${xml(BLOG_AUTHOR)}</managingEditor>
  <webMaster>${xml(SITE_URL)}</webMaster>
${items}
</channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
