/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,ts,css}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
