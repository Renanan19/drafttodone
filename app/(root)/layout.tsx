import { SiteDocument, siteMetadata } from "../site-layout";
import "../globals.css";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
