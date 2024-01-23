/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins'],
      'body': ['Open Sans'],
      'Bebas': ['Bebas Neue'],
      'Georama': ['Georama'],
      'Oswald': ['Oswald']
    },

    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-reverse': 'spin-reverse 3s linear infinite',
        'spin-reverse-slow': 'spin-reverse 10s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'spin-reverse-slow': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },

      },
      backgroundImage: {
        'hero-img': "url('./src/assets/hero.jpg')",
      }
    }
  },
  plugins: [],
};
