import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { unzipSync } from "fflate";
import { PT_PER_INCH } from "./kdp-rules";
import { TARGET_DPI, place, prepareImages, readPixelSize } from "./images";
import { readDocx } from "./docx-reader";

const fixture = (name: string) =>
  new Uint8Array(readFileSync(join(__dirname, "..", "__fixtures__", `${name}.docx`)));

/** The images inside the illustrated fixture, straight out of the archive. */
const mediaFromFixture = () => {
  const files = unzipSync(fixture("illustrated"));
  return Object.entries(files)
    .filter(([name]) => name.startsWith("word/media/"))
    .map(([name, bytes]) => ({ name, bytes }));
};

const COLUMN = 4.5 * PT_PER_INCH;
const MAX_HEIGHT = 7 * PT_PER_INCH;

describe("readPixelSize", () => {
  it("reads PNG dimensions from the header", () => {
    const media = mediaFromFixture();
    const sizes = media.map((m) => readPixelSize(m.bytes, "image/png"));
    expect(sizes).toContainEqual({ width: 2400, height: 1500 });
    expect(sizes).toContainEqual({ width: 240, height: 150 });
  });

  it("returns null for something that is not an image", () => {
    expect(readPixelSize(new Uint8Array([1, 2, 3, 4]), "application/octet-stream")).toBeNull();
  });
});

describe("place", () => {
  it("never draws an image wider than the column", () => {
    const target = place({ width: 6000, height: 3000 }, COLUMN, MAX_HEIGHT);
    expect(target.width).toBeCloseTo(COLUMN, 5);
    expect(target.height).toBeCloseTo(COLUMN / 2, 5);
  });

  it("never enlarges a small image past its own 300 DPI size", () => {
    // 240 px is 0.8 in at 300 DPI. Blown up to the column it would print at
    // 53 DPI, which is how a book ends up looking soft.
    const target = place({ width: 240, height: 150 }, COLUMN, MAX_HEIGHT);
    expect(target.width).toBeCloseTo((240 / TARGET_DPI) * PT_PER_INCH, 5);
    expect(target.dpi).toBeCloseTo(TARGET_DPI, 5);
  });

  it("reports the resolution an oversized image will actually print at", () => {
    const target = place({ width: 6000, height: 3000 }, COLUMN, MAX_HEIGHT);
    expect(target.dpi).toBeGreaterThan(TARGET_DPI);
    expect(target.resampleTo).toBe(Math.ceil(4.5 * TARGET_DPI));
  });

  it("asks for no resampling when the image is already the right size", () => {
    const exact = Math.ceil(4.5 * TARGET_DPI);
    expect(place({ width: exact, height: exact }, COLUMN, MAX_HEIGHT).resampleTo).toBeNull();
  });

  it("fits a tall image to the height available, keeping its aspect", () => {
    const target = place({ width: 3000, height: 9000 }, COLUMN, MAX_HEIGHT);
    expect(target.height).toBeCloseTo(MAX_HEIGHT, 5);
    expect(target.width).toBeCloseTo(MAX_HEIGHT / 3, 5);
  });
});

describe("prepareImages", () => {
  it("measures every image and asks the resampler only for oversized ones", async () => {
    const doc = readDocx(fixture("illustrated"));
    const asked: number[] = [];

    const prepared = await prepareImages(doc.images, COLUMN, MAX_HEIGHT, async (_b, _t, width) => {
      asked.push(width);
      return null; // decline, so the originals are kept and sizes stay truthful
    });

    expect(prepared).toHaveLength(2);
    expect(prepared.map((p) => p.pixels?.width).sort((a, b) => (a ?? 0) - (b ?? 0))).toEqual([
      240, 2400,
    ]);
    // Only the 2400 px image is above what the column needs.
    expect(asked).toEqual([Math.ceil(4.5 * TARGET_DPI)]);
  });

  it("takes the resampled bytes and dimensions when the resampler succeeds", async () => {
    const doc = readDocx(fixture("illustrated"));
    const replacement = new Uint8Array([1, 2, 3]);

    const prepared = await prepareImages(doc.images, COLUMN, MAX_HEIGHT, async (_b, _t, width) => ({
      bytes: replacement,
      mediaType: "image/jpeg",
    }));

    const shrunk = prepared.find((p) => p.mediaType === "image/jpeg");
    expect(shrunk?.bytes).toBe(replacement);
    expect(shrunk?.pixels?.width).toBe(Math.ceil(4.5 * TARGET_DPI));
    // Aspect ratio survives the swap.
    expect(shrunk?.pixels?.height).toBe(Math.round((Math.ceil(4.5 * TARGET_DPI) * 1500) / 2400));
  });

  it("keeps the original when there is no resampler at all", async () => {
    const doc = readDocx(fixture("illustrated"));
    const prepared = await prepareImages(doc.images, COLUMN, MAX_HEIGHT, null);

    expect(prepared.map((p) => p.bytes)).toEqual(doc.images.map((i) => i.bytes));
  });
});
