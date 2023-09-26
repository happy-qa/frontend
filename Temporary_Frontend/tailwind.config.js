/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "commingsoon": "url(/src/Imgs/ComingSoon.png)",
        "mobilecs": "url(/src/Imgs/MobileCS.png)"
      },
      colors: {
        "dark-blue": "#212734"
      },
      borderColor: {
        "crunchyroll-orange": "#F47521",
        "dark-blue": "#00008B"
      },
      height: {
        "2vh": "2vh",
        "3vh": "3vh",
        "9vh": "9vh",
        "11vh": "11vh",
        "15vh": "17vh",
        "65vh": "65vh",
        "70vh": "75vh",
        "108vh": "108vh",
      },
      width: {
        "75vw": "75vw",
        "95vw": "98.5vw",
        "105vw": "105vw",
        "108vw": "108vw",
        "90%": "90%",
      },
      spacing: {
        "70rem": "58rem",
        "1%": "3%",
      },
      textColor: {
        "orange": "#F47521",
      },
    },
  },
  plugins: [],
};
