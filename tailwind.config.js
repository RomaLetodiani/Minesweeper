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
        Block: 'inset 3px 3px 5px #bababa, inset -3px -3px 5px #ffffff',
        Blocks: '0px 0px 20px -5px #5f6984',
      },
    },
  },
  plugins: [],
}
