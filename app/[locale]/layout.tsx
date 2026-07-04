import { isLocale } from "../blog-content";
import { SiteDocument, siteMetadata } from "../site-layout";
import "../globals.css";

export const metadata = siteMetadata;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";

  return <SiteDocument lang={locale}>{children}</SiteDocument>;
}
