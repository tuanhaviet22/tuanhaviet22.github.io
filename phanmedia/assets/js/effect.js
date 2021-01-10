$(document).ready(function () {
    // console.log("Code by tuanha.asia with 💙")
    // Fixed menu
    var num = $('header').offset().top;
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
})
    