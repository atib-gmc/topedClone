/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#03AC0E",
        secondary: "#00AA5B",
      },
    },
  },
  plugins: [],
};
