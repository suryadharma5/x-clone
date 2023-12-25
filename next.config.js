/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://x-clone-not-real.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig
