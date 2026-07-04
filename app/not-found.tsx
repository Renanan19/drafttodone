import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./blog-content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Page not found | ${SITE_NAME}`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-paper px-6 text-center text-ink">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint-deep">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-[-0.01em] sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          This page does not exist, but the publishing guides and tools are still available.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
        >
          Back to DraftToDone
        </a>
      </div>
    </main>
  );
}
