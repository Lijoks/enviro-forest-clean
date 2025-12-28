/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#2D5A27",
        "accent-green": "#4CAF50",
        "dark-forest": "#1b3517",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
