/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white-tr": "rgba(255,255,255,0.5)",
        "white-xtr": "rgba(255,255,255,0.5)",
        "black-tr": "rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
