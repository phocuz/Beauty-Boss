/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily:{
      sans:"Public Sans, serif",
    },
    extend: {
      boxShadow: {
        '3xl': "10px 10px black"
      },
      colors: {
        customRed: '#FF7264', 
      },
    },
  },
  plugins: [],
}

