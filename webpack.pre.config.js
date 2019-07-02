var webpack = require("webpack");
var path = require("path");

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry : './src/script/main.js',
    // entry : ['./src/script/main.js','./src/script/a.js'],
    entry : {
        main: './src/script/main.js',
        a : './src/script/a.js'
    },
    // output : {
    //     path : path.resolve(__dirname, './dist/js'),
    //     filename : 'bundle.js'
    // }
    // output : {
    //     path : path.resolve(__dirname, './dist/js'),
    //     // filename : '[name]-[hash].js'
    //     filename: '[name]-[chunkhash].js'
    // },
    output : {
        path : path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            // inject: 'head',
            inject: false,
            title: 'webpack is good',
            minify: {
                removeComments: true, //删除注释
                collapseWhitespace: true
            }
        })
    ]
}