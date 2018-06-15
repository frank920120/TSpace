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

})(jQuery)