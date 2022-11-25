/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        steelBlue: { 100: '#4397A4' },
      },
      maxWidth: {
        container: '1024px',
      },

      borderRadius: {
        2: '.25rem',
      },
    },
  },
  plugins: [],
};
