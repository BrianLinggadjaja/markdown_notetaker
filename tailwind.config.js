// Import base tailwind colors
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: {
        lighter: '#000000',
        DEFAULT: '#191e2d',
        darker: '#009eeb',
      },
      accent: {
        lighter: '#e4506b',
        DEFAULT: '#e13c5a',
        darker: '#009eeb',
      },
    }
  },
}
