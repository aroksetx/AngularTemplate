/**
 * Plugin include
 * */
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
/**
 * Build Path
 * */
const sourcePath = '/src';
const buildPath = '/build'
const bowerPath = __dirname + "./bower_components"
/**
 * Module Params include
 * */
module.exports = {
    entry: __dirname + "/src/config/boot",
    output: {
        path: __dirname + sourcePath,
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
          //  { test: /\.css$/,  loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
          //  { test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[path][name].[ext]"}
              { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
              { test: /\.html$/, loader: 'raw'}
        ]

    },


    plugins: [
      //  new ExtractTextPlugin("bundle.css")
    ],

    devServer: {
        host: "localhost",
        port: "5530",
        contentBase: __dirname + sourcePath
    }
};