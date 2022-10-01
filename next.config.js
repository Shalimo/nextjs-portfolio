/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['nextjs-portfolio-lovat-five.vercel.app', 'vercel.app', 'vercel.com']
},
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_CV: process.env.REACT_APP_CV
  }
}

module.exports = nextConfig


