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
            polyfills: "./polyfills.ts",
            app: "./main.ts"
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: isProd ? "[name].bundle.js" : "[name].bundle.js",
            chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
            // publicPath: "/assets/"
        },
        mode: isProd ? "production" : "development",
        target: "web",
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: "raw-loader"
                },
                {
                    test: /\.ts?$/,
                    loader: 'awesome-typescript-loader'
                }
            ]
        },
        resolve: {
            // options for resolving module requests
            // (does not apply to resolving to loaders)
            modules: [
                "node_modules",
                path.resolve(__dirname, "src")
            ],
            extensions: [".ts", ".js", "tsx", ".json", ".jsx", ".css", ".html"],
            alias: {
                '@angular/upgrade/static': '@angular/upgrade/bundles/upgrade-static.umd.js'
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