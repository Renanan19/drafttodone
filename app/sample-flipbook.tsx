"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type FlipPage = { src: string; caption: string; alt: string };
export type FlipBook = {
  id: string;
  title: string;
  /** "Novel · 142 pages". */
  meta: string;
  /** Pages in the printed book (the viewer shows a selection). */
  pageCount: number;
  cover: string;
  pages: FlipPage[];
};
export type FlipbookCopy = {
  label: string;
  /** Label of the row of covers that switches book. */
  shelf: string;
  prev: string;
  next: string;
  /** Tokens {n}, {total} and {pages}. */
  counter: string;
  books: FlipBook[];
};

/**
 * A shelf of real books the engine produced, each to leaf through: cover,
 * front matter, chapter openers, pages from the middle and the end.
 *
 * Every page here was read before being chosen, as generated, not retouched.
 * Pages whose AI illustrations print garbled lettering were left out rather
 * than shown, and the pages chosen make no claim the site could not stand
 * behind.
 */
export function SampleFlipbook({ copy }: { copy: FlipbookCopy }) {
  const [b, setB] = useState(0);
  const [i, setI] = useState(0);
  const book = copy.books[b];
  const total = book.pages.length;
  const go = useCallback((d: number) => setI((v) => Math.min(total - 1, Math.max(0, v + d))), [total]);
  const root = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  // Arrow keys while the book is on screen and focused.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    }
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go]);

  const page = book.pages[i];
  const btn =
    "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-paper text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-ink/25 disabled:pointer-events-none disabled:opacity-30";

  return (
    <div
      ref={root}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={copy.label}
      className="mx-auto mt-10 max-w-xl outline-none"
    >
      {/* The shelf: one cover per book. */}
      <div role="group" aria-label={copy.shelf} className="mb-7 flex justify-center gap-2.5 overflow-x-auto pb-1">
        {copy.books.map((bk, k) => (
          <button
            key={bk.id}
            type="button"
            onClick={() => {
              setB(k);
              setI(0);
            }}
            aria-label={bk.title}
            aria-pressed={k === b}
            className={`w-[62px] shrink-0 overflow-hidden rounded-[4px] border transition sm:w-[72px] ${
              k === b ? "border-ink ring-2 ring-mint/50" : "border-line opacity-70 hover:-translate-y-0.5 hover:opacity-100"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bk.cover} alt="" loading="lazy" decoding="async" className="aspect-[2/3] w-full object-cover" />
          </button>
        ))}
      </div>
      <p className="mb-4 text-center font-display text-xl font-medium text-ink">{book.title}</p>
      <p className="-mt-3 mb-5 text-center text-[12px] text-faint">{book.meta}</p>

      <div
        className="relative"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div className="mx-auto aspect-[2/3] w-full max-w-[380px] overflow-hidden rounded-md border border-line bg-paper shadow-[0_28px_60px_-32px_rgba(16,24,40,0.55)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={page.src}
            src={page.src}
            alt={page.alt}
            loading={i === 0 ? "lazy" : "eager"}
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
        <button type="button" onClick={() => go(-1)} disabled={i === 0} aria-label={copy.prev} className={`${btn} absolute left-0 top-1/2 -translate-y-1/2 sm:-left-4`}>
          <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
        </button>
        <button type="button" onClick={() => go(1)} disabled={i === total - 1} aria-label={copy.next} className={`${btn} absolute right-0 top-1/2 -translate-y-1/2 sm:-right-4`}>
          <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
        </button>
      </div>

      <p className="mt-4 text-center text-[14px] font-medium text-ink" aria-live="polite">
        {page.caption}
      </p>
      <p className="mt-1 text-center text-[12px] tabular-nums text-faint">
        {copy.counter.replace("{n}", String(i + 1)).replace("{total}", String(total)).replace("{pages}", String(book.pageCount))}
      </p>

      {/* Every page, one tap away. Preloads them too, so flipping never waits. */}
      <div className="mt-5 flex justify-center gap-1.5 overflow-x-auto pb-1">
        {book.pages.map((p, k) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setI(k)}
            aria-label={p.caption}
            aria-current={k === i}
            className={`h-14 w-10 shrink-0 overflow-hidden rounded-[3px] border transition ${
              k === i ? "border-ink ring-2 ring-mint/40" : "border-line opacity-70 hover:opacity-100"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
          </button>
        ))}
      </div>
    </div>
  );
}
