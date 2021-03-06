// Generated by CoffeeScript 1.8.0

/**
@author
@description
@name com_modulesController

@Possible actions:
 getModuleById
 getModulesByPosition
 getModuleIdsByPosition

@Error codes:
 004 - MISSING_ELEMENT_ERROR :
 003 - MISSING_PARAMETERS_ERROR
 003 - MISSING_PARAMETERS_ERROR : Language Code : '{$languageCode}'
 015 - VALIDATION_ERROR : Module with ID {$moduleId} is inactive by {$parameter}
 002 - MYSQL_ERROR
 666 - ACCESS_DENIED!
 666 - ACCESS_DENIED: The user hasn't rights to get module with ID {$moduleId} !
 */


/* @ngInject */

(function() {
  module.exports = function($scope, $restManager, $constantManager) {

    /**
     * @description - This function get module by id.
     * @params - Function take JSON data{{moduleId|languageCode}}
     * */
    $scope.getModuleById = function (data) {

      //GENERATE REQUEST USING $RESTMANAGER SERVICE
      $restManager.generateRequest($constantManager.apiUrl).post({

          //SET COMPONENT AND ACTION
          component: "com_modules             ", action: "getModuleById",

          //SET DATA PARAMETRS
          data: {
            "moduleId":5, //MENDATORY
            "languageCode": "en"
          }
        },

        //GET SUCCESS RESPONCE DATA
        function success(response) {
          console.info(response)
        },

        //GET UNSACCESS RESPONCE DATA
        function (error) {
          console.warn(error);
        });
    };

    /**
     * @description - This function get moduled by thear position.
     * @params - Function take JSON data{{modulePosition|languageCode}}.
     * */
    $scope.getModulesByPosition = function (data) {

      //GENERATE REQUEST USING $RESTMANAGER SERVICE
      $restManager.generateRequest($constantManager.apiUrl).post({

          //SET COMPONENT AND ACTION
          component: "com_modules             ", action: "getModulesByPosition",

          //SET DATA PARAMETRS
          data: {
            "modulePosition": "top", //MENDATORY
            "languageCode": "en"
          }
        },

        //GET SUCCESS RESPONCE DATA
        function success(response) {
          console.info(response)
        },

        //GET UNSACCESS RESPONCE DATA
        function (error) {
          console.warn(error);
        });
    };

    /**
     * @description - This function get module by position.
     * @params - Function take JSON data{{modulePosition|languageCode}}.
     * */
    $scope.getModuleIdsByPosition = function (data) {

      //GENERATE REQUEST USING $RESTMANAGER SERVICE
      $restManager.generateRequest($constantManager.apiUrl).post({

          //SET COMPONENT AND ACTION
          component: "com_modules             ", action: "getModuleIdsByPosition",

          //SET DATA PARAMETRS
          data: {
            "modulePosition": "top", //MENDATORY
            "languageCode": "en"
          }
        },

        //GET SUCCESS RESPONCE DATA
        function success(response) {
          console.info(response)
        },

        //GET UNSACCESS RESPONCE DATA
        function (error) {
          console.warn(error);
        });
    };


  };

}).call(this);
