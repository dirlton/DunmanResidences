const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          50: '#fffbeb',
          100: '#fef3c7',
          300: '#fcd34d',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        brown: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          700: '#c2410c',
          900: '#7c2d12',
        },
        gold:{
          100: '#FFD700',
          200: '#D1B000',
        }
      },
      maxWidth: {
        '8xl': '88rem',
      },

      keyframes: {
        pulse: {
          '0%, ': { transform: 'scale(1)', opacity: 0 },
          '50%, ': { opacity: 1 },
          '100%': { transform: 'scale(1.2)', opacity: 0 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}