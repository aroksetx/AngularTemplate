/**
 * Created by Morko on 11.08.2015.
 */


var app = angular.module('amadeaFront', ['ui.router', 'ngResource', 'rest', 'ui-notification', 'validation.match']);

app.config(function($stateProvider, $urlRouterProvider){



    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('main', {
            url: "/",
            templateUrl: "template/main.html",
            controller: 'userReg'
        })
        .state('reg', {
            url: "/com_users/register",
            templateUrl: "template/regestration.html",
            controller: 'userReg'
        })
        .state('reg-check', {
            url: "/com_users/checktoken/:id",
            templateUrl: "template/tokencheck.html",
            controller: 'checkToken'
        })
        .state('reg-login', {
            url: "/com_users/login",
            templateUrl: "template/login.html",
            controller: 'userReg'
        })
        .state('resend-token', {
            url: "/com_users/resenttocken",
            templateUrl: "template/resent-tocken.html"
        })
        .state('reg-restore-password', {
            url: "/com_users/restore-password",
            templateUrl: "template/restore-password.html"
        })
        .state('login-after-reg', {
            url: "/com_users/login",
            templateUrl: "template/user-login.html",
            controller: 'userReg'
        })
        .state('reg-setAccount', {
            url: "/com_users/setAccount",
            templateUrl: "template/setAccount.html",
            controller: 'userReg'
        })
        .state('account-type', {
            url: "/com_users/accoount-type",
            templateUrl: "template/account_params.html"
        })
        .state('account-type-artist', {
            url: "/com_users/accoount-type/artist",
            templateUrl: "template/account-types/Artist.html"
        })
        .state('account-type-distributor', {
            url: "/com_users/accoount-type/distributor",
            templateUrl: "template/account-types/Distributor.html"
        })
        .state('account-type-label', {
            url: "/com_users/accoount-type/label",
            templateUrl: "template/account-types/Label.html"
        })
        .state('reg-thank', {
            url: "/com_users/register/thank",
            templateUrl: "template/account-types/thank-you.html"
        })
});

app.controller('userReg', function($rootScope, $scope, $location, $rest, $log){


    $scope.register = function(){


        if($scope.user.password === $scope.user.passwordConfirm){
            $rest.generateRequest('/api/frontend').get({
                    component: "com_users", action: "register",
                    data: {
                        "password": $scope.user.password,
                        "email": $scope.user.email
                    }
                },
                function success(response) {
                    console.log(response)
                    window.location.hash ="/com_users/register/thank";
                },function(error){
                    $scope.errors = error.data.errors;
                    console.log($scope.errors)
                })
        }
    };

    $scope.login = function(data){


        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "login",
                data: {
                    "password": data.password,
                    "username": data.email
                }
            },
            function success(response) {
                console.log(response)
            },function(error){
                $scope.errors = error.data.errors;
                $log.warn(error);
            })
    };

    $scope.resendUserPassword = function () {
        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "resendToken",
                data: {
                    "email": $scope.account.email
                }
            },
            function success(response) {
                console.log(response)
            },function(error){
                $log.warn(error);
            })
    };

    $scope.changeUserPassword = function () {
        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "changeUserPassword",
                data: {
                    "oldPassword":"   20082008 ",  // MANDATORY
                    "password":"20072007"             // MANDATORY
                }
            },
            function success(response) {
                console.log(response)
            },function(error){
                $log.warn(error);
            })
    };
    $scope.createChildUser = function () {+
        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "createChildUser",
                data: {
                    "firstName":"Test USER",                  // MANDATORY
                    "lastName":"Last name 34",             // MANDATORY
                    "email":"koko171@alala.com",      // MANDATORY
                    "phone":"12232123",
                    "born":"1970-09-09",
                    "countryId":"15",
                    "city":" Dnepropetrovsk",
                    "address":" bogoridi 17 ",
                    "zipCode":"dddddddddd",
                    "notes":"sdf sdf sdf",
                    "hearAboutUs":"asd asd sdf sdf sff "
                }
            },
            function success(response) {
                console.log(response)
            },function(error){
                $log.warn(error);
            })
    };
    $scope.updateChildUser = function () {
        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "updateChildUser",
                data: {
                    "userId":"79",                         // MANDATORY
                    "changePassword":"1",       // MANDATORY        VALUES =0 OR 1
                    "firstName":"Test USER",
                    "lastName":"Last name 34",
                    "email":"koko171@alala.com",
                    "phone":"12232123",
                    "born":"1970-09-09",
                    "countryId":"15",
                    "city":" Dnepropetrovsk    ",
                    "address":" bogoridi 17 ",
                    "zipCode":"dddddddddd",
                    "notes":"sdf sdf sdf",
                    "hearAboutUs":"asd asd sdf sdf sff "
                }
            },
            function success(response) {
                console.log(response)
            },function(error){
                $log.warn(error);
            })
    };
    $scope.changeChildUserPassword = function () {
        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "changeChildUserPassword",
                data: {
                    "userId":"79"
                }
            },
            function success(response) {
                console.log(response)
            },function(error){
                $log.warn(error);
            })
    };
    $scope.connectChildUserToArtists = function () {
        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "connectChildUserToArtists",
                data: {
                    "userId":"79",                         // MANDATORY
                    "artistIds":[6,41]                     // MAN
                }
            },
            function success(response) {
                console.log(response)
            },function(error){
                $log.warn(error);
            })
    };
    $scope.activateChildUser = function () {
        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "activateChildUser",
                data: {
                    "userId":"79"
                }
            },
            function success(response) {
                console.log(response)
            },function(error){
                $log.warn(error);
            })
    };
    $scope.deactivateChildUser = function () {
        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "deactivateChildUser",
                data: {
                    "userId":"79"
                }
            },
            function success(response) {
                console.log(response)
            },function(error){
                $log.warn(error);
            })
    };
    $scope.deleteChildUser = function () {
        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "deleteChildUser",
                data: {
                    "userId":"79"
                }
            },
            function success(response) {
                console.log(response)
            },function(error){
                $log.warn(error);
            })
    };
    $scope.getChildUser = function () {
        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "getChildUser",
                data: {
                    "userId":"79"
                }
            },
            function success(response) {
                console.log(response)
            },function(error){
                $log.warn(error);
            })
    };

})

