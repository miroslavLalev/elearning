var path = require('path');
var webpack = require('webpack');

var VIEWS_DIR = path.resolve(__dirname, 'views');
var PUBLIC_DIR = path.resolve(__dirname, 'public');

module.exports = {
    entry: VIEWS_DIR + '/index.jsx',
    output: {
	    path: PUBLIC_DIR,
      filename: 'app.js',
      publicPath: '/public'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
	     extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
		query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    stats: {
        colors: true
    }
};
