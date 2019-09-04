//Preloader
$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(400).fadeOut('slow'); 
    $('body').delay(400).css({'overflow': 'visible'});
})