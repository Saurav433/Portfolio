
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'sofia': ['Sofia', 'cursive'],
        'Sacramento': ["Sacramento", 'cursive'],
        'Oswald' :["Oswald",'sans-serif'],
        'Londrina':['Londrina Shadow', 'sans-serif'],
        'Nepali':['Noto Sans Devanagari', 'sans-serif']
      }
    },
  },
  plugins: [],
}
