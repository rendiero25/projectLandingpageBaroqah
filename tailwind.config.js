/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./dev.js",
    "./animation.js",
    "./**/*.html",
    "./**/*.js",
    "!./node_modules/**/*"
  ],
  theme: {
    fontFamily: {
      "main": ["Roboto", "serif"],
    },
    extend: {
      colors: {
        "primary": "#E21F27",
        "secondary": "#F5830E",
      },
      screens: {
        '3xl': '1920px', // 1080
        '4xl': '2560px', // 1440
        '5xl': '3840px', // 2160
      },
    },
  },
  plugins: [],
}

