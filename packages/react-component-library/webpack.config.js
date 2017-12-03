const webpack = require('webpack');
const webpackHtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname+'/src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: '.',
        port: 8080,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins:[
        new webpack.BannerPlugin('Copyright @ nateliu.github.io'),
        new webpackHtmlPlugin({
            template: __dirname+'/src/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
};