/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        Block: 'inset 3px 3px 5px #bababa, inset -3px -3px 5px #ffffff',
        Blocks: '0px 0px 20px -5px #5f6984',
      },
    },
  },
  plugins: [],
}
