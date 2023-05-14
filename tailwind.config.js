/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage:{
        'profile-bg':"url('./src/assets/img/img.jpg')"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
