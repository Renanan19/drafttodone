import type { MetadataRoute } from "next";
import { allowedAiCrawlerAgents, answerEngineResources } from "./answer-engine-content";
import { SITE_URL } from "./blog-content";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: allowedAiCrawlerAgents.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: answerEngineResources.sitemap,
    host: SITE_URL,
  };
}
