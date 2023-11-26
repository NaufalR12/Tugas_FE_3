/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      width: {
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
        400: "400px",
      },
      height: {
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
        400: "400px",
      },
      colors: {
        primary: "#0ea5e9",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
