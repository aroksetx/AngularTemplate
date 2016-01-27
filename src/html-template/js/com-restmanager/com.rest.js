/**
 * rsManager - module for simple generation of requests POST\GET
 **/
(function (window, angular ) {
    angular.module('rest', []);
    angular.module('rest').factory('$rest', function ($log, $location, $http, $resource) {

        var serverInfo ={
            protocol: $location.protocol(),
            port: $location.port(),
            host: $location.host(),
            apiUrl: "api/backend"
        };


        return {
            generateRequest: function(url){
                return $resource(this.urlGenerator(url) +"?component=:component&action=:action", {}, {
                    get: {method: 'GET', cache: false, isArray: false},
                    post: {method: 'POST', cache: false, isArray: false},
                    queryGenerator: {method: 'POST', cache: false, isArray: true}
                });
            },
            urlGenerator: function (url) {
                return serverInfo.protocol + '://' + serverInfo.host + url;
            },
            getMsgCode: function(data){
                return data.substring((data.length -3), data.length);
            }
        }
    })
})(window, window.angular);

