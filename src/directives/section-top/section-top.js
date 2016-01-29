/**
 * Top Section
 * */
module.exports = function(){
    return{
        restrict: 'E',
        scope: {
            customerInfo: '=info',
            modulesInclude: '=modules'
        },
        template: require('./section-top.html')
    };
};