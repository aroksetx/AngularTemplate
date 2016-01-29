/**
 * Angular Module Initializer
 * */
module.exports = function (appInfo) {
    //creat module
    var ngApp = angular.module('app', ['ui.router']);

    //return created module
    return ngApp;
};