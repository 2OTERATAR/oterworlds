/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050507', // Почти черный, но живой
        surface: '#0f0f13',    // Для карточек
        primary: '#6d28d9',    // Фиолетовый (как на логотипе)
        accent: '#8b5cf6',     // Светлый акцент
        text: '#e2e8f0',       // Мягкий белый
        'text-muted': '#94a3b8'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Максимальная читаемость
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}