var webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname,
		filename: 'build.js'
	},
	module: {
		loaders: [
            {
            	test: /\.vue$/,
            	loader: 'vue'
            }
		]
	},
	babel: {
		presets: ['es2015']
	},
	// devServer: {
	// 	historyApiFallback: true,
	// 	hot: true,
	// 	inline: true,
	// 	progress: true
	// },
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		})
	]
};