/**
 * Top Menu Direcive
 * */
module.exports = function(){
    return{
        restrict: 'E',
        scope: {
            customerInfo: '=info'
        },
        template: require('./main-page-slider-top.html')
    };
};