app.controller('checkToken', function($rootScope, $scope, $log, $location, $rest, $stateParams){

    $rest.generateRequest('/api/frontend').get({
            component: "com_users", action: "checkToken",
            data: {
                "token":$stateParams.id
            }
        },
        function success(response) {
            console.log(response)
            $scope.sucMsg = "YOUR ACCOUNT CONFIRMED. THANK YOU.";
            $scope.er = false;
            setTimeout(function(){
                window.location.hash = "/com_users/login";
            },1000)
        },function(error){
            $scope.sucMsg = "conform is not succes";
            $scope.er = true;
            $log.warn(error);
        })

    $scope.resendToken = function (data) {
        console.log(data)
        $rest.generateRequest('/api/frontend').get({
                component: "com_users", action: "resendToken",
                data: {
                    "email": data
                }
            },
            function success(response) {
                $scope.er = false;
            },function(error){
                $log.warn(error);
            })
    };

})

app.controller('userProfileCtrl', function($rootScope, $scope, $log, $location, $rest, $stateParams){

})


app.directive('regestrationSection', function () {
    return {
        link: function (scope, element, attrs) {

        },
        templateUrl: 'template/directive/logo-section/logo.html',
        restrict: 'E',
        controller: function ($scope, $element, $attrs, $transclude, otherInjectables) {
        }
    }
});

app.directive('logoSection', function () {
    return {
        link: function (scope, element, attrs) {

        },
        templateUrl: 'template/directive/registration-section/registration-section.html',
        restrict: 'E',
        controller: function ($scope, $element, $attrs, $transclude, otherInjectables) {
        }
    }
});

app.directive('secondNavigation', function () {
    return {
        link: function (scope, element, attrs) {

        },
        templateUrl: 'template/directive/second-navigation/second-navigation.html',
        restrict: 'E',
        controller: function ($scope, $element, $attrs, $transclude, otherInjectables) {
        }
    }
});

app.directive('firstSection', function () {
    return {
        link: function (scope, element, attrs) {

        },
        templateUrl: 'template/directive/first-section/first-section.html',
        restrict: 'A',
        controller: function ($scope, $element, $attrs, $transclude, otherInjectables) {
        }
    }
});

app.directive('secondSection', function () {
    return {
        link: function (scope, element, attrs) {

        },
        templateUrl: 'template/directive/second-block/second-block.html',
        restrict: 'A',
        controller: function ($scope, $element, $attrs, $transclude, otherInjectables) {
        }
    }
});

app.directive('thirdSection', function () {
    return {
        link: function (scope, element, attrs) {

        },
        templateUrl: 'template/directive/third-section/third-section.html',
        restrict: 'A',
        controller: function ($scope, $element, $attrs, $transclude, otherInjectables) {
        }
    }
});

app.directive('forthSection', function () {
    return {
        link: function (scope, element, attrs) {

        },
        templateUrl: 'template/directive/third-section/third-section.html',
        restrict: 'A',
        controller: function ($scope, $element, $attrs, $transclude, otherInjectables) {
        }
    }
});