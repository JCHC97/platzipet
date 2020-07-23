const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	output: {   // de la compilación
		filename: 'app.bundle.js' 
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
	module:{
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					option: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	}
}