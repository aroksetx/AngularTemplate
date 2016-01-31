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
        template: require('./footer-section.html')
    };
};