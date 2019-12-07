$(document).ready(function () {
  
  var swiper = new Swiper('.swiper1', {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
  var swiper_mb = new Swiper('.swiper1-mb', {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper2 = new Swiper('.list-doctors', {
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // loop: true,
    slidesPerView : 5,
  })
  var doctor = new Swiper('.slider-doctor',{
    spaceBetween: 10,
    navigation: {
      nextEl: '.d-right',
      prevEl: '.d-left',

    },
    // effect: 'fade',
    thumbs: {
      swiper: swiper2
    }
  })

  var swiper3 = new Swiper('.slider-3d',{
    loop: true,
    navigation: {
      nextEl: '.c-next',
      prevEl: '.c-prev',
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 70,
      modifier: 3,
      slideShadows : true,
      slideShadows: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3,
      }
    }

  })
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    // freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
     breakpoints: {
      320: {
        slidesPerView: 5
      },
      1024: {
        slidesPerView: 6,
      }
    }
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.s-right',
      prevEl: '.s-left',
  
    },
    // effect: 'fade',
    thumbs: {
      swiper: galleryThumbs
    },
   
  });
  // End slider

  // Menu mobile
  $('.navbar-toggler').click(function(){
    let menu = $('#menu-ds');
    let op = $('.opacity-black');
    menu.css('left','-1rem');
    op.css({'opacity':'0.6','z-index': '999','height':"10000"});
    $('body').css('overflow','hidden')
  })
  $('.close-menu-mb').click(function(){
    let menu = $('#menu-ds');
    let op = $('.opacity-black');
    menu.css('left','-22rem');
    op.css({'opacity':'0','z-index': '-99','height':"100%"});
    $('body').css('overflow','auto')
  })
// End
  var selectedClass = "";
  $(".effect").click(function () {
    $(this).find(".b-white").addClass('active');
    $(this).siblings().find(".b-white").removeClass('active');
    if($(this).find('.arrow-down').length == 0){
      $(this).find('.b-white').after('<span class="arrow-down"></span>')
      $(this).find('._body').after(' <span class="arrow-right d-md-none"></span>')
    }
    $(this).siblings().find('.arrow-down').remove()
    $(this).siblings().find('.arrow-right').remove()
    selectedClass = $(this).attr("data-rel");
    
    $('.slider-intro').fadeTo(100,0.1);
    $('.slider-intro').find('.'+selectedClass).addClass("disable-dnone") 
    $('.slider-intro').find('.'+selectedClass).siblings().removeClass("disable-dnone")   
      setTimeout(function() {
        // $("."+selectedClass).fadeIn().addClass('animation');
        $(".slider-intro").fadeTo(300, 1);
        }, 300);
  });
  // Customner tab
  $('.slider-cus').css('display','none')
  $('.customer .body .item').click(function(e){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    if($(this).closest('div').hasClass('line1')){
      $(' .line2 .item').removeClass('active')
    }else{
      $(' .line1 .item').removeClass('active')
    }
    
    e.preventDefault();
    let id = $(this).data('id');
    $('.slider-3d-'+id).fadeIn();
    $('.slider-3d-'+id).siblings().hide();
    
  });
  $('.customer .body .line1 .item').first().trigger('click')
  // End cus

  // Tab
  var event = $('.event-col');
  var news = $('.news-col');
  $('.event-col-tab').click(function(e){
    e.preventDefault();
    let $this = $(this);
    if($('.news-col-tab').hasClass('active')){
      $('.news-col-tab').removeClass('active')
    }
    $this.addClass('active');
    event.show();
    news.hide();
  })

  $('.news-col-tab').click(function(e){
    e.preventDefault();
    let $this = $(this);
    if($('.event-col-tab').hasClass('active')){
      $('.event-col-tab').removeClass('active')
    } 
    $this.addClass('active');
    event.hide();
    news.show();
  })
  $('#autoClick').trigger('click');
  // Check mobile
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.event-col-tab').trigger('click')
   }
  //  Fixed menu

  
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 180) {
      // $('#navbar').removeClass('navbar-scroll')
      $("header").addClass("fixed-menu");
  } else {
      $("header").removeClass("fixed-menu");

  }
})
})
