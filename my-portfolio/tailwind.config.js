/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlue: "#77A9EE",
        textColor: "#235AC7",
        softPurple: "#B8AEE0",
        mistGray: "#F4F6F8", 
        cloudWhite: "#FFFFFF", 
        shadowGray: "#D9E0EC", 
        accentCoral: "#FF8A7A", 
      },
      fontFamily: {
        julius: ['"Julius Sans One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}