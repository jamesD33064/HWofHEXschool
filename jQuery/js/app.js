var rotate = 180;
$(document).ready(function(){
    /*---------------------------------------- dropdown menu ----------------------------------------*/
    $('#nav_li_intro > a').click(function(event){
        event.preventDefault();
        $('#nav_li_intro > a .dropdownmenu').toggle();
        $('#nav_li_intro_toggle').animate(
            { deg: rotate },
            {
                duration: 300,
                step: function(now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
            }
        );
        if(rotate==0)rotate = 180;
        else rotate = 0;
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
setInterval(function(){swiper.slideNext();}, 5000);