$(document).ready(function(){
    /*---------------------------------------- dropdown menu ----------------------------------------*/
    $('.nav_li').click(function(event){
        event.preventDefault();
        $('.nav_li .dropdown').toggle();
    });

    /*---------------------------------------- to top ----------------------------------------*/
    $('.totop img').click(function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },500);
    });

});

// swiper-container auto next
const swiper = document.querySelector('swiper-container').swiper;
setInterval(function(){swiper.slideNext();}, 4000);