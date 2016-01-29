/**
 * Float Sub Menu
 * */
module.exports = function(){
    return{
        restrict: 'E',
        scope: {
            customerInfo: '=info'
        },
        template: require('./map-point.html')
    };
};