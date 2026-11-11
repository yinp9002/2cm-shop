import type { NextConfig } from "next";

// GitHub Pages publishes this repo at https://yinp9002.github.io/2cm-shop/.
// `GITHUB_PAGES=true` selects that static export. `PAGES_BASE_PATH` overrides
// the subpath when a workflow supplies it (for example from configure-pages).
const pagesBasePath = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");
const isGithubPages = process.env.GITHUB_PAGES === "true" || pagesBasePath.length > 0;
const basePath = isGithubPages ? pagesBasePath || "/2cm-shop" : "";

// next/image does not prefix unoptimized sources with basePath. Inline the
// prefix so product photos resolve under /2cm-shop in the Pages build only.
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

if (isGithubPages) {
  // Cache Components enable Partial Prerendering, which static export rejects.
  nextConfig.output = "export";
  nextConfig.basePath = basePath;
  // GitHub Pages serves a route from route/index.html, not route.html.
  nextConfig.trailingSlash = true;
  nextConfig.images = { unoptimized: true };
} else {
  nextConfig.cacheComponents = true;
  nextConfig.partialPrefetching = true;
}

export default nextConfig;
