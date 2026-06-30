import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import { answerEngineResources } from "./answer-engine-content";
import { SITE_NAME, SITE_URL } from "./blog-content";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DraftToDone.io — Turn One Idea Into a Complete KDP Book",
  description:
    "Generate a manuscript, full wrap cover, KDP metadata, and a verified pen name from one niche brief. Build 6 ready-to-publish books a week.",
  applicationName: SITE_NAME,
  category: "AI publishing software",
  classification:
    "AI publishing software, KDP automation, book SEO, AI book cover generation, manuscript generation",
  manifest: "/manifest.webmanifest",
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
      "application/json": [
        { title: "Content index", url: "/content-index.json" },
        { title: "Answer-engine JSON", url: "/answer-engine.json" },
      ],
      "text/plain": [
        { title: "LLMs text", url: "/llms.txt" },
        { title: "Full LLM context", url: "/llms-full.txt" },
        { title: "AI crawl guide", url: "/ai.txt" },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "DraftToDone.io — Turn One Idea Into a Complete KDP Book",
    description:
      "One brief becomes manuscript, cover, KDP metadata, and pen name. The app is live.",
    type: "website",
    url: SITE_URL,
  },
};

const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description:
      "AI publishing software for creating manuscripts, book covers, KDP metadata and repeatable publishing catalog workflows.",
    foundingDate: "2026",
    subjectOf: [
      {
        "@type": "DigitalDocument",
        name: "DraftToDone answer-engine JSON",
        url: answerEngineResources.answerEngine,
      },
      {
        "@type": "DigitalDocument",
        name: "DraftToDone LLMs text",
        url: answerEngineResources.llms,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en", "fr", "it", "de"],
    potentialAction: {
      "@type": "ReadAction",
      target: [
        `${SITE_URL}/en/blog`,
        `${SITE_URL}/fr/blog`,
        `${SITE_URL}/it/blog`,
        `${SITE_URL}/de/blog`,
        answerEngineResources.llms,
        answerEngineResources.llmsFull,
        answerEngineResources.answerEngine,
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "PublishingApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      "AI publishing software for turning one niche brief into a manuscript, full cover, KDP metadata and catalog quality workflow.",
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/OnlineOnly",
      lowPrice: "14.99",
      highPrice: "390",
      offerCount: "2",
      priceCurrency: "EUR",
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${hanken.variable}`}>
      <body>
        {/* No-JS fallback: reveal-up elements must stay visible without the observer */}
        <noscript>
          <style>{`.reveal-up{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
