import { beforeAll, describe, expect, it } from "vitest";
import { loadHyphenator } from "./hyphenate";
import { breakParagraph, wrapText, type BreakOptions, type Line, type Measure } from "./linebreak";
import type { Inline } from "./model";
import { NARROW_NBSP, polishText } from "./typography";

/** Every glyph is 10 units wide, so widths in these tests are countable. */
const measure: Measure = (text) => text.length * 10;

const options = (over: Partial<BreakOptions> = {}): BreakOptions => ({
  width: 400,
  firstIndent: 0,
  lang: "fr",
  hyphenate: false,
  bodySize: 10,
  ...over,
});

const lineText = (line: Line) =>
  line.pieces.map((p) => (p.kind === "text" ? p.text : " ")).join("");

const rightEdge = (line: Line) => {
  const last = line.pieces[line.pieces.length - 1];
  if (!last) return 0;
  return last.x + (last.kind === "text" ? measure(last.text, last.style) : last.width);
};

const words = (n: number, word = "mot") =>
  [{ text: Array.from({ length: n }, () => word).join(" ") }] as Inline[];

describe("breakParagraph", () => {
  beforeAll(async () => {
    await loadHyphenator("fr");
  });

  it("never lets a line run past the measure", () => {
    const lines = breakParagraph(words(40), measure, options());
    for (const line of lines) {
      expect(rightEdge(line)).toBeLessThanOrEqual(400.001);
    }
  });

  it("justifies every line but the last", () => {
    const lines = breakParagraph(words(40), measure, options());
    expect(lines.length).toBeGreaterThan(2);

    for (const line of lines.slice(0, -1)) {
      // A justified line reaches the right margin exactly.
      expect(rightEdge(line)).toBeCloseTo(400, 5);
    }
    const last = lines[lines.length - 1];
    expect(last.last).toBe(true);
    expect(last.gapRatio).toBe(1);
    expect(rightEdge(last)).toBeLessThan(400);
  });

  it("indents the first line only", () => {
    const lines = breakParagraph(words(40), measure, options({ firstIndent: 24 }));
    expect(lines[0].indent).toBe(24);
    expect(lines[0].pieces[0].x).toBe(24);
    expect(lines[1].indent).toBe(0);
    expect(lines[1].pieces[0].x).toBe(0);
  });

  it("keeps a no-break space from becoming a line break", () => {
    // "Pourquoi ?" carries a narrow no-break space, so it must stay whole.
    const text = `${"remplissage ".repeat(8)}${polishText("Pourquoi ?", "fr")} suite`;
    const lines = breakParagraph([{ text }], measure, options());

    for (const line of lines) {
      const rendered = lineText(line);
      if (rendered.includes("?")) expect(rendered).toContain("Pourquoi");
    }
    expect(lines.some((l) => l.pieces.some((p) => p.kind === "space"))).toBe(true);
  });

  it("never emits a no-break space as a glyph", () => {
    const text = polishText('Il dit "oui" ; pourquoi ?', "fr");
    const lines = breakParagraph([{ text }], measure, options());

    for (const line of lines) {
      for (const piece of line.pieces) {
        if (piece.kind === "text") expect(piece.text).not.toContain(NARROW_NBSP);
      }
    }
  });

  it("tightens justification when hyphenation is allowed", () => {
    const text =
      "Une obstination tranquille accompagnait invariablement ces interminables " +
      "conversations administratives, disait-il, particulièrement vers minuit.";

    const worst = (hyphenate: boolean) => {
      const lines = breakParagraph([{ text }], measure, options({ hyphenate, width: 300 }));
      return Math.max(...lines.filter((l) => !l.last).map((l) => l.gapRatio));
    };

    expect(worst(true)).toBeLessThan(worst(false));
  });

  it("stops after two hyphenated lines in a row", () => {
    const text = Array.from({ length: 30 }, () => "obstination").join(" ");
    const lines = breakParagraph([{ text }], measure, options({ hyphenate: true, width: 155 }));

    let ladder = 0;
    for (const line of lines) {
      ladder = line.hyphenated ? ladder + 1 : 0;
      expect(ladder).toBeLessThanOrEqual(2);
    }
  });

  it("carries inline styles onto the laid out pieces", () => {
    const runs: Inline[] = [
      { text: "normal " },
      { text: "gras", bold: true },
      { text: " et " },
      { text: "italique", italic: true },
    ];
    const styles = breakParagraph(runs, measure, options())
      .flatMap((l) => l.pieces)
      .filter((p) => p.kind === "text")
      .map((p) => (p as { style: string }).style);

    expect(styles).toContain("bold");
    expect(styles).toContain("italic");
    expect(styles).toContain("regular");
  });

  it("accepts a word wider than the measure rather than looping", () => {
    const lines = breakParagraph([{ text: "a".repeat(80) }], measure, options({ width: 100 }));
    expect(lines).toHaveLength(1);
    expect(rightEdge(lines[0])).toBeGreaterThan(100);
  });

  it("returns nothing for an empty paragraph", () => {
    expect(breakParagraph([{ text: "   " }], measure, options())).toEqual([]);
  });

  it("honours a manual line break without justifying the short line", () => {
    // Word writes Shift+Enter as its own element; two lines of dialogue must
    // not be run together, and the first must not be stretched to the margin.
    const runs: Inline[] = [{ text: "— Tu comptes y retourner ?\n— Quelqu’un doit le faire." }];
    const lines = breakParagraph(runs, measure, options({ width: 4000 }));

    expect(lines).toHaveLength(2);
    expect(lineText(lines[0])).toContain("retourner");
    expect(lineText(lines[0])).not.toContain("Quelqu");
    expect(lines[0].gapRatio).toBe(1);
  });
});

describe("wrapText", () => {
  it("keeps the spaces between words", () => {
    // Rebuilding a string from laid out pieces loses breakable spaces, which
    // once turned "Chapitre 1" into "Chapitre1" on every chapter opener.
    expect(wrapText("Chapitre 1", measure, "bold", 4000)).toEqual(["Chapitre 1"]);
  });

  it("wraps a long title onto several lines", () => {
    const lines = wrapText("Le très long titre de ce chapitre", measure, "bold", 150);
    expect(lines.length).toBeGreaterThan(1);
    for (const line of lines) expect(measure(line, "bold")).toBeLessThanOrEqual(150);
    expect(lines.join(" ")).toBe("Le très long titre de ce chapitre");
  });

  it("returns nothing for blank text", () => {
    expect(wrapText("  ", measure, "bold", 100)).toEqual([]);
  });
});
