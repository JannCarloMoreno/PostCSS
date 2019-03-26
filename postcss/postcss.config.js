module.exports = {
	plugins: [
		/*require('postcss-image-set'),*/
		require('postcss-font-magician')({
			foundries: ['google'],
		}),
		require('postcss-import')({
			plugins: [
				require('stylelint'),
			]
		}),
		require('postcss-custom-selectors'),
		require('postcss-color-hwb'),
		require('postcss-color-mod-function'),
		require('postcss-apply'),
		require('postcss-custom-media')({
			preserve: false,
		}),
		require('postcss-preset-env')({
			autoprefixer: {
				grid: true,
				flexbox: false,
			},
			preserve: true,
			stage:1,// valor por defecto es true
			calc: false,
		})
	]
}