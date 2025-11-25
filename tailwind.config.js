/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Balm City Primary Colors (Core Identity – Greens & Neutral Tones)
        'dark-green': '#004D40',
        'bangladesh-green': '#00796B',
        'mountain-meadow': '#00BFA5',
        'caribbean-green': '#00E676',
        'anti-flash-white': '#F2F3F4',
        
        // Balm City Secondary Colors (Subtle Supportive Tones)
        'stone': '#B0BEC5',
        'pistachio': '#CFD8DC',
        
        // Organized color palette for easier use
        balm: {
          'dark': '#004D40',
          'primary': '#00796B',
          'medium': '#00BFA5',
          'light': '#00E676',
          'neutral': '#F2F3F4',
          'stone': '#B0BEC5',
          'soft': '#CFD8DC',
        },
      },
      fontFamily: {
        'adomania': ['Adomania', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['Adomania', 'Playfair Display', 'serif'],
        'sans': ['Adomania', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out',
        'progress-bar': 'progressBar 2s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        progressBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width, 100%)' },
        },
      },
    },
  },
  plugins: [],
}

