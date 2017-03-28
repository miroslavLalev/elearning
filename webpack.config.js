var path = require('path');
var webpack = require('webpack');

var VIEWS_DIR = path.resolve(__dirname, 'views');
var BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
    entry: VIEWS_DIR + '/index.jsx',
    output: {
	    path: BUILD_DIR,
      filename: 'bundled.js'
    },
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
