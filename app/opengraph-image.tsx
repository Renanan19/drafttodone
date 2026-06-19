import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, OgCard } from "./og-card";

// Site-wide default share image. Applies to every route that does not define
// its own opengraph-image (home, blog index, site-map, txt routes…).
export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "DraftToDone.io — The complete AI publishing machine";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="AI publishing software"
        title="Don't just write a book. Generate the entire product."
        footer="Manuscript · Front & back cover · KDP metadata — 6 ready-to-publish books a week."
      />
    ),
    size,
  );
}
