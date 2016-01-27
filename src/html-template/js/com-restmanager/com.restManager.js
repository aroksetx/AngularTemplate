/**
* rsManager - module for simple generation of requests POST\GET
**/
(function (window, angular ) {
	angular.module('restManager', []);
	angular.module('restManager').factory('$restManager', function ($log, $location, $http, $resource) {
		
		var serverInfo ={
			protocol: $location.protocol(),
            port: $location.port(),
            host: $location.host(),
			apiUrl: "api/backend"
		};

		return {

			/**
            * Function for query Generatuin
            *  @param {String} url
            *  @param {Object} data
            *  @param {String} [makeRequest = POST]
            * */
			makeRequest : function(url, data, callback) {

				var queryData = {
					url: url || undefined,
					data: data || undefined
				};

				try{
					if(!queryData.url){
						throw new SyntaxError("URL is undefined!");
					}
					if(queryData.data){
						return this._queryPOST(url, data, callback);
					}else{
						return this._queryGET(url, callback);
					}
				}catch(error){
					$log.error(error);
				}
			},

			/**
             * Post query
             * @param {String} url
             * @param {Object} data
             * */
             _queryPOST: function (url, data, callback) {

			},

             /**
             * get Query
             * @param {String} url
             * */
             _queryGET: function (url, callback) {
				 $http.get(url).
					 success(function(data, status, headers, config) {
						 callback(data)
					 }).
					 error(function(data, status, headers, config) {
						 callback(data, status, headers, config   )
					 })
             },

			/**
			 * Api Url Generation
			 * */
			urlGenerator: function (request) {
				return serverInfo.protocol + '://' + serverInfo.host +'/'+ request;
			},

			requestUrlGenerator: function (component, action) {
				return serverInfo.apiUrl + "?component=" + component + "&action=" + action;
			},

             /**
             * Reinit Server Info data
             * */
            initServerInfoObjects : function(protocol, port, host, apiUrl){
                serverInfo.protocol = protocol || serverInfo.protocol;
                serverInfo.host = host || serverInfo.host;
                serverInfo.port = port || serverInfo.port;
                serverInfo.apiUrl = apiUrl || serverInfo.apiUrl;
            }

		}

	})
})(window, window.angular);

