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
        offGray: "#0000000A"
      },
      backgroundSize: {
        "full": "100% 100%",
      },
      fontSize: {
        "custom-32": "32px",
        "custom-80": "80px",
      },
      boxShadow: {
        '2xl': "4px 4px 20px 0px #084CAF4D",
        '3xl_white': "0px 0px 15px white",
      },
      backgroundImage: {
        'gradientBorder':"linear-gradient(90deg, rgba(199, 199, 199, 0) 0%, #CDCDCD 34.5%, #CDCDCD 65%, rgba(196, 196, 196, 0) 100%)",
      }
    },

  },
  plugins: [],
}

