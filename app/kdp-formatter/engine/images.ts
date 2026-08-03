/**
 * Prepares interior images for print.
 *
 * Two jobs, deliberately separated:
 *
 * 1. Deciding how big an image should be on the page, and whether it carries
 *    enough pixels for KDP's 300 DPI. That is arithmetic on header bytes, so it
 *    is plain TypeScript and testable anywhere.
 * 2. Actually resampling the pixels. That needs a decoder, which in a browser
 *    means createImageBitmap and a canvas, so it is injected.
 *
 * Resampling is what makes large books usable at all: a 90 MB manuscript is
 * 90 MB of camera-sized photographs, and none of those pixels survive printing
 * at 300 DPI inside a 4.5 inch column.
 */

import { PT_PER_INCH } from "./kdp-rules";
import type { ImageAsset } from "./model";

/** KDP flags interior images below this resolution as likely to print soft. */
export const TARGET_DPI = 300;

export type Pixels = { width: number; height: number };

/** Reads pixel dimensions from the file header. Returns null if unrecognised. */
export function readPixelSize(bytes: Uint8Array, mediaType: string): Pixels | null {
  if (mediaType === "image/png" || isPng(bytes)) return pngSize(bytes);
  if (mediaType === "image/jpeg" || isJpeg(bytes)) return jpegSize(bytes);
  return null;
}

const isPng = (b: Uint8Array) =>
  b.length > 8 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47;

const isJpeg = (b: Uint8Array) => b.length > 3 && b[0] === 0xff && b[1] === 0xd8;

function pngSize(bytes: Uint8Array): Pixels | null {
  // IHDR is always the first chunk: 8 byte signature, 4 length, 4 type, then
  // width and height as big-endian 32 bit integers.
  if (bytes.length < 24) return null;
  const view = new DataView(bytes.buffer, bytes.byteOffset);
  return { width: view.getUint32(16), height: view.getUint32(20) };
}

function jpegSize(bytes: Uint8Array): Pixels | null {
  const view = new DataView(bytes.buffer, bytes.byteOffset);
  let offset = 2;
  while (offset + 9 < bytes.length) {
    if (bytes[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = bytes[offset + 1];
    // Every SOFn frame header but the arithmetic-coded and difference ones
    // carries the dimensions at the same place.
    const isFrame = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
    if (isFrame) {
      return { height: view.getUint16(offset + 5), width: view.getUint16(offset + 7) };
    }
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      offset += 2;
      continue;
    }
    offset += 2 + view.getUint16(offset + 2);
  }
  return null;
}

export type Placement = {
  /** Width and height on the page, in points. */
  width: number;
  height: number;
  /** Resolution the image will actually print at. */
  dpi: number;
  /** Pixel width to resample to; null when the image is already small enough. */
  resampleTo: number | null;
};

/**
 * How large an image should appear, and whether it needs resampling.
 *
 * An image is never enlarged past its 300 DPI size — blowing a small picture up
 * to the full column is how a book ends up looking soft — and never wider than
 * the column or taller than the space on a page.
 */
export function place(pixels: Pixels, columnWidth: number, maxHeight: number): Placement {
  const naturalWidth = (pixels.width / TARGET_DPI) * PT_PER_INCH;
  const aspect = pixels.height / pixels.width;

  let width = Math.min(columnWidth, naturalWidth);
  let height = width * aspect;
  if (height > maxHeight) {
    height = maxHeight;
    width = height / aspect;
  }

  const dpi = pixels.width / (width / PT_PER_INCH);
  const needed = Math.ceil((width / PT_PER_INCH) * TARGET_DPI);

  return {
    width,
    height,
    dpi,
    // Only ever downscale. Fewer pixels than needed is a quality warning, not
    // something to paper over by inventing pixels.
    resampleTo: pixels.width > needed ? needed : null,
  };
}

/** Resamples an image to `width` pixels. Supplied by the host environment. */
export type Resampler = (
  bytes: Uint8Array,
  mediaType: string,
  width: number,
) => Promise<{ bytes: Uint8Array; mediaType: string } | null>;

export type PreparedImage = ImageAsset & {
  pixels: Pixels | null;
  /** Set once placed; the report uses it to warn about soft images. */
  dpi?: number;
};

/**
 * Reads every image's size and resamples the oversized ones.
 *
 * Images are processed one at a time and the originals released as we go: a
 * large illustrated book holds more pixels than a browser tab can decode all at
 * once.
 */
export async function prepareImages(
  images: ImageAsset[],
  columnWidth: number,
  maxHeight: number,
  resample: Resampler | null,
): Promise<PreparedImage[]> {
  const out: PreparedImage[] = [];

  for (const image of images) {
    const pixels = readPixelSize(image.bytes, image.mediaType);
    if (!pixels) {
      out.push({ ...image, pixels: null });
      continue;
    }

    const target = place(pixels, columnWidth, maxHeight);
    let bytes = image.bytes;
    let mediaType = image.mediaType;
    let finalPixels = pixels;

    if (resample && target.resampleTo !== null) {
      const resampled = await resample(image.bytes, image.mediaType, target.resampleTo);
      if (resampled) {
        bytes = resampled.bytes;
        mediaType = resampled.mediaType;
        finalPixels = {
          width: target.resampleTo,
          height: Math.round(target.resampleTo * (pixels.height / pixels.width)),
        };
      }
    }

    out.push({
      ...image,
      // A PNG photograph comes back as a JPEG, so the name has to follow or the
      // EPUB manifest would declare a type its filename contradicts.
      name: mediaType === image.mediaType ? image.name : renameFor(image.name, mediaType),
      bytes,
      mediaType,
      pixels: finalPixels,
      width: finalPixels.width,
      height: finalPixels.height,
      dpi: target.dpi,
    });
  }

  return out;
}

const EXTENSIONS: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
};

