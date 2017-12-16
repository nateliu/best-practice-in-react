const webpack = require('webpack');
const webpackHtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname+'/src/index.jsx',
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
    resolve: {
        extensions: ['.jsx','.js','.json']
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.css|\.less$/,
            loader: 'style-loader!css-loader!less-loader'
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