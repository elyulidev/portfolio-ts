import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#55e6a5",
			},
			screens: {
				esm: "400px",
				sm: "500px",
				xsm: "700px",
				md: "800px",
				xmd: "900px",
				lg: "1100px",
				xlg: "1200px",
				xl: "1400px",
			},
			backgroundImage: {
				"hero-banner": "url('/images/banner.jpg')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
