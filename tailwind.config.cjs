/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
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
