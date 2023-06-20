/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		extend: {
			colors: {
				"main-yellow": "#fdbe00",
				"light-stone": "#f7f7f7",
				"medium-stone": "#ededed",
				stone: "#555555",
			},
		},
	},
	plugins: [],
};
