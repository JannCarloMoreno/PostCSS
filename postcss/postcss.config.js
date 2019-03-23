module.exports = {
	plugins: [
		require('postcss-apply'),
		require('postcss-preset-env')({
			autoprefixer: {
				grid: true,
				flexbox: false,
			},
			preserve: true,// valor por defecto es true
		})
	]
}