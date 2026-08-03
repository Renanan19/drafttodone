import { describe, expect, it } from "vitest";
import { NARROW_NBSP, NBSP, polishRuns, polishText } from "./typography";
import type { Inline } from "./model";

describe("polishText", () => {
  it("curls apostrophes between letters only", () => {
    expect(polishText("qu'il n'avait", "fr")).toBe("qu’il n’avait");
  });

  it("pairs straight quotes as guillemets in French", () => {
    expect(polishText('Il dit "non" puis partit.', "fr")).toBe(
      `Il dit «${NARROW_NBSP}non${NARROW_NBSP}» puis partit.`,
    );
  });

  it("pairs straight quotes as curly quotes in English", () => {
    expect(polishText('He said "no" and left.', "en")).toBe("He said “no” and left.");
  });

  it("puts a narrow no-break space before French double punctuation", () => {
    expect(polishText("Pourquoi ? Vraiment ! Alors ; voilà", "fr")).toBe(
      `Pourquoi${NARROW_NBSP}? Vraiment${NARROW_NBSP}! Alors${NARROW_NBSP}; voilà`,
    );
  });

  it("puts a full no-break space before a colon", () => {
    expect(polishText("Voici : la suite", "fr")).toBe(`Voici${NBSP}: la suite`);
  });

  it("never doubles an existing space before punctuation", () => {
    const once = polishText("Quoi ?", "fr");
    expect(polishText(once, "fr")).toBe(once);
    expect(once).toBe(`Quoi${NARROW_NBSP}?`);
  });

  it("leaves a URL alone", () => {
    expect(polishText("Voir https://exemple.fr ici", "fr")).toBe("Voir https://exemple.fr ici");
  });

  it("converts ellipsis and em dashes", () => {
    expect(polishText("Il hésita... puis -- enfin -- parla.", "fr")).toBe(
      "Il hésita… puis — enfin — parla.",
    );
  });

  it("applies no French spacing in English", () => {
    expect(polishText("Really ? Yes !", "en")).toBe("Really ? Yes !");
  });
});

describe("polishRuns", () => {
  it("keeps run boundaries exactly where the author put them", () => {
    const runs: Inline[] = [
      { text: "Il dit " },
      { text: "vraiment", italic: true },
      { text: " n'est-ce pas ?" },
    ];
    const out = polishRuns(runs, "fr");

    expect(out).toHaveLength(3);
    expect(out[1]).toEqual({ text: "vraiment", italic: true });
    expect(out[2].text).toBe(` n’est-ce pas${NARROW_NBSP}?`);
  });

  it("pairs quotes across run boundaries", () => {
    const runs: Inline[] = [{ text: 'Elle cria "' }, { text: "arrête", bold: true }, { text: '" et courut.' }];
    const out = polishRuns(runs, "fr").map((r) => r.text);

    expect(out[0]).toContain("«");
    expect(out[2]).toContain("»");
  });
});
