/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {domains: ['localhost']},
  env: {
    APP_URL: process.env.APP_URL,
    APP_ENV: process.env.APP_ENV
  }
}

module.exports = nextConfig
