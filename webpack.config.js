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
	bable: {
		presets: ['es2015']
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	}
};