/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*{html,ts}"],
  content: [],
  theme: {
    colors: { ...colors },
  },
  plugins: [require("@tailwindcss/forms")],
};
