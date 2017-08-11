const BabiliPlugin = require("babili-webpack-plugin");

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
		new BabiliPlugin()
	)

    return config
  }
}