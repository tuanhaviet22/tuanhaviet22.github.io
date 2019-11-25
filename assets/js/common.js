$(document).ready(function () {
    $('.show-popup').trigger('click')
    $('.fst-i').trigger('click')
    // $('.slider-banner').owlCarousel({
    //     loop: true,
    //     nav: true,
    //     dots: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // })
    var swiper = new Swiper('.slider-banner', {
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // type: 'fraction',
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 1,
        //   freeMode : true
    });
    var swiper2 = new Swiper(".start-review", {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="dot-cus ' + className + '">' + '</span>';
            },
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
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
    // $('.customer-rv').owlCarousel({
    //     items: 4,
    //     loop: true,
    //     margin: 10,
    //     autoplay: true,
    //     autoplayTimeout: 1000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // })
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