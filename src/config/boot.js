/**
 * Vendors include
 * */
require("./../vendors/vendors");

/**
 * Application information initializr
 ***/
var appInfo = require("./appInfo");
var ngApp = require('./initializer')(appInfo);


/**
 * Conntect Application Config
 * */

require('./../appConfig')(ngApp);

