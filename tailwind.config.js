/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cusRed: '#fa5757',
        cusBlue: '#5368df'
      },
      fontFamily:{
        rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}

