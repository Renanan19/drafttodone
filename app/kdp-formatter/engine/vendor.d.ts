/** Hyphenation packages ship no types; these are the only members we use. */

declare module "hypher" {
  export type HyphenationPatterns = {
    id: string;
    leftmin: number;
    rightmin: number;
    patterns: Record<number, string>;
    exceptions?: string;
  };

  export default class Hypher {
    constructor(patterns: HyphenationPatterns);
    hyphenate(word: string): string[];
    hyphenateText(text: string, minLength?: number): string;
  }
}

declare module "hyphenation.fr" {
  import type { HyphenationPatterns } from "hypher";
  const patterns: HyphenationPatterns;
  export default patterns;
}

declare module "hyphenation.en-us" {
  import type { HyphenationPatterns } from "hypher";
  const patterns: HyphenationPatterns;
  export default patterns;
}

declare module "hyphenation.de" {
  import type { HyphenationPatterns } from "hypher";
  const patterns: HyphenationPatterns;
  export default patterns;
}

declare module "hyphenation.it" {
  import type { HyphenationPatterns } from "hypher";
  const patterns: HyphenationPatterns;
  export default patterns;
}
