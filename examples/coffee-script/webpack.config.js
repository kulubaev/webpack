module.exports = {
	module: {
		rules: [
			{ test: /\.coffee$/, loader: "coffee-loader" }
		]
	},
	resolve: {
		extensions: [".web.coffee", ".web.js", ".coffee", ".js"]
	}
};
