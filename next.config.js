/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/ojieidgroup",
  assetPrefix: "/ojieidgroup/",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;