/// <reference path="jquery-1.11.3.min.js"/>

$(document).ready(function(e){

    $('#slides').superslides({
        play: 4000,
        slide_easing: 'easeInOutCubic',
        slide_speed: 800,
        pagination: false,
        hashchange: false,
        scrollable: true
    })

    $('.bxslider').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 230,
        slideMargin: 10,
        auto: true,
        pause: 5000
    });

    $(".map-point").mouseenter(function(){
        $(".map-point").on("mousemove", function(event){
            var country = $(this).data("country"),
                count = $(this).data("count"),
                mapStats = $(".map-point-stats")
                x = parseInt($(this).css(["margin-left"])["margin-left"].replace("px","")) + 38,
                y = parseInt($(this).css(["margin-top"])["margin-top"].replace("px","")) - 32;

            mapStats.text(country+"("+count+")");
            mapStats.css({display:"block", marginLeft: x +"px", marginTop: y+"px"});
        })
    }).mouseleave(function(){
        var mapStats = $(".map-point-stats");
            mapStats.css("display","none");
    })

    $(document).ready(function(){
        $(".apply_chekbox").on("click", function(){

            if($(this).data("status")){
                $(this).data("status", false);
                $(this).removeClass("apply_chekbox_active");
            }else{
                $(this).data("status", true);
                $(this).addClass("apply_chekbox_active");
            }
        })
        $( window ).scroll(function(pos) {
            if($(window).scrollTop()> 400){
                $(".top-scrolls").css("display","block");
            }else{
                $(".top-scrolls").css("display","none");
            }


            var topBlockHeight = $("#slides").css(["height"])["height"].replace("px","");

            if($(window).scrollTop() > (topBlockHeight - 20) ){
                $(".sub-menu-panel").addClass("sub-menu-panel-fixed");
            }else{
                $(".sub-menu-panel").removeClass("sub-menu-panel-fixed");

            }

            if($(window).scrollTop() > 2400){
                $(".distribution-content-animation").addClass("animated");
                $(".distribution-content-animation").eq(0).addClass("fadeInLeft");
                $(".distribution-content-animation").eq(1).addClass("fadeInRight");
            }
            if($(window).scrollTop() > 400){
               $(".icon-center").addClass("zoomIn")
            }
            if($(window).scrollTop() > 2500){
                $(".anime-left").addClass("fadeInLeft");
                $(".anime-right").addClass("fadeInRight");
            }

            if($(window).scrollTop() > 2900){
                $(".you-tube-image").addClass("fadeInUp");
                $(".you-tube-textblock").addClass("fadeInRight");
            }

        });

    });

    $(document).ready(function(){
        $('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // создаем объект
            $(window).scroll(function() {
                var yPos = -($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент
                // Присваиваем значение background-position
                var coords = 'center '+ yPos + 'px';
                // Создаем эффект Parallax Scrolling
                $bgobj.css({ backgroundPosition: coords });
            });
        });
    });

//scrolling to anchor

    $(document).ready(function(){
        $('a[href^="#"]').click(function(){ //берем все ссылки атрибу href которых начинается с #
            if(document.getElementById($(this).attr('href').substr(1)) != null) { //на странице есть элемент с нужным нам id
                console.log($($(this).attr('href')).offset().top)
                $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500); // анимируем скролл к элементу
            }
            return false;
        });
    });
});