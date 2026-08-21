/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#070e17',
          900: '#0d1726',
          800: '#1c3d5a',
        },
        comic: {
          yellow: '#fce055',
          red: '#d93829',
          dark: '#0d0d0d',
          parchment: '#f4ece1',
        }
      },
      fontFamily: {
        comic: ['"Comic Neue"', 'cursive', 'sans-serif'],
        heading: ['Bangers', 'cursive'],
        epic: ['"Cinzel Decorative"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'comic-sm': '4px 4px 0px #000',
        'comic-md': '6px 6px 0px #000',
        'comic-lg': '8px 8px 0px #000',
        'comic-xl': '12px 12px 0px #000',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
