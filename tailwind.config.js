/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          'to': {
            transform: 'scale(600)',
          },
        },
        scaleDown: {
          'from': {
            transform: 'scale(600)',
          },
          'to': {
            transform: 'scale(0)',
          },
        },
      },
      animation: {
        scaleUp: 'scaleUp 0.5s forwards',
        scaleDown: 'scaleDown 0.2s forwards',
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        rubik: ['"Rubik"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}