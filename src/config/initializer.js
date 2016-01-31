/**
 * Angular Module Initializer
 * */
module.exports = function (appInfo) {
    //creat module
    var ngApp = angular.module(appInfo.appName, ['ui.router']);

    //return created module
    return ngApp;
};