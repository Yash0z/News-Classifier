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
            primary: 'rgba(var(--primary))',
            active: 'rgba(var(--active))',
            filled: 'rgba(var(--filled))',
            background: 'rgba(var(--background))',
            secondary: 'rgba(var(--secondary))',
            "accent-1": 'rgba(var(--accent-1))',
            "accent-2": 'rgba(var(--accent-2))',
            "accent-3": 'rgba(var(--accent-3))',
            "text-clr": 'rgba(var(--text-clr))',
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