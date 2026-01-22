/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0D0D0D',
        charcoal: '#1A1A1A',
        ember: '#E63946',
        gunmetal: '#2D2D2D',
        titanium: '#4A4A4A',
        silver: '#A3A3A3',
        smoke: '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
