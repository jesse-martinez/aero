/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1': '1px',
      },
      fontSize: {
        'xxs': '0.65rem',
      },
      container: {
        center: true,
        padding: '.75rem',
        screens: {
          DEFAULT: '1320px'
        },
      },
    },
  },
  plugins: [],
}

