var htmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack'); //访问内置的插件
const path = require('path');

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            // inject: 'body',
            inject: false,
            title: 'webpack is good'
        }),
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            // inject:'body',
            inject: false,
            title: 'this is a.html',
            // chunks: ['main', 'a']
            excludeChunks: ['b','c']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            // inject:'body',
            inject: false,
            title: 'this is b.html',
            excludeChunks: ['a','c']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            // inject:'body',
            inject: false,
            title: 'this is c.html',
            excludeChunks: ['a','b']
        })
    ]
}