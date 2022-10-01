/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['euphonious-belekoy-34b203.netlify.app/']
},
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_CV: process.env.REACT_APP_CV
  }
}

module.exports = nextConfig
