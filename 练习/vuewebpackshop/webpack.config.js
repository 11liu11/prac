var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var data = require("./data/data.js")
var queryString = require("querystring")
var url = require("url")
module.exports = {
    entry: {
        main: __dirname + "/src/main.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ["babel-loader"]
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.jpg|\.png$/,
                use: ["url-loader"]
            }, {
                test: /\.vue$/,
                include: /src/,
                use: "vue-loader"
            }
        ]
    },
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    devServer: {
        compress: true,
        hot: true,
        port: 9999,
        host: "localhost",
        setup(app) {
            app.get("/data", function(req, res, next) {
                var $id = queryString.parse(url.parse(req.url).query).id
                if ($id == 1) {
                    res.json(data.mxz);
                } else {
                    res.json({ state: "error" });
                }
            })
            app.get("/id", function(req, res, next) {
                res.json({ id: 1 });
            })
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js"
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),

    ]

}