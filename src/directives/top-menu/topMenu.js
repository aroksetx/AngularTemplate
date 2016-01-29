/**
 * Top Menu Direcive
 * */
module.exports = function(){
    return{
            restrict: 'E',
            scope: {
                customerInfo: '=info'
            },
            template: require('./top-menu.html')
    };
};