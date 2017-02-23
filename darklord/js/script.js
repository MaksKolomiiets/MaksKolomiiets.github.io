/* ---------------------------------------------- /*
* Preloader
/* ---------------------------------------------- */


$(document).ready(function () {

    /* ---------------------------------------------- /*
     * Show dropdown menu
     * ---------------------------------------------- */
    $('header .drop-item').hover(function() {
        $(this).children('.dropdown').stop(true, true).delay(200).fadeIn();
    }, function() {
        $(this).children('.dropdown').stop(true, true).delay(200).fadeOut();
    });


    /* ---------------------------------------------- /*
     * Fixed header navbar
    /* ---------------------------------------------- */
    $(document).scroll(function() {

        var documentScrollTop = $(document).scrollTop();

        if (documentScrollTop > $('.header-contacts').height()) {
            $('.header-navbar').addClass('fixed');
        }
        else if ($('.header-navbar').hasClass('fixed')) {
            $('.header-navbar').removeClass('fixed');
        }
    });


    /* ---------------------------------------------- /*
     * Show Navbar side and Mobile menu
    /* ---------------------------------------------- */
    $(".open-navbar-side").click(function(e) {
        e.preventDefault();
        $(".navbar-overlay").fadeIn(300);
        $(".navbar-side-right").css("transform", "translateX(0)");
    });

    $(".navbar-overlay").click(function() {
        $(".navbar-side-right").css("transform", "translateX(100%)");
        $(".navbar-overlay").fadeOut(300);
    });

    /*-------- Mobile menu ---------*/
    $(".open-mobile-menu").click(function(e) {
        e.preventDefault();
        $(".navbar-overlay").fadeIn(300);
        $(".navbar-mobile").css("transform", "translateX(0)");
    });

    $(".navbar-overlay").click(function() {
        $(".navbar-mobile").css("transform", "translateX(-100%)");
        $(".navbar-overlay").fadeOut(300);
    });

    $(".drop-item a").click(function(e) {
        e.preventDefault();

        $(this).next().toggle();
    });


    /* ---------------------------------------------- /*
     * Initialize slider
    /* ---------------------------------------------- */
    var swiper = new Swiper('.swiper-1', {
        pagination: false,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 4,
        coverflow: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });

    var swiper2 = new Swiper('.swiper-2', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 40,
        loop: true,
        loopedSlides: 4,
        breakpoints: {
            992: {
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20
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
        }, 500);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200 && $(window).width() > 768) {
            $('.side-buttons').css({ transform: 'translateX(0px)' });
        } else {
            $('.side-buttons').css({ transform: 'translateX(60px)' });
        }
    });


    /* ---------------------------------------------- /*
     * Audio play/pause
    /* ---------------------------------------------- */
    $("<audio></audio>").attr({
            'src':'audio/ramin.mp3',
            'autoplay':'autoplay',
            'loop':'loop'
        }).appendTo("body");

    $(".side-btn-audio").click(function() {
        $(".side-btn-audio").toggleClass("audio");
        if ($(".side-btn-audio").hasClass("audio")) {
            $("audio")[0].pause();
        } else {
            $("audio")[0].play();
        }
    });


    /* ---------------------------------------------- /*
     * Counts effect
    /* ---------------------------------------------- */
    var show = true;
    var countbox = ".about";

    $(window).on("scroll load resize", function(){

        if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();

        if(w_top + 100 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                from: 0,
                thousandSeparator: "",
                duration: 2000
            });

            show = false;
        }
    });


    /* ---------------------------------------------- /*
     * Show video block
    /* ---------------------------------------------- */
    $(".video-toggle").click(function() {
        $(this).css('display','none');
        $("audio")[0].pause();
        $(".side-btn-audio").addClass("audio");

        var video = $("#ytplayer"),
            srcV = video.attr('src');
        video.attr('src', srcV);

        player = new YT.Player('ytplayer', {
            height: '360',
            width: '1366',
            videoId: 'uEIqriWagYQ',
            playerVars: { 'autoplay': 1, 'controls': 1, 'autohide': 1, 'showinfo': 0 },
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    });

    function onPlayerStateChange(event) {

        if (event.data == YT.PlayerState.PAUSED) {

            $(".video-toggle").css('display','block');
            $("#ytplayer").css('opacity','0');
        }

        if (event.data == YT.PlayerState.PLAYING) {
            $("#ytplayer").css('opacity','1');
        }
    }


    /* ---------------------------------------------- /*
     * Countdown
    /* ---------------------------------------------- */
    $(".countdown").countdown("2018/01/01", function(event) {
        $(this).html(
            event.strftime('<div>\n<span>%D</span>\nDays\n</div>\n<div>\n<span>%H</span>\nHours\n</div>\n<div>\n<span>%M</span>\nMinutes\n</div>\n<div>\n<span>%S</span>\nSeconds\n</div>')
        );
    });


    /* ---------------------------------------------- /*
     *   Validation form
    /* ---------------------------------------------- */
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    $(".subscribe").submit(function(event) {
        event.preventDefault();

        var email = $(".required").val(),
            fieldError = $(".error");

        if (email.length == 0) {
            fieldError.text("This field is required.");
            $(".required").css('borderBottomColor','#D9534F');
        } else if (!isValidEmailAddress(email)) {
            fieldError.text("Please enter a valid email address.");
        }
         else {
            fieldError.text("Ok");
            $(".required").css('borderBottomColor','#fff');
        }
    });
    



 });