/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': 'url("../public/background.png")',
      },
      colors: {
        steelBlue: { 100: '#4397A4', 200: '#486A6F' },
      },
      height: {
        100: '100vh',
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
