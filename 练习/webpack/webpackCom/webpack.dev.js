var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.png|.jpg$/,
                loader: "url-loader"
            }
        ]
    },
    devServer: {
        port: 9000,
        host: "127.0.0.1",
        hot: true
    },
    plugins: [

        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]



}