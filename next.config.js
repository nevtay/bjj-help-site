/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    experimental: {
      images: {
        allowFutureImage: true,
      }
    }
  }
}

module.exports = nextConfig
