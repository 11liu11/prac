var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")
module.exports = {
    entry: __dirname + "/src/index.js",
    // entry: {
    //     frame: __dirname + "/frame.js",
    //     dist: __dirname + "/index.js"
    // },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        // chunkFilename: "[name][hash].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            // use: ["babel-loader"],
            loader: "babel-loader",
            // options: {
            //     "presets": [
            //         "es2015"
            //     ]
            // }
        }, {
            test: /\.html$/,
            loader: 'html-loader',
            // query: {
            //     minimize: true
            // }
        }, ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // ( 公共chunk(commnons chunk) 的名称)
            filename: "commons.js",
            // ( 公共chunk 的文件名)
        }),
        new HtmlWebpackPlugin({
            // filename: 'test.html',
            template: "./index.html"
        })
    ]
}