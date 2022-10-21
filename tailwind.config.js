/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#00995D',
          20: '#B1D34B',
          30: '#FFF0C7',
        },
        secondary: {
          10: '#ED1651',
          20: '#A3238E',
          30: '#F47920',
          40: '#00401A',
          50: '#411564',
          60: '#0A5F55',
          70: '#682D00',
        },
      }
    },
  },
  plugins: [],
}