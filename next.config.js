/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ 'nextjs-portfolio-1wj555.vercel.app', 'http://localhost:3000/', 'vercel.com']
},
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_CV: process.env.REACT_APP_CV
  }
}

module.exports = nextConfig
