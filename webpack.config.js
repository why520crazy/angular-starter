const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = function (options) {
    options = options || {};
    const isProd = options.prod;

    const config = {
        context: path.resolve(__dirname, "src"),
        entry: {
            app: "./main.js"
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: isProd ? "main.bundle.js" : "main.bundle.js",
            // publicPath: "/assets/"
        },
        mode: isProd ? "production" : "development",
        target: "web",
        module: {
            rules: [
                {
                    test: /\.html$/,
                }
            ]
        },
        resolve: {
            // options for resolving module requests
            // (does not apply to resolving to loaders)
            modules: [
                "node_modules",
                path.resolve(__dirname, "src/app")
            ],
            extensions: [".ts", ".js", ".json", ".jsx", ".css"],
            alias: {

            }
        },
        devtool: isProd ? "inline-source-map" : "source-map", // enum
        plugins: [
            new CleanWebpackPlugin(['dist'], {}),
            new HTMLPlugin({
                template: "./index.html",
                filename: "index.html"
            })
        ],
        devServer: {
            // proxy: { // proxy URLs to backend development server
            //     '/api': 'http://localhost:3000'
            // },
            port: 9000,
            contentBase: path.join(__dirname, 'src'), // boolean | string | array, static file location
            open: true,
            compress: true, // enable gzip compression
            // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
            // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
            // https: false, // true for self-signed, object for cert authority
            // noInfo: true, // only errors & warns on hot reload
        }
    };

    if (isProd) {
        config.optimization = {
            minimize: true
        }
    }
    return config;
}