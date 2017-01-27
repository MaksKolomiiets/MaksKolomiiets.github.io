// Preloader
$(window).load(function() {
        $('.status').fadeOut();
        $('.preloader').delay(300).fadeOut('slow');
});

$(document).ready(function() {

    // Show submenu 
    var subMenu = $('.sub-menu'),
        timeoutId;

    $('.hover-menu').hover(function () {
        clearTimeout(timeoutId);
        subMenu.fadeIn(1000);
        }, function () {
            timeoutId = setTimeout($.proxy(subMenu, 'hide'), 1000)
    });

    subMenu.mouseenter(function () {
        clearTimeout(timeoutId)
        }).mouseleave(function () {
        subMenu.fadeOut();
    });


    //Mobile Menu
    $('.mobilepanel-toggle').click(function () {
        $(this).toggleClass('active');
        $('.mobilemenu').toggleClass('active');
    });

    $('.page-submobilemenu').click(function () {
        $(this).toggleClass('active');
        if ($('.submobilemenu').is(':hidden')) {
            $('.submobilemenu').show(500);
        } else $('.submobilemenu').hide(500);
    });


    //Show Fixed Sidebar
    $('.fa-user').click(function () {
        $('.module-login').toggleClass('active');
    });


    // Gallery Pop-Up
    $('a.go').click( function(event){
        var bgImg = $(this).attr("href");
        event.preventDefault();
         $('.overlay').fadeIn(400,
             function(){ 
                $('.modal-form') 
                .css('display', 'block') 
                .animate({opacity: 1}, 200);
                $('.wrap-modal').css('backgroundImage', 'url(' + bgImg + ')');
            });
    });

    $('.modal-close').click( function(){
        $('.modal-form')
        .animate({opacity: 0}, 200, 
            function(){
                $(this).css('display', 'none');
                $('.overlay').fadeOut(400);
            }
        );
    });


    //Scroll Top
    $(window).scroll(function() {
        if($(this).scrollTop() > 350) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').on('click', 'a', function (event) {
        event.preventDefault();
        var curPos = $(document).scrollTop();
        var scrollTime = curPos/3;
        $('html,body').animate({'scrollTop':0},scrollTime);
    });


});