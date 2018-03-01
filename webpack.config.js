const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const {AngularCompilerPlugin} = require("@ngtools/webpack");
const {NoEmitOnErrorsPlugin, EnvironmentPlugin, HashedModuleIdsPlugin} = require('webpack');

module.exports = function (options) {
    options = options || {};
    const isProd = options.prod;

    const config = {
        context: path.resolve(__dirname, "src"),
        entry: {
            polyfills: "./polyfills.ts",
            main: "./main.ts"
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: isProd ? "[name].bundle.[chunkhash].js" : "[name].bundle.js",
            chunkFilename: isProd ? '[name].bundle.[chunkhash].js' : '[name].bundle.js'
            // publicPath: "/assets/"
        },
        mode: isProd ? "production" : "development",
        target: "web",
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    "test": /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                    "loader": "file-loader",
                    "options": {
                        "name": "[path][name].[ext]?[hash:20]"
                    }
                },
                {
                    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                    // loader: '@ngtools/webpack',
                    "use": [
                        {
                            "loader": "@angular-devkit/build-optimizer/webpack-loader",
                            "options": {
                                "sourceMap": isProd ? false : true
                            }
                        },
                        "@ngtools/webpack"
                    ]

                },
                {
                    "test": /\.js$/,
                    "use": [
                        {
                            "loader": "@angular-devkit/build-optimizer/webpack-loader",
                            "options": {
                                "sourceMap": false
                            }
                        }
                    ]
                },
                {
                    test: /\.css|scss|sass$/,
                    // exclude: /node_modules/,
                    // include: [
                    //     path.join(nodeModules, 'bootstrap'),
                    // ],
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
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
        // devtool: isProd ? "inline-source-map" : "source-map", // enum
        plugins: [
            new CleanWebpackPlugin(['dist'], {}),
            new HTMLPlugin({
                template: "./index.html",
                filename: "index.html"
            }),
            new EnvironmentPlugin({
                "NODE_ENV": "production"
            }),
            new AngularCompilerPlugin({
                "mainPath": "main.ts",
                "platform": 0,
                "hostReplacementPaths": {
                    "environments/environment.ts": "environments/environment.prod.ts"
                },
                "sourceMap": isProd ? false : true,
                "tsConfigPath": "./src/tsconfig.json",
                // "tsConfigPath": "tsconfig.json",
                "compilerOptions": {}
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
            historyApiFallback: true, // true for index.html upon 404, object for multiple paths
            // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
            // https: false, // true for self-signed, object for cert authority
            noInfo: true, // only errors & warns on hot reload
        },
        optimization: {
            splitChunks: {
                chunks: "initial",
                name: "vendor"
            }
        }
    };

    return config;
}