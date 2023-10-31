const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          10: 'rgba(255, 255, 255, 1)',
          20: 'rgba(248, 250, 247, 1)',
          30: 'rgba(227, 228, 226, 1)',
          40: 'rgba(190, 191, 189, 1)',
          50: 'rgba(140, 140, 139, 1)',
          80: 'rgba(29, 35, 27, 1)',
          100: 'rgba(0, 0, 0, 1)'
        },
        primary: {
          main: 'rgba(157, 168, 135, 1)',
          background: 'rgba(157, 168, 135, 0.08)',
          surface: 'rgba(157, 168, 135, 0.24)',
          border: 'rgba(157, 168, 135, 0.56)',
          hover: 'rgba(183, 192, 163, 1)',
          pressed: 'rgba(145, 153, 129, 1)',
          focus: 'rgba(180, 197, 148, 1)'
        },
        yellow: 'rgba(238, 215, 179, 1)',
        blue: 'rgba(201, 214, 234, 1)'
      },
      fontFamily: {
        header: ['var(--font-headers)'],
        body: ['var(--font-body)']
      },
      fontSize: {
        xxs: '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite'
      },
      aspectRatio: {
        'banner-second-slider': '1/3'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animated'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
