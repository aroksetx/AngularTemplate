module.exports = function(grunt) {

    grunt.initConfig({
        webpack: {
            start: {
                // webpack options

                //Output File
                entry: "./core-config/boot.js",
                output: {
                    path: "src/",
                    filename: "bundle.js",
                },


                stats: {
                    // Configure the console output
                    colors: true,
                    modules: true,
                    reasons: true
                },
                // stats: false disables the stats output

                storeStatsTo: "xyz", // writes the status to a variable named xyz
                // you may use it later in grunt i.e. <%= xyz.hash %>

                progress: true, // Don't show progress
                // Defaults to true

                failOnError: false, // don't report error to grunt if webpack find errors
                // Use this if webpack errors are tolerable and grunt should continue

                watch: true, // use webpacks watcher
                // You need to keep the grunt process alive

                keepalive: true, // don't finish the grunt task
                // Use this in combination with the watch option

                inline: true,  // embed the webpack-dev-server runtime into the bundle
                // Defaults to false

                hot: false, // adds the HotModuleReplacementPlugin and switch the server to hot mode
                // Use this in combination with the inline option

            },
            anotherName: {}
        },
        "webpack-dev-server": {
            options: {
                webpack: {
                    // configuration for all builds
                },
                // server and middleware options for all builds
            },
            start: {
                webpack: {
                    // configuration for this build
                },
                // server and middleware options for this build
            }
        }
    });


    grunt.loadNpmTasks("grunt-webpack");
};