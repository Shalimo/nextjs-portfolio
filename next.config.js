/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ 'nextjs-portfolio-hjn3g1qlm-shalimo.vercel.app', 'http://localhost:3000/', 'nextjs-portfolio-shalimo.vercel.app', 'nextjs-portfolio-lovat-five.vercel.app']
},
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_CV: process.env.REACT_APP_CV
  }
}

module.exports = nextConfig
