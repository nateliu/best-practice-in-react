# webpack-react-startkit <p id="top"></p>

1. Init project  
``` npm init ```  
2. Install devtools  
``` npm install --save-dev webpack webpack-dev-server babel-core babel-polyfill babel-loader babel-runtime babel-plugin-transform-runtime babel-preset-es2015 babel-preset-stage-2 html-webpack-plugin ```   
3. Open package.json and add following script   
```
"scripts": {
 "start": "webpack-dev-server --watch",
 "build": "webpack --progress --colors"
}
```
4. modify the webpack.config.js file. add some usefull and I think it is important section:
```
devtools: eval-source-map,
devServer : {
    contentBase: '.',
    port: 8080,
    historyApiFallback: true,
    inline: true,
    hot: true
},
```
5. Add three usefull plugins in webpack.config.js.of course I think it is important.
```
const webpack = require('webpack');
const webpackHtmlPlugin = require('html-webpack-plugin');

plugins:[
        new webpack.BannerPlugin('Copyright @ nateliu.github.io'),
        new webpackHtmlPlugin({
            template: __dirname+'/src/index.tmpl.html' //very important to bundle to output path.
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
 output: {
        path: __dirname + '/public',
        filename: 'bundle-[id]-[hash].js' //very important in cache
    },
```  
7. npm start











