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
				midiBlue: '#70C1EC',
				midiBlueLight: '#B2D1EE',
				midiBlueLink: '#1A85C0',
				gold: '#FFCA09',
				midiYellow: '#F2E06B'
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
