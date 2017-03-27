var path = require('path');
var webpack = require('webpack');

var ROOT_DIR = path.resolve(__dirname);
var VIEWS_DIR = path.resolve(__dirname, 'views');
var BUILD_DIR = path.resolve(__dirname, 'build');


module.exports = {
    target: 'node',
    entry: ROOT_DIR + '/server.js',
    output: {
	path: BUILD_DIR,
        filename: 'main.bundle.js'
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
