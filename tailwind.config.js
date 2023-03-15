/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        bgHero: 'url(../images/bg-hero.svg)',
        bgHeroDesktop: 'url(../images/bg-hero-desktop.svg)',
        bgProgram: 'url(../images/program-bg.svg)',
      },
      colors: {
        primary: '#272a31',
        secondary: '#d3d3d3',
        tGray: '#3e3e3e',
        callAction: '#ec5242',
      },
    },
  },
  plugins: [],
};
