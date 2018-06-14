(function(){

































//item hover function
$('.item-box').hover(function(){
    $(this).find('.cover').slideDown('slow');
    $(this).find('.item-button-group').fadeIn('slow');

},function(){
    $(this).find('.cover').fadeOut('fast');
    $(this).find('.item-button-group').fadeOut('fast');
});

})(jQuery)