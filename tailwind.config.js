/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#ffd15b',
        dark: '#1b1b1b',
        gray: {
          DEFAULT: '#7a7a7a',
        },
        'light-gray': '#ededed',
      },
      fontFamily: {
        Anton: ['"Anton"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
      },
      fontSize: {
        heading: '44px',
        result: '21px',
      },
      borderRadius: {
        ui: '10px',
        card: '1rem',
      },
      gap: {
        filters: '65px',
      },
      boxShadow: {
        search: '0 4px 24px rgb(0 0 0 / 0.18)',
      },
    },
  },
  plugins: [],
}
