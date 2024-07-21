/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      background: '#1B262C', // Dark Background
        
    },
    },
  },
  plugins: [],
}

