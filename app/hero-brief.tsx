"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import { APP_URL } from "./home-content";

export type HeroBriefCopy = {
  label: string;
  placeholder: string;
  submit: string;
  examplesLabel: string;
  examples: string[];
};

/**
 * The hero asks for the book before it asks for an account.
 *
 * The brief rides to the app's signup page as `?brief=`; the app parks it and
 * shows it in the generate form, so creating an account becomes the last step
 * before *their* book instead of the first step of an unknown task. Measured
 * apart from the other signup links by utm_campaign=hero_brief.
 *
 * A plain GET form underneath: with JavaScript off, it still lands on signup
 * with the brief.
 */
const SIGNUP_ACTION = `${APP_URL}/signup`;

/** "h1-control" (h1main) or "h1-sample" (h1test), as assigned before paint. */
function headlineVariant(): string {
  return document.documentElement.getAttribute("data-hv") === "b" ? "h1-sample" : "h1-control";
}
const MAX_LENGTH = 500;

export function HeroBrief({
  copy,
  locale,
  note,
}: {
  copy: HeroBriefCopy;
  locale: string;
  /** "Free preview · no credit card…": under the box, above the examples, so a phone shows it without scrolling. */
  note?: string;
}) {
  const [brief, setBrief] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const fieldRef = useRef<HTMLTextAreaElement>(null);

  // Every "Preview my book, free" on the page points here (#brief). Land with
  // the cursor in the box, so the next thing they do is type their book.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.('a[href="#brief"]');
      if (!link) return;
      window.setTimeout(() => fieldRef.current?.focus({ preventScroll: true }), 450);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    // Which headline this visitor saw (site-layout.tsx head script).
    const variant = headlineVariant();
    const field = e.currentTarget.elements.namedItem("utm_content") as HTMLInputElement | null;
    if (field) field.value = variant;
    // An empty brief is not an error: the visitor still wants the app.
    if (!brief.trim()) {
      e.preventDefault();
      window.location.href = `${SIGNUP_ACTION}?utm_source=drafttodone.io&utm_medium=owned_web&utm_campaign=hero_brief&utm_content=${variant}&lang=${locale}`;
    }
  }

  // Enter sends, Shift+Enter breaks the line: a brief is one or two sentences.
  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  }

  return (
    <div id="brief" className="mx-auto w-full max-w-2xl scroll-mt-24 text-left">
      <form
        ref={formRef}
        action={SIGNUP_ACTION}
        method="get"
        onSubmit={onSubmit}
        className="rounded-2xl border border-line bg-paper p-2 shadow-[0_20px_60px_-30px_rgba(20,40,32,0.35)] transition focus-within:border-ink/25 focus-within:ring-4 focus-within:ring-mint/15"
      >
        <input type="hidden" name="utm_source" value="drafttodone.io" />
        <input type="hidden" name="utm_medium" value="owned_web" />
        <input type="hidden" name="utm_campaign" value="hero_brief" />
        <input type="hidden" name="utm_content" value="h1-control" />
        {/* The page's language, not the browser's: it is the language the
            brief was written in, and the app writes the book in it. */}
        <input type="hidden" name="lang" value={locale} />
        <label htmlFor="hero-brief" className="sr-only">
          {copy.label}
        </label>
        <textarea
          id="hero-brief"
          ref={fieldRef}
          name="brief"
          rows={3}
          maxLength={MAX_LENGTH}
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={copy.placeholder}
          className="block w-full resize-none rounded-xl bg-transparent px-4 pt-3 text-base leading-relaxed text-ink outline-none placeholder:text-faint sm:text-[17px]"
        />
        <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-2">
          <span className="hidden text-[12px] text-faint sm:inline">{copy.label}</span>
          <button
            type="submit"
            className="group ml-auto inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-[15px] font-medium text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0"
          >
            {copy.submit}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2.25}
            />
          </button>
        </div>
      </form>

      {note && <p className="mt-3 text-center text-sm text-faint">{note}</p>}

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="text-[12px] text-faint">{copy.examplesLabel}</span>
        {copy.examples.map((example) => (
          <button
            key={example}
            type="button"
            onClick={() => {
              setBrief(example);
              fieldRef.current?.focus();
            }}
            className="rounded-full border border-line bg-paper-2 px-3 py-1.5 text-[13px] text-muted transition-colors hover:border-ink/25 hover:text-ink"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
}
