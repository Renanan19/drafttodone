import { beforeAll, describe, expect, it } from "vitest";
import { hyphenationPoints, loadHyphenator } from "./hyphenate";

const split = (word: string, lang: "fr" | "en") => {
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
    expect(hyphenationPoints("Wortzusammensetzung", "de" as unknown as "fr")).toEqual([]);
  });
});
