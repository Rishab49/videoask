/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        load: {
          "75%, 100%": {
            transform: "scale(5)",
            opacity: "0",
          },
        },
        fadeIn:{
          "0%":{
            transform:"translateY(25px)",
            opacity:"0"
          },
          "100%":{
            transform:"translateY(0px)",
             opacity:"1"
          }
        },
        fadeOut:{
          "0%":{
            opacity:"1"
          },
          "100%":{
             opacity:"0"
          }
        },
        blink:{
          "50%":{
            opacity:"0%"
          }
        }
      },
      animation: {
        load: "load 1s cubic-bezier(0, 0, 0.2, 1) infinite ",
        fadeIn:"fadeIn 0.5s cubic-bezier(0, 0, 0.2, 1) 1 forwards",
        fadeOut:"fadeOut 0.5s cubic-bezier(0, 0, 0.2, 1) 1 forwards",
        blink:"blink 0.5s cubic-bezier(0.4, 0, 0.6, 1) 4;"
      },
    },
  },
  plugins: [],
};
