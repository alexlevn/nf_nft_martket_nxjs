/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

// let baseUrl = 'https://wcfi.wii.camp/v1.0'
let baseUrl = ' https://api.qatarpool.live/v1.0'

if (isProd && process.env.BASE_URL) {
  baseUrl = process.env.BASE_URL
}

const nextConfig = {
  env: {
    baseUrl,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
