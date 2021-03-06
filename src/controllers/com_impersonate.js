// Generated by CoffeeScript 1.8.0

/**
@author
@description
@name com_impersonateController

@Possible actions:
 impersonate
 cancelImpersonation

@Error codes:
 004 - MISSING_ELEMENT_ERROR: User Id : {$id}
 003 - MISSING_PARAMETERS_ERROR : {$parameters}
 015 - VALIDATION_ERROR: Only super admin can impersonate.
 015 - VALIDATION_ERROR: Missing Impersonation
 001 - GENERAL_ERROR
 666 - ACCESS_DENIED!

 */


/* @ngInject */

(function() {
  module.exports = function($scope, $constantManager, $restManager) {

    /**
     * @description - Impersonates other user
     * @return - Return JSON The impersonated user info or an error
     * @params -
     * */
    $scope.impersonate = function () {

      //GENERATE REQUEST USING $RESTMANAGER SERVICE
      $restManager.generateRequest($constantManager.apiUrl).post({

          //SET COMPONENT AND ACTION
          component: "com_impersonate                 ", action: "impersonate",

          //SET DATA PARAMETRS
          data: {
            "impersonatedUserId":17        // MANDATORY                                             
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
     * @description - Cancel impersonation other user
     * @return - Return JSON success message or an error
     * Check for:
     * if session user  is super admin
     * if there is any Impersonation
     * @params -
     * */
    $scope.cancelImpersonation = function () {

      //GENERATE REQUEST USING $RESTMANAGER SERVICE
      $restManager.generateRequest($constantManager.apiUrl).post({

          //SET COMPONENT AND ACTION
          component: "com_impersonate                 ", action: "cancelImpersonation",

          //SET DATA PARAMETRS
          data: {}
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