const renameFor = (name: string, mediaType: string): string =>
  `${name.replace(/\.[^.]+$/, "")}.${EXTENSIONS[mediaType] ?? "bin"}`;

/**
 * True when any pixel is not fully opaque.
 *
 * Sampled on a grid rather than pixel by pixel: reading every byte of a large
 * image costs more than the encode it is meant to inform, and an image with
 * transparency has it in large regions, not in one stray pixel.
 */
function hasTransparency(
  context: OffscreenCanvasRenderingContext2D,
  width: number,
  height: number,
): boolean {
  const step = Math.max(1, Math.floor(Math.min(width, height) / 64));
  for (let y = 0; y < height; y += step) {
    const row = context.getImageData(0, y, width, 1).data;
    for (let x = 3; x < row.length; x += 4 * step) {
      if (row[x] < 255) return true;
    }
  }
  return false;
}

/**
 * Browser resampler: decode, draw smaller, re-encode.
 *
 * Going through a canvas also normalises the file. pdf-lib rejects progressive
 * and CMYK JPEGs outright, and Word documents are full of both; re-encoding
 * turns every one of them into something embeddable.
 */
export const canvasResampler: Resampler = async (bytes, mediaType, width) => {
  if (typeof createImageBitmap !== "function" || typeof OffscreenCanvas !== "function") {
    return null;
  }

  let bitmap: ImageBitmap | null = null;
  try {
    bitmap = await createImageBitmap(new Blob([bytes as BlobPart], { type: mediaType }));
    const height = Math.max(1, Math.round((bitmap.height / bitmap.width) * width));
    const canvas = new OffscreenCanvas(width, height);
    // The transparency probe reads pixels back, which Chromium warns about
    // unless the context is created for it.
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return null;

    context.imageSmoothingQuality = "high";
    context.drawImage(bitmap, 0, 0, width, height);

    // Transparency must survive, but the format it arrived in says nothing
    // about whether there is any: Word is full of photographs saved as PNG,
    // several megabytes each, where PNG buys nothing and costs everything.
    // Real books measured 2.3 MB per picture before this check.
    const type = hasTransparency(context, width, height) ? "image/png" : "image/jpeg";
    const blob = await canvas.convertToBlob({ type, quality: 0.85 });
    return { bytes: new Uint8Array(await blob.arrayBuffer()), mediaType: type };
  } catch {
    return null;
  } finally {
    bitmap?.close();
  }
};
