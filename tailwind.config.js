/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mines-1': '#990000',
        'mines-2': '#006699',
        'mines-3': '#660000',
        'mines-4': '#006600',
        'mines-5': '#663300',
        'mines-6': '#003300',
        'mines-7': '#003366',
        'mines-8': '#660033',
      },
      boxShadow: {
        neon: '0 0 5px #08f, 0 0 15px #08f, 0 0 30px #08f',
        glow: '0 0 2px #fff, inset 0 0 2px #fff, 0 0 5px #08f, 0 0 15px #08f, 0 0 30px #08f',
        Block: '0 0 2px #fff, inset 0 0 2px #fff, 0 0 5px #08f, 0 0 5px #08f, 0 0 2px #08f',
      },
      fontFamily: {
        rubik: ['Rubik Scribble', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
