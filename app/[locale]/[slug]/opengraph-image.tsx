import { ImageResponse } from "next/og";
import { isLocale } from "@/app/blog-content";
import {
  getSolutionBySlug,
  getSolutionStaticParams,
} from "@/app/seo-pages";
import { OG_CONTENT_TYPE, OG_SIZE, OgCard } from "@/app/og-card";

export const dynamic = "force-static";
export const dynamicParams = false;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "DraftToDone.io";

export function generateStaticParams() {
  return getSolutionStaticParams();
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function Image({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const page = getSolutionBySlug(locale, slug);
  const solution = page?.translations[locale];

  return new ImageResponse(
    (
      <OgCard
        eyebrow={solution?.eyebrow ?? "AI publishing software"}
        title={solution?.h1 ?? "DraftToDone.io"}
        footer="DraftToDone.io — the complete AI publishing machine"
        titleFontSize={58}
      />
    ),
    size,
  );
}
