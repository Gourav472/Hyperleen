/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
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
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        '2xl': "1400px",
      },
      colors: {
        darkBlue: "#084CAF",
        gray: "#4E4E4E",
        lightGray: "#F3F6FB",
        lightPink: "#0A02EC14",
        offGray: "#0101010D",
        mediumGray: "#0000000A",
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
        'touch_bg': 'url(./assets/images/webp/touch_bg.webp)',
        'previous_selected': 'url(url(./assets/images/webp/previous_selected.webp)',
      },
      boxShadow: {
        '2xl': "4px 4px 20px 0px #084CAF4D",
        '3xl': "0px 4px 16px 0px #084CAF1F",
        '4xl' : "4.11px -4.29px 112.6px -10px #084CAF14",
        '5xl' : "0px 4px 4px 0px #00000040",
        '6xl': "-5px 0px 42.77px -15.24px #6F69F280",
        '7xl': "0.88px -8.24px 35.83px 0px #6F69F21F",
        '8xl': "0px 0px 42.77px -10.24px #6F69F280",
        '9xl': "0px 0px 7px white",
      },
      backgroundImage: {
        'gradientBorder':"linear-gradient(90deg, rgba(199, 199, 199, 0) 0%, #CDCDCD 34.5%, #CDCDCD 65%, rgba(196, 196, 196, 0) 100%)",
        'touch_bg':'url(./assets/images/webp/touch_bg.webp)',
        'our_team' : 'url(./assets/images/webp/our_team_bg.webp)',
      }
    },

  },   
  plugins: [],
}

