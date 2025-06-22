/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': {
          DEFAULT: '#2c7d59',
          'dark': '#1a5c3e',
        },
        'secondary': {
          DEFAULT: '#3a6ea5',
          'dark': '#2a5180',
        },
        'dark': '#333333',
        'light': '#f5f5f5',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
} 