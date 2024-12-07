/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  sans: ['var(--font-geist-sans)'],
			  mono: ['var(--font-geist-mono)'],
			},
		  },
	},
	plugins: [
		require('@tailwindcss/typography'),
		// ...
	  ],
}
