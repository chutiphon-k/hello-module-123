module.exports = {
  webpack: (config, options, webpack) => {

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