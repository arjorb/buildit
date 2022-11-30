/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': 'url("../public/background.png")',
      },
      colors: {
        steelBlue: { 20: '#C6DBFF', 50: '#E1EBFA', 100: '#4397A4', 200: '#486A6F' },
      },
      width: {
        45: '45%',
      },
      height: {
        100: '105vh',
      },
      maxWidth: {
        full: '980px',
        container: '1080px',
      },

      borderRadius: {
        2: '.25rem',
      },
    },
  },
  plugins: [],
};
