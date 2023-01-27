/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-150': 'repeat(auto-fill, minmax(150px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
        'auto-fill-auto': 'repeat(auto-fill, minmax(min(100%, 125px), 1fr))',
      },
      screens: {
        'xs': '0px',
        's': '376px'
      }
    },
  },
  plugins: [],
}