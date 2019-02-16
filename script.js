$(document).ready(function($) {
    $('.imgs img').on('click', function(event) {
        event.preventDefault();
        let img_src = $(this).attr('src');
        let scena = $("#img-scena");
        /* Act on the event */
        if ($('.img-scena').hasClass("active")) {
            $('.img-scena').removeClass('active');
            setTimeout(function() {
                $('.img-scena img').attr('src', img_src.toString());
                scena.addClass('active');
            }, 330);
        } else {
            $('.img-scena img').attr('src', img_src.toString());
            scena.addClass('active');
        }


    });
    $('.img-scena').on('click', function(event) {
        event.preventDefault();
        $(this).removeClass('active');
    });
});