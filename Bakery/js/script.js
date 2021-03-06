// Preloader
$(window).load(function() {
	// Preloader
	$('.status').fadeOut();
	$('.preloader').delay(300).fadeOut('slow');

});


//Change sheets breakfast menu
$(document).ready(function () {
	var zindex = 371;

	$('.toggle-breakfast > a').click(function (e) {
		var nameClass = $(this).attr('href');
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');

		if ($('.breakfast-wrap-menu').hasClass(nameClass)) {
			$('.' + nameClass).css('z-index', zindex++);
		}
	});


//Hide/Show of the block on the slider
	$('.btn-full-img').hover(function () {
		$('.flex-active-slide .img-text').animate({'opacity': '0'}, 500);
	},
	function ()	{
		$('.flex-active-slide .img-text').animate({'opacity': '1'}, 500);
	}
	);

// Carousel
	$('#carousel').flexslider({
  		animation: "slide",
  		controlNav: false,
  		animationLoop: false,
  		slideshow: false,
  		itemWidth: 90,
  		itemMargin: 20,
  		asNavFor: '#slider'
  	});

  	$('#slider').flexslider({
  		animation: "slide",
  		controlNav: false,
  		animationLoop: false,
  		slideshow: false,
  		useCSS: false,
  		sync: "#carousel"
  	});

	//Show mobile menu
	$('.mobilepanel-toggle').click(function () {
		$(this).toggleClass('active');
		$('.main-menu').toggleClass('active');
	});

});