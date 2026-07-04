/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  compress: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;