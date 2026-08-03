import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./", import.meta.url)) },
  },
  test: {
    // The .docx reader uses DOMParser and namespace-aware XML lookups.
    environment: "jsdom",
    include: ["app/**/*.test.ts"],
  },
});
