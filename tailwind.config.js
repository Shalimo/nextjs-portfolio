/** @type {import('tailwindcss').Config} */

const headerColor = '#e6d2fc'
const backgroundColor = '#e6e6fa'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor: headerColor,
        backgroundColor: backgroundColor
      }
    },
  },
  plugins: [],
}
