import type { Metadata } from "next";
import { ArrowRight, Download, FileSpreadsheet, FileText, ListChecks } from "lucide-react";
import { SITE_NAME, SITE_URL } from "@/app/blog-content";
import { BlogFooter, BlogHeader } from "@/app/blog-ui";
import { APP_SIGNUP_URL } from "@/app/home-content";
import { playbookPath } from "@/app/playbook-content";

/**
 * The operator kit — what the playbook's email form actually delivers.
 *
 * Deliberately noindex: this is the thing the email buys. Leaving it out of
 * search keeps the exchange honest, and the playbook itself is the page that
 * ranks.
 *
 * English only, on purpose. These are working documents for KDP's own
 * backend, which is English — a half-translated worksheet is worse than a
 * good English one.
 */

const UPDATED = "2026-07-26";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `The Operator Kit — ${SITE_NAME}`,
  description:
    "The working documents behind the KDP Operator's Playbook: pre-upload review checklist, niche brief templates, metadata worksheet and catalog economics sheet.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/kit" },
};

const assets = [
  {
    icon: ListChecks,
    title: "The pre-upload review checklist",
    text: "Six sections, run on every book before you publish. Compliance, manuscript, formatting, cover, metadata, logging. Twenty minutes here is cheaper than losing a catalog.",
    href: "/kit/pre-upload-checklist.md",
    file: "pre-upload-checklist.md",
  },
  {
    icon: FileText,
    title: "Niche brief templates",
    text: "The five fields that turn a topic into a brief worth generating — reader, moment, promise, proof of demand, shape. With a worked example and ten brief starts.",
    href: "/kit/niche-brief-templates.md",
    file: "niche-brief-templates.md",
  },
  {
    icon: FileText,
    title: "The metadata worksheet",
    text: "Title, subtitle, description, the 7 keyword slots, categories, pen name and price — filled in before you open the KDP upload form, with the reasoning for each field.",
    href: "/kit/metadata-worksheet.md",
    file: "metadata-worksheet.md",
  },
  {
    icon: FileSpreadsheet,
    title: "The catalog economics sheet",
    text: "What a book actually has to earn to be worth making, once you count your own time. One row per book, a verdict column, and the rule for when to kill a niche.",
    href: "/kit/catalog-economics.csv",
    file: "catalog-economics.csv",
  },
];

export default function KitPage() {
  return (
    <div lang="en" className="min-h-screen bg-paper text-ink">
      <BlogHeader locale="en" />
      <main>
        <section className="relative overflow-hidden border-b border-line/70">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(169,240,214,0.26),transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              The operator kit
            </p>
            <h1 className="text-balance font-display text-[2.75rem] font-medium leading-[1.05] tracking-[-0.015em] text-ink sm:text-5xl">
              The working version of the playbook.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
              Four documents. Nothing to install, nothing to sign up for. Download them, fill
              them in, and keep the economics sheet up to date — it is the only one of the four
              that gets more valuable every month.
            </p>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
              These are working documents for KDP&rsquo;s own backend, so they are in English
              even if you publish in another language.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6">
          <div className="grid gap-5">
            {assets.map((asset) => {
              const Icon = asset.icon;
              return (
                <article
                  key={asset.file}
                  className="rounded-[18px] border border-line bg-paper p-7 shadow-[0_24px_60px_-38px_rgba(16,24,40,0.32)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div className="flex min-w-0 gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-paper-3 text-mint-deep">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0">
                        <h2 className="font-display text-[1.5rem] font-medium leading-[1.2] tracking-[-0.01em] text-ink">
                          {asset.title}
                        </h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">{asset.text}</p>
                      </div>
                    </div>
                    <a
                      href={asset.href}
                      download
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-line bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-ink/25 hover:bg-paper-3"
                    >
                      <Download className="h-4 w-4" strokeWidth={2} />
                      Download
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-line/70 bg-paper-2">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
            <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-ink">
              Where the tool fits
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              The checklist and the economics sheet are judgement — no tool replaces them. The
              brief and the metadata are mechanical, and that is the part {SITE_NAME} does: one
              brief in, and the manuscript, the full wrap cover and the whole metadata package
              come out together. You still run the checklist before you upload.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={APP_SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-[15px] font-medium text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0"
              >
                Generate a book
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </a>
              <a
                href={playbookPath("en")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-paper px-6 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-ink/25"
              >
                Re-read the playbook
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-medium tracking-[-0.01em] text-ink">
            One favour
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            If any of this is wrong, or missing something obvious, reply to the email that sent
            you here. I read every one, and the kit gets better because operators tell me what
            broke.
          </p>
          <p className="mt-8 text-[13px] text-faint">Last updated {UPDATED}</p>
        </section>
      </main>
      <BlogFooter locale="en" />
    </div>
  );
}
