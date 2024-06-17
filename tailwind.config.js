/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primery: "#34495E",
        secondary: "#AED6F1",
        tertiary: "#D5DBDB"
      }
    },
  },
  plugins: [],
}

