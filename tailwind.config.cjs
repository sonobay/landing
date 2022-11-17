/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				charcoal: '#414141',
				midiBlue: '#83BFE8',
				midiBlueLight: '#B8D0EB',
				gold: '#F7CC47',
				midiYellow: '#F7DF6D'
			}
		}
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.no-scrollbar': {
					'-ms-overflow-style': 'none' /* IE and Edge */,
					'scrollbar-width': 'none' /* Firefox */
				},
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none'
				}
			});
		})
	]
};
