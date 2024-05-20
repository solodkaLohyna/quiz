/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}", "./app/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        '30': '119px'
      },
      fontSize:{
        '5pxl': '50px'
      },
      colors: {
        'light-lime': '#ABF770',
        'light-grey': '#252C3A'
      }
    },
  },
  plugins: [],
}