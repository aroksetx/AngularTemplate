module.exports = function(ngModule){

    //Configuration setup
    ngModule.config(function($stateProvider, $urlRouterProvider) {
        /**
         * Include UI routing configuration
         * */
        require('./Routing')($stateProvider, $urlRouterProvider);
    });

    /**
     * Include Controllers
     * */
    require('./controllers/index')(ngModule)

    /**
     * Include Directives
     * */
    require('./directives/index')(ngModule)
};