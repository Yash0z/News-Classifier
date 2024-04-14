/** @type {import('tailwindcss').Config} */
export default {
     content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
          "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
          extend: {
               fontFamily: {
                    Montserrat: ["Montserrat"],
                    Raleway: ["Raleway"],
                    PlayfairDisplay: ["Playfair Display"],
                    Poppins: ["Poppins"],
                    Questrial: ["Questrial"],
                    OpenSans: ["Open Sans"],
               },
               colors: {
                    'white': '#F9F7F7',
                    'silver': '#DBE2EF',
                    'cerulean': '#3F72AF',
                    'dark blue': '#112D4E',
                    'black': '#191a25',
                    'dark': '#000000',

                    'midnightblue': '#150050',
                    'dark urple': '#3F0071',
                    'lavender': '#9288F8',
                    'black': '#191a25',
                    'red': '#FF204E',
                    'yellowishgreen': '#74E291',
                    'reddishpurple': '#A0153E',
                    'sky': '#C0D6E8',
                    
               },


               typography: {
                    DEFAULT: {
                         css: {
                              "*": {
                                   margin: 0,
                                   padding: 0,
                                   listStyle: "none",
                                   boxSizing: "border-box",
                                   textDecoration: "none",
                                   fontFamily: "Questrial",

                              },
                         },
                    },
               },
          },
     },
     plugins: [],
}