module.exports = function (ngApp, $log) {

    ngApp.config(require("./Routing"));

    /**
     * Controllers include
     * */
    require('./controllers/index')(ngApp);

    /**
     * Directives include
     * */
    require('./directives/index')(ngApp);
};


