/** @type {import('tailwindcss').Config} */

const primaryColor = '#4F4F4F'
const backgroundColor = '#e6e6fa'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColors: primaryColor, backgroundColor
      }
    },
  },
  plugins: [],
}
