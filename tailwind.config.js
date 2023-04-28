/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'978px',
      xl:'1440px'
    },
    extend: {
      colors:{
        raisinblack2:'hsl(245, 16%, 16%)',
        raisinBlack1:'hsl(244, 17%, 19%)',
        majorelleBlue:'hsl(245, 67%, 59%)',
        ghostWhite1:'hsl(240, 100%, 99%)',
        ghostWhite2:'hsl(228, 50%, 96%)',
        whiteOpacity:'hsla(0, 0%, 100%, 0.5)',
        independence:'hsl(245, 17%, 27%)',
        lavenderWeb:'hsl(247, 69%, 95%)',
        eerieBlack:'hsl(210, 11%, 15%)',
        coolGray:'hsl(244, 17%, 61%)',
        sapphire:'hsl(211, 100%, 35%)',
        white:'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

