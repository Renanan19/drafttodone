import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "./blog-content";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    // A stable `id` lets an engine treat the manifest as the same app entity
    // across deploys; `lang`/`dir` state the default language of the entry point.
    id: SITE_URL,
    lang: "en",
    dir: "ltr",
    name: `${SITE_NAME} AI Publishing Software`,
    short_name: "DraftToDone",
    description:
      "Turn one niche brief into a manuscript, full cover, KDP metadata and catalog workflow.",
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
