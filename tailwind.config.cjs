/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			text: { dark: '#ffffff', light: '#000000' },
			bg: { light: '#f6f5f4', dark: '#101528' },
			primary: { light: '#ff533f', dark: '#ff533f' },
			secondary: { light: '#2d263d', dark: '#2d263d' },
			accent: { light: '#3febff', dark: '#3febff' }
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
