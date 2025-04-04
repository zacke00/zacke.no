/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softGreen: "#879a77",
        orangeSun: "#E3725C",
      },
    },
  },
  plugins: [],
}