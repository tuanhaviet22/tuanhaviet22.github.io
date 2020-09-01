$(document).ready(function () {
    // console.log("Code by tuanha.asia with 💙")
    // Fixed menu
    // var num = $('header').offset().top;
    // $(window).bind('scroll', function () {
    //     if ($(window).scrollTop() > num) {
    //         $('header').addClass('fixed');
    //     } else {
    //         $('header').removeClass('fixed');
    //     }
    // });
    var wrapper = $('.wrapper-bg');

    function wrapperAction(status){
        if(status){
            wrapper.fadeIn()
            overflowBody(1)
        }else{
            wrapper.fadeOut()
            overflowBody(0)
        }
    }
    function overflowBody(status){
        if(status){
            $('body').css('overflow','hidden')
        }else{
            $('body').css('overflow','auto')
        }
    }
    function openModal(){
        $('#modalSubscribe').modal('show');
    }
    function closeMenu(){
        $('header .menu').css('left','-33rem');
        wrapperAction(0)
    }
    function openMenu(){
        gsap.to($('.btn-menu').parent().find('.menu'),{
            duration: 0.4,
            x: 373
        })
        wrapperAction(1)
    }
    var btnShowMenu = $('.btn-menu');
    btnShowMenu.click(function(){
        openMenu();
    })

    var btnCloseMenu = $('.close-menu');
    btnCloseMenu.click(function(){
        closeMenu();
    })   
    
    wrapper.click(function(){
        wrapperAction(0);
        closeMenu();
    })

    $('.function-slider .list-btn .slide').click(function(){
        let id = $(this).data('id');                
        functionSlide.slideTo(id,600,false)
    })

    setTimeout(function(){
        $('#exampleModalCenter').modal('show')
    },30000)

    $('.close-btn').click(function(){
        $('#exampleModalCenter').modal('hide')
    })


    $('.close-modal').click(function(){
        $('#modalSubscribe').modal('hide')
    });

    $('.dkn').click(function(e){        
        $('#modalSubscribe').modal('show')
    })
    $('.goToTop').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    })


    $('.menu-icon').click(function(){
        $('header .menu').css('left',0);
        wrapperAction(1)
    })

    $('.book').click(function(e){
        e.preventDefault();
        openModal();
    });
    $('span.close').click(function () {
        closeMenu();
    })     
})