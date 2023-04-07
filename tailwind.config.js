/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: "'Jost', sans-serif;",
        rubik: "'Rubik'",
      },
      colors: {
        "black-400": "#2f333a",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
