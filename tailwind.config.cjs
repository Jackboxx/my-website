/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			text: { dark: '#ffffff', light: '#000000' },
			bg: { light: '#f6f5f4', dark: '#101528' },
			primary: '#ff533f',
			secondary: '#2d263d',
			accent: '#3febff'
		},
		extend: {
			width: {
				'-half-full': '50%'
			},
			height: {
				'-half-full': '50%'
			}
		}
	},
	plugins: []
};
