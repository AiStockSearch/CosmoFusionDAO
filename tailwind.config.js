/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Mono', 'monospace'],
        share: ['Share Tech Mono', 'monospace'],
      },
      fontSize: {
        'tasa-large': [
          '44px',
          {
            lineHeight: '1',
            fontWeight: '500',
          },
        ],
        'tasa-hero': [
          '64px',
          {
            lineHeight: '1.1',
            fontWeight: '600',
          },
        ],
        'aspekta-body': [
          '16px',
          {
            lineHeight: '1.5',
            fontWeight: '450',
          },
        ],
        'aspekta-heading': [
          '24px',
          {
            lineHeight: '1.3',
            fontWeight: '550',
          },
        ],
        'aspekta-subheading': [
          '20px',
          {
            lineHeight: '1.4',
            fontWeight: '500',
          },
        ],
        'trap-accent': [
          '18px',
          {
            lineHeight: '1.2',
            fontWeight: '700',
          },
        ],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(.4,0,.2,1)',
        'slide-up': 'slideUp 0.7s cubic-bezier(.4,0,.2,1)',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
