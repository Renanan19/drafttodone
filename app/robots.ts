import type { MetadataRoute } from "next";
import { allowedAiCrawlerAgents, answerEngineResources } from "./answer-engine-content";
import { SITE_URL } from "./blog-content";

export const dynamic = "force-static";

/**
 * The machine-readable surfaces an answer engine should be able to reach
 * without guessing. They are listed explicitly in `allow` (nothing on this site
 * is disallowed, but stating them makes the intent unambiguous) and announced
 * alongside the XML sitemap so a crawler that only reads robots.txt still
 * discovers the feed plane.
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
    sitemap: [
      answerEngineResources.sitemap,
      answerEngineResources.rss,
      answerEngineResources.llms,
      answerEngineResources.llmsFull,
      answerEngineResources.ai,
      answerEngineResources.answerEngine,
      answerEngineResources.contentIndex,
    ],
    host: SITE_URL,
  };
}
