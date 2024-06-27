/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.65rem',
      },
      container: {
        center: true,
        padding: '.75rem',
        screens: {
          DEFAULT: '1420px'
        },
      },
    },
  },
  plugins: [],
}

