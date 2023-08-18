const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
      },
      colors: {
        light: '#84D7E9',
        dark: '#0C1018',
        dim: '#0E1B2D',
        bright: '#FF6476',
      },
    },
  },
  plugins: [],
});
