import type { MetadataRoute } from "next";
import { allowedAiCrawlerAgents, answerEngineResources } from "./answer-engine-content";
import { SITE_URL } from "./blog-content";

export const dynamic = "force-static";

/**
 * The machine-readable surfaces an answer engine should be able to reach
 * without guessing. They are listed explicitly in `allow` (nothing on this site
 * is disallowed, but stating them makes the intent unambiguous). They are not
 * declared as `Sitemap:` lines: that directive is for files in a sitemap format
 * (XML sitemap, RSS/Atom), and a text or JSON file announced there is reported
 * as an invalid sitemap. llms.txt links to the rest.
 */
const aiResourcePaths = [
  "/llms.txt",
  "/llms-full.txt",
  "/ai.txt",
  "/answer-engine.json",
  "/content-index.json",
  "/feed.xml",
  "/sitemap.xml",
  "/manifest.webmanifest",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: allowedAiCrawlerAgents.map((userAgent) => ({
      userAgent,
      allow: ["/", ...aiResourcePaths],
    })),
    sitemap: [answerEngineResources.sitemap, answerEngineResources.rss],
    host: SITE_URL,
  };
}
