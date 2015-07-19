var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var webpack = require('webpack');

module.exports = {
//    context: path.join(__dirname, 'app'),
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server', 
        './app/main.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
      new WebpackNotifierPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            { test: path.join(__dirname, './app'), loaders: ['react-hot', 'babel-loader'] },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$/, loader: "url" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};