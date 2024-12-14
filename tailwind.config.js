/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: 
    {
      'azo': ['azo-sans-web', 'sans-serif'],
      'monda': ['Monda', 'sans-serif'],
      'mont': ['Montserrat', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "4rem",
      },
      width: {
        DEFAULT: "100%",
        xl: "1440px",
      },
    },
    colors: {
      'theme-black' : '#050104',
      'theme-pink' : '#FD06B2',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [
  ],
}

