"use client";

import { useEffect } from "react";

/**
 * Adds `.in` to every `[data-reveal]` element as it scrolls into view.
 *
 * Kept as its own client component so the page that uses it can stay a server
 * component: when the effect lived in HomeView, the whole home page became
 * client code and shipped every content module it imports (blog posts, tool
 * pages, playbook) to the phone as JavaScript, ~245 KB the browser had to
 * parse before the page was interactive.
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const failsafe = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
    }, 2200);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}
