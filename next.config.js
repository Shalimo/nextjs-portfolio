const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  images: {
    domains: ['nextjs-portfolio-lovat-five.vercel.app', 'vercel.app', 'vercel.com', 'i.ibb.co'],
  },
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_CV: process.env.REACT_APP_CV,
  },
  webpack: (config) => {
    const path = require('path');
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});