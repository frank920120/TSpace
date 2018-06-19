(function(){


//Check search bar  input vaild

   // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
   if (!String.prototype.trim) {
    (function() {
        // Make sure we trim BOM and NBSP
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
            return this.replace(rtrim, '');
        };
    })();
}

[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
        classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
} );

function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
}

function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
        classie.remove( ev.target.parentNode, 'input--filled' );
    }
}


//item hover function
$('.item-box').hover(function(){
    $(this).find('.cover').slideDown('slow');
    $(this).find('.item-button-group').fadeIn('slow');

},function(){
    $(this).find('.cover').fadeOut('fast');
    $(this).find('.item-button-group').fadeOut('fast');
});

//side btn function


$(window).scroll(function(event){
    const $ww = $(window).width();
    const $wh = $(document.body).height();
    if($ww<=768)
    {
        if($(window).scrollTop()>600&&$(window).scrollTop()<($wh*0.876))
        {
            $('.side-btn-group').fadeIn();
        }
        else{
            $('.side-btn-group').hide();
        }
    }
    
    else{
        $('.side-btn-group').css("display","none");
    }
 

});

$('#show-btn').on('click',function(){
    $(this).hide();
    $('.side-menu').fadeIn();
});

$('#hide-btn').on('click',function(){
    $('.side-menu').hide();
    $('#show-btn').fadeIn();
});

 $('.side-btn').on('click',function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                $('.side-menu').hide();
                $('#show-btn').fadeIn();

                return false;
            }
        }
     
    });

})(jQuery)