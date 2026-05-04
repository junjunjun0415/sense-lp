import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/sense-lp";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? repoBasePath : "",
  assetPrefix: isProd ? repoBasePath : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
