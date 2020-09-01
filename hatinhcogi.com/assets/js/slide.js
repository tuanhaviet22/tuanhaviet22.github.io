

var thumb_video_slide = new Swiper('.thumb-video-slide',{
    spaceBetween: 10,
    slidesPerView : 2,
    navigation: {
        nextEl: '.next-thumb-video',
        prevEl: '.prev-thumb-video',
    },
    pagination: {
        el: '.swiper-pagination',        
    },
});

var header_slide = new Swiper('.header-slide',{
    slidesPerView : 6,
    spaceBetween: 5,
    loop: true,
    navigation: {
        nextEl: '.h-next',
        prevEl: '.h-prev',
    },
})
