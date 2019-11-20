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

    $('.customer-rv').owlCarousel({
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
                items:1
            }
        }
    })
})




$('.up').click(function(e){
    // e.preventDefault();
    let quantity = parseInt($('.ip-quantity').val());
    quantity_new = quantity +1 ;
     $('.ip-quantity').val(quantity_new);
})

$('.down').click(function(e){
    // e.preventDefault();
    let quantity = parseInt($('.ip-quantity').val());
    if(quantity > 1){
    quantity_new = quantity -1 ;
    $('.ip-quantity').val(quantity_new);}
})