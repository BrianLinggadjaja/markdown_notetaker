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
        lighter: '#191e2d',
        DEFAULT: '#0a0f1e',
        darker: '#0a0f1e',
      },
      accent: {
        lighter: '#E4506B',
        DEFAULT: '#E13C5A',
        darker: '#009eeb',
      },
    }
  },
}
