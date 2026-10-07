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
          50: '#eef3ff',
          100: '#dce6ff',
          200: '#c0d0ff',
          300: '#94b0ff',
          400: '#6b8cff',
          500: '#3b6af6',
          600: '#2a4fe0',
          700: '#223fc0',
          800: '#21369b',
          900: '#20327b',
        },
        accent: {
          50: '#eefbff',
          100: '#d7f4ff',
          200: '#b7ebff',
          300: '#84ddff',
          400: '#47c6f5',
          500: '#1ea8db',
          600: '#0f86b9',
          700: '#116b95',
          800: '#155879',
          900: '#164965',
        },
        ink: {
          50: '#f4f6fa',
          100: '#e8ecf4',
          200: '#d2dae8',
          800: '#1a2236',
          900: '#0d1322',
          950: '#070b14',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
