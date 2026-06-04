/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export → deployable to GitHub Pages (no server runtime).
  output: "export",
  images: { unoptimized: true },

  // Custom domain (drafttodone.io) serves from the root, so no basePath.
  // For a GitHub *project* page (username.github.io/REPO) instead, uncomment:
  // basePath: "/REPO",
  // assetPrefix: "/REPO/",
};

export default nextConfig;
