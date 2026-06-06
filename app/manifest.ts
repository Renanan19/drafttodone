import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "./blog-content";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} AI Publishing Software`,
    short_name: "DraftToDone",
    description:
      "AI publishing software for manuscripts, book covers, KDP metadata and catalog workflows.",
    start_url: SITE_URL,
    scope: SITE_URL,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#10b58a",
    categories: ["productivity", "business", "education"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
