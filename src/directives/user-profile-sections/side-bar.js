/**
 * Created by MorkoNoute on 01.02.2016.
 */
/**
 * Top Menu Direcive
 * */
module.exports = function(){
    return{
        restrict: 'E',
        scope: {
            customerInfo: '=info'
        },
        template: require('./side-bar.html'),
        controller: function ($scope) {
            $scope.name = "asd";
        }
    };
};