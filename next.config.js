/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  basePath: isProd ? "/ojieidgroup" : "",
  assetPrefix: isProd ? "/ojieidgroup/" : "",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;