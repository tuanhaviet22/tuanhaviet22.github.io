var thumb_video_slide = new Swiper('.thumb-video-slide', {
    spaceBetween: 10,
    slidesPerView: 2,
    navigation: {
        nextEl: '.next-thumb-video',
        prevEl: '.prev-thumb-video',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

var header_slide = new Swiper('.header-slide', {
    slidesPerView: 6,
    spaceBetween: 5,
    loop: true,
    navigation: {
        nextEl: '.h-next',
        prevEl: '.h-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 5
        },      
        768: {
            slidesPerView: 4,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 5
        }
    }
})

var sale_slide = new Swiper('.sale-slide-1', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.sale-slide-pagination-1',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.s-right-1',
        prevEl: '.s-left-1',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },      
        768: {
            slidesPerView: 3,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 5
        }
    }
})
var sale_slide_2 = new Swiper('.sale-slide-2', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.sale-slide-pagination-2',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.s-right-2',
        prevEl: '.s-left-2',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },      
        768: {
            slidesPerView: 3,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 5
        }
    }
})
var top_local_slide_1 = new Swiper('.top-local-slide-1', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.local-slide-pagination-1',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.t-right',
        prevEl: '.t-left',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },      
        768: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 5
        }
    }

})
var top_local_slide_2 = new Swiper('.top-local-slide-2', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.local-slide-pagination-2',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },      
        768: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 5
        }
    }
})
var top_local_slide_3 = new Swiper('.top-local-slide-3', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.local-slide-pagination-3',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },      
        768: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 5
        }
    }
})
var top_local_slide_4 = new Swiper('.top-local-slide-4', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.local-slide-pagination-4',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },      
        768: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 5
        }
    }
});

var store_night_slide = new Swiper('.store-night-slide', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.store-night-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.str-right',
        prevEl: '.str-left',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },      
        768: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 5
        }
    }
});


var gift_slide = new Swiper('.gift-slide', {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.gift-slide-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.g-right',
        prevEl: '.g-left',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },      
        768: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 5
        }
    }
});

var fix_services = new Swiper('.fix-services-slide', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.fix-services-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.f-right',
        prevEl: '.f-left',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },      
        768: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 5
        }
    }
});