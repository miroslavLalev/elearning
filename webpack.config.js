var path = require('path');
var webpack = require('webpack');

var CLIENT_DIR = path.resolve(__dirname, 'client');
var PUBLIC_DIR = path.resolve(__dirname, 'public');

module.exports = {
    entry: CLIENT_DIR + '/index.jsx',
    output: {
	    path: PUBLIC_DIR,
      filename: 'app.js',
      publicPath: '/public'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'SERVICE_URL': JSON.stringify('https://owlearn.online/api/v1')
        }
      })
    ],
    resolve: {
	     extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
      }]
    },
    stats: {
        colors: true
    }
};
