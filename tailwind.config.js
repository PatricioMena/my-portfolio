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

    extend: {
      colors: {
        primaryLight: 'hsl(167, 100%, 38%)',
        onHoverLight: 'hsl(167, 50%, 48%)',
        primaryDark: 'hsl(165, 100%, 59%)',
        onHoverDark: 'hsl(165, 100%, 79%)',
        onPrimaryDark: 'hsl(162, 100%, 6%)',
        secondary: 'hsl(238, 45%, 13%)',
        secondary10: 'hsl(242, 100%, 94%)',
        onWhiteBg: 'hsl(238, 45%, 13%)',

        onDarkBg: 'hsl(276, 9%, 89%)',
        bodyLight: 'hsl(255, 3%, 28%)',
        bodyDark: 'hsl(0, 0%, 85%)',
        // whiteOnPrimary: '#FAFAFB',
        whiteOnPrimary: '#e6f9f5',
        whiteOnPrimary: '#EAEAEA',
        whiteOnSecondary: 'hsl(240, 11%, 98%)',
        whiteOnSecondary: '#f8f5f2',
        // darkBg: 'hsl(224, 50%, 9%)',
        darkBg: 'hsl(240, 7%, 11%)',
        darkSurface: 'hsl(240, 7%, 8%)',
        accentLight: 'hsl(167, 100%, 38%)',
        accentDark: 'hsl(165, 100%, 59%)',
        accentSecondary: 'hsl(238, 59%, 70%)',
        outlineLight: 'hsl(144, 8%, 77%)',
        outlineDark: 'hsl(144, 7%, 27%)'
      }
    }
  },
  plugins: []
};
