/**
 * Connect all directives
 * */
module.exports = function(ngApp){

    /**
     * SECTION DIRECTIVES
     * */

    //TOP SECTION
    ngApp.directive('sectionTop', require('./section-top/section-top')); //top section
    ngApp.directive('footerSection', require('./footer-section/footer-section')); //top section


    /**
     * MODULES DIRECTIVES
     * */
    ngApp.directive('topMenu', require('./top-menu/topMenu')); //top menu
    ngApp.directive('topSlider', require('./main-page-slider-top/mainPageSliderTop')); //top slider connector
    ngApp.directive('floatSubMenu', require('./float-sub-menu/float-sub-menu')); //float sub menu
    ngApp.directive('mapPoint', require('./map-point/map-point')); //main page map
    ngApp.directive('partnerSlider', require('./partner-slider/partner-slider')); //partner slider

}