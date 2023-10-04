/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "commingsoon": "url(/src/Imgs/ComingSoon.png)",
        "mobilecs": "url(/src/Imgs/MobileCS.png)",
        "5gift": "url(/src/Imgs/5gift.png)",
        "10gift": "url(/src/Imgs/10gift.png)",
        "25gift": "url(/src/Imgs/25gift.png)",
        "50gift": "url(/src/Imgs/50gift.png)",
        "100gift": "url(/src/Imgs/100gift.png)",
      },
      colors: {
        "dark-blue": "#212734",
        "twitch-purple": "#9146FF",
      },
      borderColor: {
        "crunchyroll-orange": "#F47521",
        "dark-blue": "#00008B",
        "twitch-purple": "#9146FF",
      },
      height: {
        "2vh": "2vh",
        "3vh": "3vh",
        "9vh": "9vh",
        "11vh": "11vh",
        "15vh": "17vh",
        "65vh": "65vh",
        "75vh": "75vh",
        "108vh": "108vh",
      },
      width: {
        "50vw": "50vw",
        "75vw": "75vw",
        "80vw": "80vw",
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
