/**
 * Top Menu Direcive
 * */
module.exports = function($compile){
    return{
            restrict: 'E',
            scope: {
                customerInfo: '=info'
            },
            template: require('./top-menu.html')
    };
};