/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e3f0ff',
          100: '#bfd9ff',
          200: '#9ac0ff',
          300: '#6fa3ff',
          400: '#4d8aff',
          500: '#2f74ff',
          600: '#1f5fe3',
          700: '#174fc1',
          800: '#123ea0',
          900: '#0f2d78',
        },
        secondary: {
          50: '#0a1224',
          100: '#0d192f',
          200: '#0f203b',
          300: '#112747',
          400: '#162f57',
          500: '#1a3a68',
          600: '#20457a',
          700: '#27508e',
          800: '#2f5aa4',
          900: '#3965bb',
        },
        accent: {
          50: '#fff4e6',
          100: '#ffe3bf',
          200: '#ffcf99',
          300: '#ffb266',
          400: '#ff9640',
          500: '#fb7a19',
          600: '#e0630d',
          700: '#b1490a',
          800: '#863808',
          900: '#5c2805',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
