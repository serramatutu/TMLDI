$(window).on('load resize', function() {
    $('.wallpaper').height($(window).height() - $('nav').outerHeight());
    $('body').css('padding-top', $('nav').css('height'));
});

// FAZER AJAX AQUI :)
$(document).ready(function() {
    // $('.ajax-load').click(function(e) {
    //     var destination = e.target.getAttribute('href');
    //     if (!destination || destination[0] != '#') {
    //         e.preventDefault();
    //         $.ajax({
    //             method: 'GET',
    //             url: destination,
    //             contentType: 'html'
    //         }).done(function(data) {
    //             $('#ajaxbox').html($(data).filter('div#ajaxbox'));
    //             $('nav').html($(data).filter('nav'));
    //         });
    //     }
    // });

    // Anchor links
    $('a').on('click', function(e){
        var anchor = $.attr(this, 'href');
        if (anchor[0] != '#')
            return;

        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('[name="' + anchor.substr(1) + '"]').offset().top
        }, 500);
    });

    // Para input[type='file']
    $('.form-control-file').on('change', function(e) {
        var siblingLabel = $(this).next();
        var filename = 'Escolha um arquivo';
        if (this.files && this.files.length > 0) {
            filename = this.value.split( '\\' ).pop();
            $(this).addClass('has-file');
        }
        else
            $(this).removeClass('has-file');


        $(siblingLabel).text(filename);
    });
});
