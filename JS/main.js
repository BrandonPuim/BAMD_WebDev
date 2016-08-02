$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 600) {
            $(".header").addClass("active");
        } else {
           
           $(".header").removeClass("active");
        }
    });
});

