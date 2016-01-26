const webpack = require('webpack');
const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = '/src';

module.exports = {
    entry: "./src/core-config/boot",
    output: {
        path: __dirname + buildPath,
        filename: "bundle.js"
    },

    //SUP CONFIGS
    watch: false,
    watchOptions: {
        aggregateTimeout: 100
    },

    //PARAMS FOR DEBUG
 //   devtool: "eval",

    //MODULES INCLUDE
    module: {
        loaders: [
           // {test: /\.css$/, loader: "style!css!autoprefixer?browsers=last 2 versions"},
           // {test: /\.(eot|woff|png|jpg|svg|ttf|eot|woff2)$/, loader: "file-loader?name=[path][name].[ext]"},
            {test: /\.js$/, loader: "babel"}
        ]
    },



    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("./bower.json", ["main"])
        ),

        new webpack.NoErrorsPlugin(),
     //  new HtmlWebpackPlugin(),
/*
        //JS Minnificator
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })**/
    ],

    devServer: {
        host: "localhost",
        port: "5530",
        contentBase: __dirname + "/src"

        //proxy: {
        //    '*': 'http://amadea.fabula.bg'
        //}

    }
};