/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fifame: {
          50: '#FDF2F2',
          100: '#FDE8E8',
          200: '#FBD5D5',
          300: '#F8B4B4',
          400: '#F98080',
          500: '#D8232A', // Official Brand Red
          600: '#C51E24',
          700: '#A3151A',
          800: '#7E1216',
          900: '#540A0D',
          dark: '#0B132B',
          navy: '#0F1E36',
          cream: '#FAF7F2',
          surface: '#F8FAFC',
          gold: '#F59E0B',
          green: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -10px rgba(216, 35, 42, 0.25)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'elevated': '0 20px 40px -15px rgba(15, 23, 42, 0.12)',
      }
    },
  },
  plugins: [],
}

