/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    }
  },
  images: {
    // domains: ['cdn.shopify.com', 'bjjmore.com', 'i.ytimg.com', 'cdn.evolve-mma.com', 'i0.wp.com', 'www.grapplearts.com', 'upload.wikimedia.org', 'jiujitsutimes.com', 'www.attacktheback.com', 'tapcity.net', 'www.watchbjj.com']
  }
}

module.exports = nextConfig
