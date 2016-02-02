/**
 * Plugin include
 * */
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var Agent = require('agentkeepalive');


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

    //SUP CONFIGS5+2
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
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.html$/, loader: 'raw'}
        ]

    },


    plugins: [
        //  new ExtractTextPlugin("bundle.css")

    ],

    devServer: {

        host: "localhost",
        port: "5530",
        proxy: {
            '/some/path*': {
                host:'aroksetx.com',
                target: 'http://aroksetx.com',
                secure: false,
                prependPath: true,
                toProxy: 'http://aroksetx.com',
                autoRewrite: 'true'
    },
},
        contentBase: __dirname + sourcePath,
        historyApiFallback: true
    },


}