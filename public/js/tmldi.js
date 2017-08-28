$(window).on('load resize', function() {
    $('.wallpaper').height($(window).height() - $('nav').outerHeight());
});

$(document).ready(function() {
    $('.ajax-load').click(function(e) {
        var destination = e.target.getAttribute('href');
        if (!destination || destination[0] != '#') {
            e.preventDefault();
            $('#ajaxbox').load(destination);
        }
    });
});
