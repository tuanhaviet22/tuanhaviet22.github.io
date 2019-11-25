$(document).ready(function () {
    $('.show-popup').trigger('click')
    $('.fst-i').trigger('click')

    var swiper = new Swiper('.slider-banner', {
        pagination: {
            el: '.slider-banner-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="dot-cus '+ className + '">' + '</span>';
            }
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        slidesPerView: 1
    });
    var swiper2 = new Swiper(".start-review", {
        pagination: {
            el: '.start-review-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="dot-cus ' + className + '">' + '</span>';
            },
        },
        loop: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });
    var swiper3 = new Swiper('.customer-rv',{
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="dot-cus ' + className + '">' + '</span>';
            },
        },
    })
})
$('.up').click(function (e) {
    // e.preventDefault();
    let quantity = parseInt($('.ip-quantity').val());
    quantity_new = quantity + 1;
    $('.ip-quantity').val(quantity_new);
})
$('.down').click(function (e) {
    // e.preventDefault();
    let quantity = parseInt($('.ip-quantity').val());
    if (quantity > 1) {
        quantity_new = quantity - 1;
        $('.ip-quantity').val(quantity_new);
    }
})


let ImgLarge = $(".image-large img");
$('.list-image .image').click(function (e) {
    e.preventDefault();
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    let url = $(this).find('img').attr('src')
    ImgLarge.attr('src', url)
})

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 63.8) {

        $(".menu").addClass("menu-fixed");
    } else {
        $(".menu").removeClass("menu-fixed");

    }
})


$('.btn-show-menu').click(function () {
    $('#navbar').css('left', '0')
})
$('.icon-close').click(function () {
    $('#navbar').css('left', '-20rem')
})