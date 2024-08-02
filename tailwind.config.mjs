/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
				"button-wobble": {

					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" },

				},
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",
				"button-wobble": "button-wobble 1.5s infinite",

			},
			colors: {

				"red-light": "#f60000",
				"red-dark": "#a70000",

			},
			fontFamily: {

				lato: [ "Lato", "sans-serif" ],
				poppins: [ "Poppins", "sans-serif" ],
				roboto: [ "Roboto", "sans-serif" ],

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
