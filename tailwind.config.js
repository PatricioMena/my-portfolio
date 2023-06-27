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
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
    },

    extend: {
      colors: {
        primaryLight: 'hsl(167, 100%, 38%)',
        onHoverLight: 'hsl(167, 50%, 48%)',
        primaryDark: 'hsl(165, 100%, 59%)',
        onHoverDark: 'hsl(165, 100%, 79%)',
        onPrimaryDark: 'hsl(162, 100%, 6%)',
        secondary: 'hsl(238, 45%, 13%)',
        onWhiteBg: 'hsl(238, 45%, 13%)',

        onDarkBg: 'hsl(276, 9%, 89%)',
        bodyLight: 'hsl(255, 3%, 28%)',
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

        // Backgrounds
        darkBg: 'hsl(240, 7%, 11%)',
        whiteOnPrimary: '#EAEAEA',
        surface: 'hsl(60, 7%, 100%)',
        surfaceTwo: 'hsl(288, 56%, 98%)',
        surfaceBlack: 'hsl(240,0%, 15%) ',

        // Accents
        accentLight: 'hsl(167, 100%, 38%)',
        accentDark: 'hsl(165, 100%, 59%)'
      }
    }
  },
  plugins: []
};
