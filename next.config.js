const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Workaround for Next.js 16.2.2 generateBuildId transpilation issue with SWC
  generateBuildId: async () => {
    return `tallend-${Date.now()}`;
  },
  // Fix Turbopack workspace root detection warning
  turbopack: {
    root: path.resolve(__dirname),
  },
};

module.exports = nextConfig;
