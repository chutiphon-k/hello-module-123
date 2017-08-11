module.exports = {
  webpack: (config, options, webpack) => {

	// Object.assign(config.output, {
	// 	publicPath: '/static/',
	// 	filename: 'bundle.js',
	// })

	// Object.assign(config.module, {

	// })

	// config.module.rules.push(
	// 	{
	// 		test: /\.(js|jsx)$/,
	// 		use: 'babel',
	// 	}
	// )

	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			minimize: true,
			compress: {
				drop_console: true,
				drop_debugger: true,
				warnings: false
			},
			output: {
				comments: false
			}
		})
	)

    return config
  }
}