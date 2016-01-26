//INCLUDE JS VENDORS
require("./vendors");

//INCLUDE CSS VENDORS
//require("./style-injector");


var ngModule = angular.module('app', ['ui.router']);

require('./../config/app-config')(ngModule);


