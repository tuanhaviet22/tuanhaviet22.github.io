$(document).ready(function(){
    $('.show-popup').trigger('click')
    $('.slider-banner').owlCarousel({
        loop : true ,
        nav: true ,
        dot: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.start-review').owlCarousel({
        items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
})