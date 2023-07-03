/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    letterSpacing: {
      tight: '-0.025em',
      normal: '0em',
      widexs: '0.0105em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },

    boxShadow: {
      lighter: '0px 0px 0px 1px inset rgba(0,0,0, 0.1)',
      light: '0px 0px 0px 1px inset rgba(0,0,0, 0.2)',
      dark: '0px 0px 0px 1px inset rgba(64,74,68, 0.5)',
      darker: '0px 0px 0px 1px inset rgba(64,74,68, 0.8)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      none: '0 0 #0000'
    },

    extend: {
      colors: {
        primaryLight: 'hsl(167, 100%, 38%)',
        onHoverLight: 'hsl(167, 50%, 48%)',
        primaryDark: 'hsl(165, 100%, 59%)',
        onHoverDark: 'hsl(165, 100%, 79%)',
        onPrimaryDark: 'hsl(162, 100%, 6%)',
        secondary: 'hsl(238, 45%, 13%)',

        slate900: 'rgb(15 23 42)',
        slate500: 'rgb(100 116 139)',
        secondaryGray: 'hsl(237, 9%, 42%)',
        secondaryGray100: 'hsl(240, 7%, 73%)',

        onWhiteBg: 'hsl(238, 45%, 13%)',

        onDarkBg: 'hsl(276, 9%, 89%)',
        bodyLight: 'hsl(255, 3%, 28%)',
        bodyLight: 'hsl(255, 3%, 28%)',

        bodyLight: 'hsl(220, 9%, 46%)',

        bodyGray: 'hsl(240, 7%, 60%)',
        bodyDark: 'hsl(0, 0%, 85%)',
        // whiteOnPrimary: '#FAFAFB',
        whiteOnPrimary: '#e6f9f5',

        whiteOnSecondary: 'hsl(240, 11%, 98%)',
        whiteOnSecondary: '#f8f5f2',

        darkSurface: 'hsl(240, 7%, 8%)',

        accentSecondary: 'hsl(238, 59%, 70%)',
        accentSecondaryLighter: 'hsl(300, 100%, 99%)',
        accentSecondaryLight: 'hsl(251, 100%, 97%)',

        outlineLight: 'hsl(144, 8%, 77%)',
        outlineDark: 'hsl(144, 7%, 27%)',
        cardGlassBg: 'rgba(255, 255, 255, 0.19)',
        gradientBorder:
          'linear-gradient(135deg,#00c297 5%,transparent,transparent,transparent,transparent,transparent,transparent),linear-gradient(300deg,#00c297 10%,transparent,transparent,transparent,transparent,transparent)',

        primary10: 'hsl(162, 100%, 6%)',
        primary20: 'hsl(165, 100%, 11%)',
        primary30: 'hsl(165, 100%, 16%)',
        primary40: 'hsl(166, 100%, 21%)',
        primary50: 'hsl(166, 100%, 26%)',
        primary60: 'hsl(166, 100%, 32%)',
        primary70: 'hsl(167, 100%, 38%)',
        primary80: 'hsl(167, 100%, 44%)',
        primary90: 'hsl(165, 100%, 59%)',
        primary95: 'hsl(156, 100%, 87%)',
        primary99: 'hsl(156, 100%, 94%)',
        primary100: 'hsl(142, 100%, 98%)',

        secondary10: 'hsl(242, 87%, 21%)',
        secondary20: 'hsl(239, 55%, 30%)',
        secondary30: 'hsl(238, 42%, 39%)',
        secondary40: 'hsl(239, 34%, 49%)',
        secondary50: 'hsl(238, 43%, 60%)',
        secondary60: 'hsl(238, 59%, 70%)',
        secondary70: 'hsl(238, 94%, 81%)',
        secondary80: 'hsl(239, 100%, 88%)',
        secondary90: 'hsl(242, 100%, 94%)',
        secondary95: 'hsl(251, 100%, 97%)',
        secondary100: 'hsl(300, 100%, 99%)',

        // primary100: 'hsl(177, 91%, 95%)',
        // primary90: 'hsl(176, 92%, 86%)',
        // primary80: 'hsl(176, 92%, 79%)',
        // primary70: 'hsl(176, 92%, 70%)',
        // primary60: 'hsl(176, 92%, 64%)',
        // primary50: 'hsl(176, 92%, 55%)',
        // primary40: 'hsl(176, 76%, 50%)',
        // primary30: 'hsl(176, 76%, 39%)',
        // primary20: 'hsl(176, 76%, 30%)',
        // primary10: 'hsl(176, 76%, 23%)',

        gray200: 'hsl(240, 7%, 60%)',
        gray300: 'hsl(237, 9%, 42%)',
        gray400: 'hsl(238, 16%, 30%)',
        gray500: 'hsl(238, 45%, 13%)',

        // Backgrounds
        darkBg: 'hsl(240, 7%, 11%)',
        dots: 'hsl(240, 7%, 42%)',

        whiteOnPrimary: '#EAEAEA',
        surface: 'hsl(60, 7%, 100%)',
        surfaceTwo: 'hsl(288, 56%, 98%)',
        surfaceBlack: 'hsl(240,0%, 15%) ',

        // Accents
        accentLight: 'hsl(167, 100%, 38%)',
        accentDark: 'hsl(165, 100%, 59%)',

        error: 'hsl(4, 100%, 64%)'
      },

      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' }
        }
      },

      animation: {
        'open-menu': 'open-menu 0.5s ease-out forwards'
      }
    }
  },
  plugins: []
};
