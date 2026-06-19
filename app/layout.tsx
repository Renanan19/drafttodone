import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
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
  title: "DraftToDone.io — The Complete AI Publishing Machine",
  description:
    "Generate the entire product — front cover to back cover, manuscript, and optimized title. Build your publishing empire with 6 ready-to-publish books a week.",
  applicationName: SITE_NAME,
  category: "AI publishing software",
  classification:
    "AI publishing software, KDP automation, book SEO, AI book cover generation, manuscript generation",
  manifest: "/manifest.webmanifest",
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
      "application/json": "/content-index.json",
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
    title: "DraftToDone.io — The Complete AI Publishing Machine",
    description:
      "Don't just write a book. Generate the entire product. The app is live — open it to start publishing.",
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
      "AI publishing software for manuscripts, covers, titles, descriptions, KDP keywords and catalog quality control.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/OnlineOnly",
      price: "0",
      priceCurrency: "USD",
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
