/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '2xl': '40px',
      },
      animation: {
        spin: 'spin 20s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'main': "url('/main-bg.jpg')",
        'plans': "url('/plans-bg.jpg')",
        'contact':"url('/contact.jpg')",
        'medicines':"url('/medicines-bg.jpg')",
        'hospital':"url('/hospital.jpg')",
        'clinics':"url('/clinics.jpg')",
        'dietician':"url('/dietician.jpg')",
        'exercise':"url('/exercise.jpg')",
        'healthy':"url('/healthy.jpg')",
        'medicines':"url('/medicines.jpg')",
        'pricing':"url('/pricing-bg.jpg')",

        
      },
    },
  },
  plugins: [],
}
