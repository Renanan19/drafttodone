import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, OgCard } from "./og-card";

// Site-wide default share image. Applies to every route that does not define
// its own opengraph-image (home, blog index, site-map, txt routes…).
export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "DraftToDone.io — one idea becomes a complete KDP book";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="1 brief -> 1 complete KDP book"
        title="One idea becomes the whole book."
        footer="Manuscript + full cover + KDP metadata — €10 a book, no subscription."
        titleFontSize={88}
      />
    ),
    size,
  );
}
