module.exports = {
	plugins: [
		/*require('postcss-image-set'),*/
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
			preserve: true,// valor por defecto es true
			calc: false,
		})
	]
}