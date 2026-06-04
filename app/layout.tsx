import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drafttocover.io"),
  title: "DraftToCover.io — The Complete AI Publishing Machine",
  description:
    "Generate the entire product — front cover to back cover, manuscript, and optimized title. Build your publishing empire with 6 ready-to-publish books a week.",
  openGraph: {
    title: "DraftToCover.io — The Complete AI Publishing Machine",
    description:
      "Don't just write a book. Generate the entire product. Join the waitlist for early beta access.",
    type: "website",
    url: "https://drafttocover.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
