/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['nextjs-portfolio-lovat-five.vercel.app, https://nextjs-portfolio-lovat-five.vercel.app/'],
    loader: 'default',
    path: '/_next/image'
},
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_CV: process.env.REACT_APP_CV,
    APP_URL_IMAGE: process.env.REACT_APP_URL_IMAGE
  }
}

module.exports = nextConfig


