/**
 * Top Menu Direcive
 * */
module.exports = function(){
    return{
        restrict: 'E',
        scope: {
            customerInfo: '=info'
        },
        template: require('./partner-slider.html')
    };
};