/* ---------------------------------------------- /*
 * Preloader
/* ---------------------------------------------- */

$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
});


$(document).ready(function () {


	/* ---------------------------------------------- /*
	* Size Header BG
	/* ---------------------------------------------- */

	if ($(window).width() > 768) {
		$(".bg-screen-height").height($(window).height());

		$(window).resize(function(){
			$(".bg-screen-height").height($(window).height());
		});
	} else {
		$('.bg-screen-height').height(600);
		$('.header-overlay').height(600);
		$('.intro').css({'bottom': '250px'});
	}


	/* ---------------------------------------------- /*
	* Smooth scroll
	/* ---------------------------------------------- */

	$("a[href^='#']").bind("click", function(e){
		e.preventDefault();
		var anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.scroll-up').fadeIn();
		} else {
			$('.scroll-up').fadeOut();
		}
	});


	/* ---------------------------------------------- /*
	*   Form effect
	/* ---------------------------------------------- */

	$("#contact-form input, #contact-form textarea").on("focusin", function() {
        $(this).prev().css("marginTop", "-35px")
    }).on("focusout", function() {
        return !$(this).val() && $(this).prev().css("marginTop", "0px")
    });


	/* ---------------------------------------------- /*
	 * WOW Animation When You Scroll
	/* ---------------------------------------------- */

    wow = new WOW({
			mobile: false
		});
		wow.init();

});
