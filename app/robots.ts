import type { MetadataRoute } from "next";
import { SITE_URL } from "./blog-content";

export const dynamic = "force-static";

const allowedAgents = [
  "*",
  "Googlebot",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
  "YandexBot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "CCBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: allowedAgents.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
