/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.mx-auto': {
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '64px',
          'padding-right': '64px',
          'width': '1520px',
          'max-width': '100%',
        },
      }, ['responsive', 'hover']);
    },
  ],
}

