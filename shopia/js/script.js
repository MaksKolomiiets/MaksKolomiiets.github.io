/* ---------------------------------------------- /*
 * Preloader
/* ---------------------------------------------- */

$(window).load(function() {
		$('.status').fadeOut();
		$('.preloader').delay(300).fadeOut();
});


$(document).ready(function() {
 
    $("#owl-main-slider").owlCarousel({ 
        smartSpeed: 500,
	    items: 1,
	    responsive: {
	    	0: {
	    		dots: false
	    	},
	    	992: {
	    		dots: true
	    	}
	    }
    });

    $("#owl-testimonial-slider").owlCarousel({ 
        smartSpeed: 500,
	    items: 2,
	    responsive: {
    		1200: {
    			items: 2
    		},
    		992: {
    			items: 2,
    			dots: false
    		},
    		768: {
    			items: 1,
    			dots: false
    		},
    		480: {
    			items: 1,
    			dots: false
    		},
    		320: {
    			items: 1,
    			dots: false
    		}
    	}
    });

    $("#owl-brand-slider").owlCarousel({ 
	    items: 6, 
	    loop: true,
    	smartSpeed: 500,
    	responsive: {
    		1200: {
    			items: 6
    		},
    		992: {
    			items: 5,
    			dots: false,
    			loop: false
    		},
    		768: {
    			items: 3,
    			dots: false,
    			loop: false
    		},
    		480: {
    			items: 2,
    			dots: false,
    			loop: false
    		},
    		320: {
    			items: 1,
    			dots: false,
    			loop: false
    		}
    	}
    });
    

    /* ---------------------------------------------- /*
	 * Smooth scroll
	/* ---------------------------------------------- */

	$(".scroll-up a").click(function(e){
		e.preventDefault();
		var anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 200 && $(window).width() > 768) {
			$('.scroll-up').fadeIn();
		} else {
			$('.scroll-up').fadeOut();
		}
	});


	/* ---------------------------------------------- /*
	 * Footer menu
	/* ---------------------------------------------- */

	$(".sub-menu h2").click(function () {
		$(this).toggleClass("active-menu");
	});


    /* ---------------------------------------------- /*
     * Mobile menu
    /* ---------------------------------------------- */
    $('.mobilepanel-toggle').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });


    /* ---------------------------------------------- /*
     * Currency menu
    /* ---------------------------------------------- */
    $(".currency .currency-item").click(function () {
        $(".currency").toggleClass("open");

        $(document).on("click", function(e) {
            var container = $(".currency");

            if (!container.is(e.target) && container.has(e.target).length === 0 && container.hasClass("open")) {
                $(".currency").toggleClass("open");
            }
        });
    });

    $(".list-currency li").click(function () {
        var nameCurrency = $(this).text();

        $(".currency-item").text(nameCurrency);
        $(".currency").removeClass("open");
        $(".list-currency").fadeOut();
    });

 
});