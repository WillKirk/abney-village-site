/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./templates/**/*.html",
      "./static/**/*.js",
    ],
    theme: {
      extend: {
        colors: {
          village: {
            green: '#3d5a3e',
            lightgreen: '#6a8f6b',
            stone: '#b5a898',
            cream: '#f5f0e8',
            earth: '#8b6914',
            dark: '#2c2c2c',
          }
        },
        fontFamily: {
          heading: ['Playfair Display', 'serif'],
          body: ['Lato', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }