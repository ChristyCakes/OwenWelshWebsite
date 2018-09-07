$(document).ready(function () {
        
    // highlight current page in navbar
    var url = location.href.toLowerCase();
    $(".navbar-nav li a").each(function () {
        if (url.indexOf(this.href.toLowerCase()) > -1) {
            $(".nav-item-highlight").removeClass("nav-item-highlight");
            $(this).parent().addClass("nav-item-highlight");
        }
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
})