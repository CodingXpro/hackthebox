/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customeGreen: "#9ef01a",
        customeBlue: "#00132d"
      }
    },
  },
  plugins: [],
}

