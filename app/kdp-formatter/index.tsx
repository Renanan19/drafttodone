"use client";

/**
 * The free KDP formatter, embedded in the paperback formatting guide.
 *
 * The engine is loaded on first use, not on page load: it pulls in pdf-lib,
 * fontkit, the hyphenation patterns and 445 KB of fonts, and most readers of
 * the article never touch the tool.
 */

import { useCallback, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, Download, FileText, Loader2, TriangleAlert, Upload } from "lucide-react";

import { formatInches, formatterCopy, warningText, type ToolLocale } from "./copy";
import type { BlockDoc, DocLang } from "./engine/model";
import type { Report } from "./engine/report";

type Stage = "idle" | "reading" | "ready" | "working" | "done";

type Output = { pdf: Blob; epub: Blob; report: Report };

/** Everything the engine exposes, behind one dynamic import. */
async function loadEngine() {
  const [reader, hyphenate, pdf, epub, report] = await Promise.all([
    import("./engine/docx-reader"),
    import("./engine/hyphenate"),
    import("./engine/pdf-writer"),
    import("./engine/epub-writer"),
    import("./engine/report"),
  ]);
  return { ...reader, ...hyphenate, ...pdf, ...epub, ...report };
}

const slug = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase() || "livre";

export function KdpFormatter({ locale }: { locale: ToolLocale }) {
  const t = formatterCopy[locale];

  const [stage, setStage] = useState<Stage>("idle");
  const [error, setError] = useState<string | null>(null);
  const [doc, setDoc] = useState<BlockDoc | null>(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [lang, setLang] = useState<DocLang>(locale);
  const [output, setOutput] = useState<Output | null>(null);
  const [dragging, setDragging] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const legal = useMemo(
    () =>
      lang === "fr"
        ? [
            `© ${new Date().getFullYear()} ${author || "—"}. Tous droits réservés.`,
            "Aucune partie de ce livre ne peut être reproduite sans autorisation écrite.",
            "Mis en page avec DraftToDone.io",
          ]
        : [
            `© ${new Date().getFullYear()} ${author || "—"}. All rights reserved.`,
            "No part of this book may be reproduced without written permission.",
            "Typeset with DraftToDone.io",
          ],
    [author, lang],
  );

  const reset = () => {
    setStage("idle");
    setError(null);
    setDoc(null);
    setOutput(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const readFile = useCallback(
    async (file: File) => {
      setError(null);
      setOutput(null);
      setStage("reading");
      try {
        const engine = await loadEngine();
        const bytes = new Uint8Array(await file.arrayBuffer());
        const parsed = engine.readDocx(bytes);

        setDoc(parsed);
        setTitle(parsed.meta.title);
        setAuthor(parsed.meta.author);
        setLang(parsed.meta.lang);
        setStage("ready");
      } catch (cause) {
        const code =
          cause && typeof cause === "object" && "code" in cause
            ? (cause as { code: keyof typeof t.errors }).code
            : "unknown";
        setError(t.errors[code] ?? t.errors.unknown);
        setStage("idle");
      }
    },
    [t],
  );

  const generate = useCallback(async () => {
    if (!doc) return;
    setError(null);
    setStage("working");
    try {
      const engine = await loadEngine();
      const prepared: BlockDoc = { ...doc, meta: { title, author, lang } };

      await engine.loadHyphenator(lang);
      const pdf = await engine.renderPdf(prepared, { hyphenate: true, legal });
      // The ebook reuses the images the PDF pass already resampled. Preparing
      // them again would decode every picture twice; using the originals put
      // 90 MB of Word photographs into a download whose PDF was 7 MB.
      const epub = engine.renderEpub(prepared, { legal, images: pdf.images });

      setOutput({
        pdf: new Blob([pdf.bytes as BlobPart], { type: "application/pdf" }),
        epub: new Blob([epub.bytes as BlobPart], { type: "application/epub+zip" }),
        report: engine.buildReport(prepared, pdf),
      });
      setStage("done");
    } catch {
      setError(t.errors.unknown);
      setStage("ready");
    }
  }, [doc, title, author, lang, legal, t]);

  const download = (blob: Blob, extension: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${slug(title)}-${extension === "pdf" ? "interieur" : "kindle"}.${extension}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const busy = stage === "reading" || stage === "working";

  return (
    <section className="mt-12 overflow-hidden rounded-3xl border border-line bg-paper-2">
      <div className="border-b border-line px-6 py-7 sm:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
          {t.eyebrow}
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-[-0.01em] text-ink">
          {t.title}
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{t.subtitle}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-faint">{t.privacy}</p>
      </div>

      <div className="px-6 py-7 sm:px-8">
        {error && (
          <p
            role="alert"
            className="mb-6 flex gap-3 rounded-xl border border-line bg-paper px-4 py-3 text-sm leading-relaxed text-ink-soft"
          >
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-mint-deep" />
            {error}
          </p>
        )}

        {(stage === "idle" || stage === "reading") && (
          <div
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragging(false);
              const file = event.dataTransfer.files[0];
              if (file) void readFile(file);
            }}
            className={`grid place-items-center rounded-2xl border border-dashed px-6 py-14 text-center transition-colors ${
              dragging ? "border-mint bg-mint-soft/40" : "border-line bg-paper"
            }`}
          >
            {stage === "reading" ? (
              <p className="inline-flex items-center gap-2 text-[15px] font-medium text-ink">
                <Loader2 className="h-4 w-4 animate-spin" />
                {t.reading}
              </p>
            ) : (
              <>
                <Upload className="h-6 w-6 text-faint" />
                <p className="mt-4 text-[17px] font-medium text-ink">{t.drop}</p>
                <p className="mt-1 text-sm text-faint">{t.dropHint}</p>
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="mt-6 inline-flex h-11 items-center rounded-xl bg-ink px-5 text-[15px] font-medium text-paper transition-opacity hover:opacity-90"
                >
                  {t.choose}
                </button>
              </>
            )}
            <input
              ref={inputRef}
              type="file"
              accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) void readFile(file);
              }}
            />
          </div>
        )}

        {doc && stage !== "idle" && stage !== "reading" && (
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.bookTitle}
                </span>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] font-medium text-ink outline-none transition-colors focus:border-mint"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.author}
                </span>
                <input
                  value={author}
                  placeholder={t.authorPlaceholder}
                  onChange={(event) => setAuthor(event.target.value)}
                  className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] font-medium text-ink outline-none transition-colors focus:border-mint"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.language}
                </span>
                <select
                  value={lang}
                  onChange={(event) => setLang(event.target.value as DocLang)}
                  className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] font-medium text-ink outline-none transition-colors focus:border-mint"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                </select>
              </label>
            </div>

            <div className="rounded-xl border border-line bg-paper p-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                {doc.chapters.length} {t.chaptersFound} — {t.chapterSource[doc.chapterSource]}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {doc.chapters.slice(0, 24).map((chapter, index) => (
                  <li
                    key={`${chapter.title}-${index}`}
                    className="rounded-lg bg-paper-2 px-3 py-1.5 text-[13px] text-ink-soft"
                  >
                    {chapter.title || `${index + 1}`}
                  </li>
                ))}
                {doc.chapters.length > 24 && (
                  <li className="px-2 py-1.5 text-[13px] text-faint">
                    +{doc.chapters.length - 24}
                  </li>
                )}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => void generate()}
                disabled={busy}
                // Once the files exist, downloading them is the next step, so
                // this button steps back rather than competing with them.
                className={
                  stage === "done"
                    ? "inline-flex h-12 items-center gap-2 rounded-xl border border-line bg-paper px-6 text-[15px] font-medium text-ink transition-colors hover:border-mint disabled:opacity-60"
                    : "inline-flex h-12 items-center gap-2 rounded-xl bg-ink px-6 text-[15px] font-medium text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
                }
              >
                {stage === "working" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t.working}
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4" />
                    {t.generate}
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={busy}
                className="text-sm font-medium text-muted underline underline-offset-4 transition-colors hover:text-ink disabled:opacity-60"
              >
                {t.again}
              </button>
            </div>
          </div>
        )}

        {output && stage === "done" && (
          <div className="mt-8 grid gap-6">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => download(output.pdf, "pdf")}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-mint px-6 text-[15px] font-medium text-ink transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                {t.downloadPdf}
              </button>
              <button
                type="button"
                onClick={() => download(output.epub, "epub")}
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-line bg-paper px-6 text-[15px] font-medium text-ink transition-colors hover:border-mint"
              >
                <Download className="h-4 w-4" />
                {t.downloadEpub}
              </button>
            </div>

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                {t.results}
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-4">
                <Stat label={t.trim} value="6 × 9″" />
                <Stat label={t.pages} value={String(output.report.pageCount)} />
                <Stat
                  label={t.gutter}
                  value={formatInches(output.report.gutterInches)}
                  detail={`${t.gutterDetail} ${formatInches(output.report.gutterMinInches)}`}
                />
                <Stat
                  label={t.spine}
                  value={`${formatInches(output.report.spineWhiteInches)} / ${formatInches(
                    output.report.spineCreamInches,
                  )}`}
                  detail={t.spineDetail}
                />
              </div>
            </div>

            {output.report.warnings.length > 0 && (
              <div className="rounded-xl border border-line bg-paper p-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.warningsTitle}
                </p>
                <ul className="mt-3 grid gap-2">
                  {output.report.warnings.map((warning) => (
                    <li
                      key={warning.code}
                      className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-mint-deep" />
                      {warningText(t, warning.code, warning.count)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl bg-ink p-6 text-paper">
              <p className="font-display text-2xl font-medium tracking-[-0.01em]">{t.ctaTitle}</p>
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-paper/70">{t.ctaBody}</p>
              <a
                href={locale === "fr" ? "/fr" : "/en"}
                className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-mint transition-opacity hover:opacity-80"
              >
                {t.ctaLink}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}

        <ul className="mt-8 grid gap-2 border-t border-line pt-6">
          {t.notes.map((note) => (
            <li key={note} className="flex gap-3 text-sm leading-relaxed text-muted">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stat({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div className="flex flex-col rounded-xl bg-paper p-4">
      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-ink">{value}</p>
      {/* Pushed to the bottom so the four cards line up whatever they hold. */}
      {detail && <p className="mt-auto pt-1 text-[12px] leading-snug text-faint">{detail}</p>}
    </div>
  );
}
