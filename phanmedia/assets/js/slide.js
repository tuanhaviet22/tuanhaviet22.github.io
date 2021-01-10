var thumb_video_slide = new Swiper('.banner-slider', {
    spaceBetween: 10,
    slidesPerView: 1,
    loop : true,
    // autoplay: {
    //     delay: 3000,
    //   },
    // navigation: {
    //     nextEl: '.next-thumb-banner',
    //     prevEl: '.prev-thumb-banner',
    // },
    pagination: {
        el: '.banner-pagination',
        type: 'bullets',
        clickable: true,
    },
});


var project_slide = new Swiper('.project-slide',{
    spaceBetween : 20,
    // speed: 1000
})
$('.list-project .item').click(function(){
    let id = $(this).data('id');
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    project_slide.slideTo(id)
})