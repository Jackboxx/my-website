/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			text: { dark: '#ffffff', light: '#000000' },
			bg: { light: '#f6f5f4', dark: '#0a0e19' },
			primary: { light: '#565add', dark: '#565add' },
			secondary: { light: '#d1d1f7', dark: '#d1d1f7' },
			accent: { light: '#9f92ec', dark: '#9f92ec' }
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
