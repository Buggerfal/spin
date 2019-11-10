const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "none",

    entry: ["./src/js/index.js"],

    output: {
        filename: "main.js?hash=[contenthash]",
        path: path.resolve(__dirname, "dist"),
        chunkFilename: "[name].js?hash=[contenthash]",
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /([\\/]node_modules[\\/])|([\\/]vendors[\\/])/,
                    name: "vendors",
                    chunks: "initial",
                },
            },
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|dist)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "clear engine",
            template: "index.html",
        }),
    ],

    resolve: {
        alias: {
            "@images": path.resolve(__dirname, "./src/base64/images.js"),
            "pixi-spine": path.resolve(__dirname, "./vendors/pixi-spine")
        },
    },
};
