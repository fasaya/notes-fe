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
				"light-stone-2": "#ededed",
				"medium-stone": "#c4c4c4",
				stone: "#555555",
			},
		},
	},
	plugins: [],
};
