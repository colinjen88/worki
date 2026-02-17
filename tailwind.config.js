/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./let/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // Indigo 500
        primaryDark: '#4338ca', // Indigo 700
        secondary: '#ec4899', // Pink 500
        dark: '#0f172a', // Slate 900
        card: '#1e293b', // Slate 800
        border: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans TC"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
      },
      animation: {
        'cursor': 'cursor .75s step-end infinite',
        'float': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'blob': 'move-blob-1 10s infinite alternate',
        'blob-reverse': 'move-blob-2 10s infinite alternate',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
      keyframes: {
        cursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -20px, 0)' },
        },
        'move-blob-1': {
          '0%': { transform: 'translate3d(0px, 0px, 0) scale(1)' },
          '33%': { transform: 'translate3d(30px, -50px, 0) scale(1.1)' },
          '66%': { transform: 'translate3d(-20px, 20px, 0) scale(0.9)' },
          '100%': { transform: 'translate3d(0px, 0px, 0) scale(1)' },
        },
        'move-blob-2': {
          '0%': { transform: 'translate3d(0px, 0px, 0) scale(1)' },
          '33%': { transform: 'translate3d(-30px, 50px, 0) scale(1.1)' },
          '66%': { transform: 'translate3d(20px, -20px, 0) scale(0.9)' },
          '100%': { transform: 'translate3d(0px, 0px, 0) scale(1)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
            '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
            '50%': { transform: 'translateY(-15px) rotate(5deg)' }
        }
      }
    }
  },
  plugins: [],
}
