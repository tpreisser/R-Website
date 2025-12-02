/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Base path for GitHub Pages (will be repo name)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Enable SWC minification
  swcMinify: true,

  // Trailing slashes for better GitHub Pages compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
