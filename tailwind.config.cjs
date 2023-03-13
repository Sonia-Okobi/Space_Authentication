/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        space_green: '#09890E',
        space_black: '#373A37',
      }
    },
  },
  plugins: [],
}
