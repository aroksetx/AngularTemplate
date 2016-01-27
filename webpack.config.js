/**
 * INIT WEBPACK MODULES
 * **/
const webpack = require('webpack'); // include webpack lib.

/**
 * INIT APPLICATION PATHS
 * **/
const sourcePath = '/src'; //source code path
const buildPath = '/build'; //final build path
const temp_Build = '/src/temp_build'; //this path will be deleted in the end

/**
 * STAT CONFIGURATION
 **/
module.exports = {
    entry: __dirname + "/src/config/boot",
    output: {
        path: __dirname + temp_Build,
        filename: "build.js"
    },

    //WATHCER CONFIGURATION
    watch: false,
    watchOptions: {
        aggregateTimeout: 100
    },

    //PARAMS FOR DEBUG
    //   devtool: "eval",

    /**
     * OBJECT FOR NEW MODULE CONNECTION
     * */
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel-loader"}, //ES 6 INCLUDE

        ]
    },

    /**
     * ARRAY FOR PLUGINS CONNECTION
     * */
    plugins: [

    ],

    /**
     * WEBPACK DEVELOPER SERVER CONFIGURATION
     * */
    devServer: {
        host: "localhost",
        port: "5530",
        contentBase: __dirname + "/src"

        //proxy: {
        //    '*': 'http://amadea.fabula.bg'
        //}

    }
};