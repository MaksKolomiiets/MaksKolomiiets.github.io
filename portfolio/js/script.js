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
	 * Pop Up
	/* ---------------------------------------------- */

    $('a.description-work').click( function(event){
        var bgImg = $(this).attr("href");
        var title = $(this).attr("title");
        event.preventDefault();

        $('.overlay').fadeIn(400,
            function(){ 
                $('.modal-form') 
                .css('display', 'block') 
                .animate({opacity: 1}, 200);
                $('.container-modal figure').prepend('<img src=' + bgImg + ' alt="">');
                $('.modal-title').text(title);
                $("html").css({
    				marginRight: '17px',
    				overflowY: "hidden"
                });
            });
    });

    $('.modal-form').click( function(){
    	$("html").css({
        	marginRight: '0px',
    		overflowY: "auto"
    	});
    	$('.modal-form').css('display', 'none');
    	$('.overlay').fadeOut(400);
    	$('.container-modal img').remove();
    	$('.modal-title').text('');
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
