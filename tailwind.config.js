/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        gilroy: "Gilroy, sans-serif",
      },
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "992px",
          xl: "1180px",
        },
        padding: {
          DEFAULT: "20px",
        }
      },
      colors: {
        darkBlue: "#084CAF",
        gray: "#4E4E4E",
        lightGray: "#F3F6FB",
        lightWhite: "#FFFFFF29",
        lighterGray: "#00000033",
        offBlue: "#E6EDF7",
        regularWhite : "#FFFFFF0A",
        lightBlue : "#084CAF0A",
      },
      backgroundSize: {
        "full": "100% 100%",
      },
      fontSize: {
        "custom-32": "32px",
        "custom-80": "80px",
      },
      backgroundImage: {
        'hero_bg': 'url(./assets/images/webp/hero_bg.webp)',
        'touch_bg':'url(./assets/images/webp/touch_bg.webp)',
        'our_team' : 'url(./assets/images/webp/our_team_bg.webp)',
      },
      boxShadow: {
        '2xl' : "4px 4px 20px 0px #084CAF4D",
        '4xl' : "4.11px -4.29px 112.6px -10px #084CAF14",
        '5xl' : "0px 4px 4px 0px #00000040",
      },
    },
    
  },
  plugins: [],
}

