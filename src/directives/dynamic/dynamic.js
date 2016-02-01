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
        template: '<top-menu></top-menu>'
    };
};