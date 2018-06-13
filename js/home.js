$(document).ready(function() {
    $('.home-slideshow').slick(
        {
            dots: true,
            infinite: true,
            speed:500,
            fade: true,
            cssEase: 'linear',
            autoplay:true,
            prevArrow: null,
            nextArrow: null
        }
      
      );
});