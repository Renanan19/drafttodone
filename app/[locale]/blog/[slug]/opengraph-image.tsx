import { ImageResponse } from "next/og";
import {
  blogCopy,
  getArticleStaticParams,
  getPostBySlug,
  getPostTranslation,
  isLocale,
} from "@/app/blog-content";
import { OG_CONTENT_TYPE, OG_SIZE, OgCard } from "@/app/og-card";

export const dynamic = "force-static";
export const dynamicParams = false;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "DraftToDone.io article";

export function generateStaticParams() {
  return getArticleStaticParams();
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function Image({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const post = getPostBySlug(locale, slug);
  const article = post ? getPostTranslation(post, locale) : null;
  const t = blogCopy[locale];

  return new ImageResponse(
    (
      <OgCard
        eyebrow={article?.category ?? t.blog}
        title={article?.title ?? t.metaTitle}
        footer={`DraftToDone.io — ${post?.readingTime ?? 8} ${t.readTimeLabel}`}
        titleFontSize={56}
      />
    ),
    size,
  );
}
