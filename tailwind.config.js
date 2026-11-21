/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: { 950: '#040914', 900: '#071022', 850: '#0a162d', 800: '#0f1f3d', 700: '#172c52' }
      }
    }
  },
  plugins: []
};
