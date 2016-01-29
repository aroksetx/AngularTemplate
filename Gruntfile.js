const webpack = require('webpack');
var path = require("path");

module.exports = function(grunt) {

    grunt.initConfig({
        "webpack-dev-server": {
            start: {


                entry: "./config/boot",
                output: {
                    path: __dirname + "/src",
                    filename: "bundle.js"
                },
                module: {
                    loaders: [
                        { test: /\.css$/, loader: "style!css" },
                        { test: /\.(eot|woff|jpg|png)$/, loader: "file-loader" },
                        { test: /\.(jpg|png)$/, loader: "url-loader?limit=8192" }
                    ]
                },
                resolve: {
                    root: [path.join(__dirname, "bower_components")]
                },
                plugins: [
                    new webpack.ResolverPlugin(
                        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
                    )
                ],

                devServer: {
                    host: "localhost",
                    port: "5530",
                    contentBase: __dirname + "/src"

                    //proxy: {
                    //    '*': 'http://amadea.fabula.bg'
                    //}

                }
            }
        }
    });


    grunt.loadNpmTasks("grunt-webpack");
};