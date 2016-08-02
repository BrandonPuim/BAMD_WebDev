$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 600) {
            $(".header").addClass("active");
        } else {
           
           $(".header").removeClass("active");
        }
    });
});

$('document').ready(function (){
	$('select').on('change', function(){
		var option = $(this).val();
		console.log(option);
		$("html, body").animate({ scrollTop: $('#'+option).offset().top }, 1000);
	});
})