"use client";

import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";
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
const MAX_LENGTH = 500;

export function HeroBrief({ copy }: { copy: HeroBriefCopy }) {
  const [brief, setBrief] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const fieldRef = useRef<HTMLTextAreaElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    // An empty brief is not an error: the visitor still wants the app.
    if (!brief.trim()) {
      e.preventDefault();
      window.location.href = `${SIGNUP_ACTION}?utm_source=drafttodone.io&utm_medium=owned_web&utm_campaign=hero_brief`;
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
    <div className="mx-auto w-full max-w-2xl text-left">
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
