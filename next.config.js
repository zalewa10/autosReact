/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "dist",
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_JEDEN: process.env.NEXT_PUBLIC_JEDEN,
    NEXT_PUBLIC_DWA: process.env.NEXT_PUBLIC_DWA,
    NEXT_PUBLIC_TRZY: process.env.NEXT_PUBLIC_TRZY,
  },
};

module.exports = nextConfig;
