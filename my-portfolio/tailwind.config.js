/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ This enables manual dark mode toggle support
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
        softLavender: "#C5B4E3", 
        softBlack: "#121212",
        darkSurface: "#2e2e2e",
        darkOverlay: "#303030",
        darkBorder: "#3a3a3a",
      },
      fontFamily: {
        julius: ['"Julius Sans One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
