/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Base path for GitHub Pages
  basePath: '/R-Website',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Enable SWC minification
  swcMinify: true,

  // Trailing slashes for GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
