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
      },
      screens: {
        '3xl': '1920px', 
        '4xl': '2560px', 
        '5xl': '3840px', 
      },
    },
  },
  plugins: [],
}

