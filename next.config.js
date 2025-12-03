/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SWC minification
  swcMinify: true,

  // Image optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
