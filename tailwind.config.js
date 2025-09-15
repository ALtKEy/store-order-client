/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nanum-square': ['"NanumSquare"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

