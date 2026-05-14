/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eefcf8',
          100: '#d6f7ef',
          200: '#afefde',
          300: '#7cdfc6',
          400: '#48c7ab',
          500: '#26aa8f',
          600: '#1a8874',
          700: '#176c5e',
          800: '#16564c',
          900: '#14483f',
        },
        accent: {
          50: '#fff6ed',
          100: '#ffead5',
          200: '#ffd1aa',
          300: '#ffaf74',
          400: '#ff8242',
          500: '#fb6220',
          600: '#ec4810',
          700: '#c33610',
          800: '#9b2e15',
          900: '#7c2915',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(38, 170, 143, 0.25), 0 0 40px rgba(251, 98, 32, 0.08)' },
          '100%': { boxShadow: '0 0 30px rgba(38, 170, 143, 0.4), 0 0 60px rgba(251, 98, 32, 0.16)' },
        },
      },
    },
  },
  plugins: [],
}
