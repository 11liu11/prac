var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")
var querystring = require("querystring")
var url = require("url")
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
    devtool: "cheap-module-eval-source-map",
    devServer: {
        //告诉服务器从哪里提供内容。这只有在您想要提供静态文件时才需要。例如图片？？
        // contentBase: path.join(__dirname, "dist"),
        // --告诉服务器观看由devServer.contentBase选项提供的文件。文件更改将触发整个页面重新加载。
        // watchContentBase: true,
        // --随所有内容启用gzip压缩
        compress: true,
        // 模块的热加载，必须结合 HotModuleReplacementPlugin使用
        hot: true,
        // inline: true,
        port: 9900,
        host: 'localhost',
        //相当于gulp的middleware中间件拦截请求；
        setup(app) {
            app.post('/some/path', function(req, res) {
                console.log(url.parse(req.url, true))
                res.json({ custom: 'response' });
            });
        },
        // proxy: {
        //     // "/api": "http://localhost:3000/"
        //     // "/": "http://localhost:3000/"
        //     "/api": {
        //         target: "http://localhost:9999",
        //         pathRewrite: { "^/api": "/api/back_class/select_one_class" },
        //         secure: false
        //     }
        // },
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