import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// Vercel sets VERCEL=1 in build environments. Skip GitHub Pages specific
// config (static export, basePath, asset prefix) when building on Vercel
// so the app is served at the domain root.
const isVercel = process.env.VERCEL === "1";
const repoBasePath = "/sense-lp";

const nextConfig: NextConfig = {
  ...(isVercel ? {} : { output: "export" as const }),
  basePath: isProd && !isVercel ? repoBasePath : "",
  assetPrefix: isProd && !isVercel ? repoBasePath : "",
  images: {
    unoptimized: !isVercel,
  },
  trailingSlash: true,
};

export default nextConfig;
