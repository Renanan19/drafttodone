import { beforeAll, describe, expect, it } from "vitest";
import { hyphenationPoints, loadHyphenator } from "./hyphenate";
import type { DocLang } from "./model";

const split = (word: string, lang: DocLang) => {
  const points = hyphenationPoints(word, lang);
  const parts: string[] = [];
  let at = 0;
  for (const p of points) {
    parts.push(word.slice(at, p));
    at = p;
  }
  parts.push(word.slice(at));
  return parts.join("-");
};

describe("hyphenationPoints", () => {
  beforeAll(async () => {
    await Promise.all([loadHyphenator("fr"), loadHyphenator("en")]);
  });

  it("breaks long French words into syllables", () => {
    expect(split("anticonstitutionnellement", "fr")).toBe("anti-cons-ti-tu-tion-nel-le-ment");
    expect(split("obstination", "fr")).toBe("obs-ti-na-tion");
  });

  it("leaves words under six letters whole", () => {
    expect(hyphenationPoints("hiver", "fr")).toEqual([]);
    expect(hyphenationPoints("lande", "fr")).toEqual([]);
    // Six letters is the first length the 3/3 rule admits.
    expect(split("maison", "fr")).toBe("mai-son");
  });

  it("breaks English words", () => {
    expect(split("justification", "en")).toBe("jus-ti-fi-ca-tion");
  });

  it("never breaks straight after an elision apostrophe", () => {
    // "s'était" must not become "s'é-tait": the minimum is counted from the
    // apostrophe, so the elided article never counts towards it.
    expect(hyphenationPoints("s’était", "fr")).toEqual([]);
    expect(hyphenationPoints("l’hiver", "fr")).toEqual([]);
    expect(hyphenationPoints("qu’il", "fr")).toEqual([]);

    // Without the rule, "l'obstination" would offer a break at index 4, one
    // letter into the stem. Every point must clear the apostrophe by three.
    for (const point of hyphenationPoints("l’obstination", "fr")) {
      expect(point).toBeGreaterThanOrEqual("l’".length + 3);
    }
  });

  it("still hyphenates a long word carrying an elision", () => {
    const points = hyphenationPoints("l’anticonstitutionnellement", "fr");
    expect(points.length).toBeGreaterThan(0);
    // Every point sits past the apostrophe plus two letters.
    expect(Math.min(...points)).toBeGreaterThanOrEqual("l’".length + 2);
  });

  it("refuses words that are too short to break", () => {
    expect(hyphenationPoints("chat", "fr")).toEqual([]);
    expect(hyphenationPoints("le", "fr")).toEqual([]);
  });

  it("breaks a compound only at its existing hyphen", () => {
    expect(hyphenationPoints("peut-être", "fr")).toEqual(["peut-".length]);
    expect(hyphenationPoints("va-t-en", "fr")).toEqual([]);
  });

  it("ignores surrounding punctuation", () => {
    const bare = hyphenationPoints("obstination", "fr");
    const quoted = hyphenationPoints("«obstination»", "fr");
    expect(quoted).toEqual(bare.map((p) => p + 1));
  });

  it("returns nothing when the language was never loaded", () => {
    // German is a real language for the tool now, but this describe only loads
    // fr and en, so its patterns are absent and the call must degrade quietly.
    expect(hyphenationPoints("Wortzusammensetzung", "de")).toEqual([]);
  });
});

/**
 * German is the reason the port needed hyphenation rather than shipping the
 * tool without it: its compounds are long enough that a justified line with no
 * break point stretches its spaces instead, the same failure this module was
 * written to fix for French.
 */
describe("the German and Italian patterns added with the DE/IT port", () => {
  beforeAll(async () => {
    await Promise.all([loadHyphenator("de"), loadHyphenator("it")]);
  });

  it("breaks a long German compound", () => {
    expect(hyphenationPoints("Geschwindigkeitsbegrenzung", "de").length).toBeGreaterThan(3);
    expect(split("Buchhandlung", "de")).toContain("-");
  });

  it("breaks Italian words", () => {
    expect(hyphenationPoints("straordinario", "it").length).toBeGreaterThan(2);
  });

  it("keeps each language's patterns separate", () => {
    // The same compound under both pattern sets, and the reason the map has to
    // be per-language: German knows where the parts join, Italian does not and
    // breaks "Wor-tzu-…" across the join. Many shorter words happen to break
    // identically in both, so this word is the one that proves the wiring.
    expect(split("Wortzusammensetzung", "de")).toBe("Wort-zu-sam-men-set-zung");
    expect(split("Wortzusammensetzung", "it")).toBe("Wor-tzu-sam-men-se-tzung");
  });

  it("respects the Italian elision rule", () => {
    // "dell'anno" must not break inside the elided article.
    const points = hyphenationPoints("dell'anno", "it");
    expect(points.every((p) => p > "dell'".length - 1)).toBe(true);
  });
});
