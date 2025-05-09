import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
};

const isProd = "production";

module.exports = {
  assetPrefix: isProd ? "/portfolio/" : "",
  output: "export", // Required for static export
};

export default nextConfig;
