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
        ''
      },
      boxShadow: {
        '2xl' : "4px 4px 20px 0px #084CAF4D"
      },
    },
    
  },
  plugins: [],
}

