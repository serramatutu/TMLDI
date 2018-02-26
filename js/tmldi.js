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


// Paginação
var paginationHandler = function(){
    // store pagination container so we only select it once
    var $paginationContainer = $(".pagination-container"),
        $pagination = $paginationContainer.find('.pagination ul');
    // click event
    $pagination.find("li a").on('click.pageChange',function(e){
        e.preventDefault();
        // get parent li's data-page attribute and current page
        var parentLiPage = $(this).parent('li').data("page"),
        currentPage = parseInt( $(".pagination-container div[data-page]:visible").data('page') ),
        numPages = $paginationContainer.find("div[data-page]").length;
        // make sure they aren't clicking the current page
        if ( parseInt(parentLiPage) !== parseInt(currentPage) ) {
            var page = parentLiPage;
            // hide the current page
            $paginationContainer.find("div[data-page]:visible").hide();
            if ( parentLiPage === '+' ) // next page
                page = currentPage+1>numPages ? numPages : currentPage+1;
            else if ( parentLiPage === '-' )  // previous page
                page = currentPage-1<1 ? 1 : currentPage-1;

            $paginationContainer.find("div[data-page="+parseInt(page)+"]").show();

            $pagination.find("li").removeClass('active');
            $($pagination.find("li")[page]).addClass('active');

            $pagination.find("li").removeClass("disabled");
            if (page == 1)
                $pagination.find("li[data-page='-']").addClass("disabled");
            else if (page == numPages)
                $pagination.find("li[data-page='+']").addClass("disabled");
        }
    });
};
$(document).ready(paginationHandler);
