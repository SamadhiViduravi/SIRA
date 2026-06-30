/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crimson': '#A30000',
        'crimson-dark': '#990000',
      }
    },
  },
  plugins: [],
}
