! function (e) {
    "use strict";

    function t() {
        ! function () {
            var e = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
                t = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
                a = window.navigator.userAgent.indexOf("MSIE ");
            e && edgtf.body.addClass("edgtf-chrome");
            t && edgtf.body.addClass("edgtf-safari");
            (0 < a || navigator.userAgent.match(/Trident.*rv\:11\./)) && edgtf.body.addClass("edgtf-ms-explorer")
        }(), edgtf.scroll = e(window).scrollTop(), edgtf.body.hasClass("edgtf-dark-header") && (edgtf.defaultHeaderStyle = "edgtf-dark-header"), edgtf.body.hasClass("edgtf-light-header") && (edgtf.defaultHeaderStyle = "edgtf-light-header")
    }

    function a() {}

    function d() {
        edgtf.windowWidth = e(window).width(), edgtf.windowHeight = e(window).height()
    }

    function o() {
        edgtf.scroll = e(window).scrollTop()
    }
    switch (window.edgtf = {}, edgtf.modules = {}, edgtf.scroll = 0, edgtf.window = e(window), edgtf.document = e(document), edgtf.windowWidth = e(window).width(), edgtf.windowHeight = e(window).height(), edgtf.body = e("body"), edgtf.html = e("html, body"), edgtf.htmlEl = e("html"), edgtf.menuDropdownHeightSet = !1, edgtf.defaultHeaderStyle = "", edgtf.minVideoWidth = 1500, edgtf.videoWidthOriginal = 1280, edgtf.videoHeightOriginal = 720, edgtf.videoRatio = 1.61, edgtf.edgtfOnDocumentReady = t, edgtf.edgtfOnWindowLoad = a, edgtf.edgtfOnWindowResize = d, edgtf.edgtfOnWindowScroll = o, edgtf.transitionEnd = function () {
        var e = document.createElement("transitionDetector"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                transition: "transitionend"
            };
        for (var a in t)
            if (void 0 !== e.style[a]) return t[a]
    }(), edgtf.animationEnd = function () {
        var e = document.createElement("animationDetector"),
            t = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
        for (var a in t)
            if (void 0 !== e.style[a]) return t[a]
    }(), e(document).ready(t), e(window).load(a), e(window).resize(d), e(window).scroll(o), !0) {
        case edgtf.body.hasClass("edgtf-grid-1300"):
            edgtf.boxedLayoutWidth = 1350;
            break;
        case edgtf.body.hasClass("edgtf-grid-1200"):
            edgtf.boxedLayoutWidth = 1250;
            break;
        case edgtf.body.hasClass("edgtf-grid-1000"):
            edgtf.boxedLayoutWidth = 1050;
            break;
        case edgtf.body.hasClass("edgtf-grid-800"):
            edgtf.boxedLayoutWidth = 850;
            break;
        default:
            edgtf.boxedLayoutWidth = 1150
    }
}(jQuery),
function (_) {
    "use strict";
    var e = {};

    function t() {
        var e, t;
        u().init(), -1 < navigator.appVersion.toLowerCase().indexOf("mac") && edgtf.body.hasClass("edgtf-smooth-scroll") && edgtf.body.removeClass("edgtf-smooth-scroll"), s().init(), _("#edgtf-back-to-top").on("click", function (e) {
                e.preventDefault(), edgtf.html.animate({
                    scrollTop: 0
                }, edgtf.window.scrollTop() / 5, "easeOutExpo")
            }), edgtf.window.scroll(function () {
                var e = _(this).scrollTop(),
                    t = _(this).height();
                r((0 < e ? e + t / 2 : 1) < 1e3 ? "off" : "on")
            }), l(), f(), g(), p(), (e = _(".edgtf-preload-background")).length && e.each(function () {
                var e = _(this);
                if ("" !== e.css("background-image") && "none" !== e.css("background-image")) {
                    var t = e.attr("style");
                    if (t = (t = t.match(/url\(["']?([^'")]+)['"]?\)/)) ? t[1] : "") {
                        var a = new Image;
                        a.src = t, _(a).load(function () {
                            e.removeClass("edgtf-preload-background")
                        })
                    }
                } else _(window).load(function () {
                    e.removeClass("edgtf-preload-background")
                })
            }), c(), (t = _(".edgtf-search-post-type")).length && t.each(function () {
                var e = _(this),
                    t = e.find(".edgtf-post-type-search-field"),
                    d = e.siblings(".edgtf-post-type-search-results"),
                    o = e.find(".edgtf-search-loading"),
                    i = e.find(".edgtf-search-icon");
                o.addClass("edgtf-hidden");
                var n, s = e.data("post-type");
                t.on("keyup paste", function () {
                    var a = _(this);
                    a.attr("autocomplete", "off"), o.removeClass("edgtf-hidden"), i.addClass("edgtf-hidden"), clearTimeout(n), n = setTimeout(function () {
                        var e = a.val();
                        if (e.length < 3) d.html(""), d.fadeOut(), o.addClass("edgtf-hidden"), i.removeClass("edgtf-hidden");
                        else {
                            var t = {
                                action: "aalto_edge_search_post_types",
                                term: e,
                                postType: s
                            };
                            _.ajax({
                                type: "POST",
                                data: t,
                                url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                                success: function (e) {
                                    var t = JSON.parse(e);
                                    "success" === t.status && (o.addClass("edgtf-hidden"), i.removeClass("edgtf-hidden"), d.html(t.data.html), d.fadeIn())
                                },
                                error: function (e, t, a) {
                                    console.log("Status: " + t), console.log("Error: " + a), o.addClass("edgtf-hidden"), i.removeClass("edgtf-hidden"), d.fadeOut()
                                }
                            })
                        }
                    }, 500)
                }), t.on("focusout", function () {
                    o.addClass("edgtf-hidden"), i.removeClass("edgtf-hidden"), d.fadeOut()
                })
            }),
            function () {
                if (edgtf.body.hasClass("edgtf-scroll-to-content") && !edgtf.htmlEl.hasClass("touch")) {
                    var e = _(".edgtf-slider"),
                        t = e.height(),
                        d = e.offset().top,
                        o = t - d,
                        i = t + d,
                        a = e.find(".rev_slider"),
                        n = !1,
                        s = !1,
                        r = !1,
                        l = !0,
                        f = !1,
                        g = function () {
                            function a() {
                                s = !0, _("html, body").animate({
                                    scrollTop: i
                                }, 1e3, "easeInOutQuint", function () {
                                    l = !(s = !1)
                                })
                            }
                            _(window).scrollTop() < o && (l = !1), _(window).scroll(function () {
                                edgtf.scroll < o && (r = !0, n && (l = !1))
                            }), window.addEventListener("wheel", function (e) {
                                if (edgtf.scroll < o) {
                                    var t = e.deltaY;
                                    n = 0 < t, s || l ? (l || e.preventDefault(), l && !n && r && (l = s = !1, e.preventDefault())) : n && (e.preventDefault(), a())
                                }
                                s && e.preventDefault()
                            }, {
                                passive: !1
                            }), _(document).on("mousedown", function (e) {
                                _(window).outerWidth() <= e.pageX && _(window).scrollTop() == d && (e.preventDefault(), a())
                            })
                        };
                    window.addEventListener("wheel", function (e) {
                        f || e.preventDefault()
                    }), window.addEventListener("scroll", function () {
                        f || _(window).scrollTop(d)
                    });
                    a.length ? a.bind("revolution.slide.onchange", function (e, t) {
                        f = !0, g()
                    }) : _(window).load(function () {
                        f = !0, g()
                    }), _(window).resize(function () {
                        t = e.height(), d = e.offset().top, o = t - d, i = t + d
                    })
                }
            }(),
            function () {
                if (edgtf.body.hasClass("edgtf-smooth-page-transitions")) {
                    if (edgtf.body.hasClass("edgtf-smooth-page-transitions-preloader")) {
                        var t = _("body > .edgtf-smooth-transition-loader.edgtf-mimic-ajax"),
                            a = function () {
                                var e = _(".edgtf-aalto-spinner");
                                e.length ? (e.addClass("edgtf-hide"), e.find(".edgtf-aalto-spinner-title-inner").one(edgtf.animationEnd, function () {
                                    t.addClass("edgtf-remove"), t.one(edgtf.transitionEnd, function () {
                                        t.fadeOut(300)
                                    })
                                })) : t.fadeOut(300)
                            },
                            d = function () {
                                a(), _(window).bind("pageshow", function (e) {
                                    e.originalEvent.persisted && a()
                                })
                            };
                        if (_(".edgtf-slider").length) var e = _(".edgtf-slider .rev_slider");
                        else var e = _("#edgtf-main-rev-slider .rev_slider");
                        e.length ? e.bind("revolution.slide.onchange", function (e, t) {
                            d(), console.log("rev-start")
                        }) : _(window).load(function () {
                            d()
                        })
                    }
                    if (edgtf.body.hasClass("edgtf-smooth-page-transitions-fadeout")) {
                        var o = _("a");
                        o.click(function (e) {
                            var t = _(this);
                            (t.parents(".edgtf-shopping-cart-dropdown").length || t.parent(".product-remove").length) && t.hasClass("remove") || 1 === e.which && 0 <= t.attr("href").indexOf(window.location.host) && void 0 === t.data("rel") && void 0 === t.attr("rel") && !t.hasClass("lightbox-active") && (void 0 === t.attr("target") || "_self" === t.attr("target")) && t.attr("href").split("#")[0] !== window.location.href.split("#")[0] && t.closest(".edgtf-ptf-list-showcase-meta-item").hasClass("active") && (e.preventDefault(), _(".edgtf-wrapper-inner").fadeOut(800, "easeOutExpo", function () {
                                window.location = t.attr("href")
                            }))
                        })
                    }
                }
            }()
    }

    function a() {
        S(), h().init(), _(".edgtf-parallax-holder, \t\t\t\t\t\t\t\t\t.edgtf-tl-has-parallax-scroll, \t\t\t\t\t\t\t\t\t.edgtf-bl-has-parallax-scroll, \t\t\t\t\t\t\t\t\t.edgtf-portfolio-project-info.edgtf-parallax-fx").length && !edgtf.htmlEl.hasClass("touch") && ParallaxScroll.init()
    }

    function d() {
        f()
    }

    function o(e) {
        n(e)
    }

    function i(e) {
        for (var t = [37, 38, 39, 40], a = t.length; a--;)
            if (e.keyCode === t[a]) return void n(e)
    }

    function n(e) {
        (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
    }(edgtf.modules.common = e).edgtfFluidVideo = g, e.edgtfEnableScroll = function () {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", o, !1);
        window.onmousewheel = document.onmousewheel = document.onkeydown = null
    }, e.edgtfDisableScroll = function () {
        window.addEventListener && window.addEventListener("DOMMouseScroll", o, !1);
        window.onmousewheel = document.onmousewheel = o, document.onkeydown = i
    }, e.edgtfOwlSlider = p, e.edgtfInitParallax = S, e.edgtfInitSelfHostedVideoPlayer = l, e.edgtfSelfHostedVideoSize = f, e.edgtfPrettyPhoto = c, e.edgtfStickySidebarWidget = h, e.getLoadMoreData = function (e) {
        var t = e.data(),
            a = {};
        for (var d in t) t.hasOwnProperty(d) && void 0 !== t[d] && !1 !== t[d] && (a[d] = t[d]);
        return a
    }, e.setLoadMoreAjaxData = function (e, t) {
        var a = {
            action: t
        };
        for (var d in e) e.hasOwnProperty(d) && void 0 !== e[d] && !1 !== e[d] && (a[d] = e[d]);
        return a
    }, e.edgtfOnDocumentReady = t, e.edgtfOnWindowLoad = a, e.edgtfOnWindowResize = d, _(document).ready(t), _(window).load(a), _(window).resize(d);
    var s = function () {
        var n = function (t) {
                _(".edgtf-main-menu, .edgtf-mobile-nav, .edgtf-fullscreen-menu").each(function () {
                    var e = _(this);
                    t.parents(e).length && (e.find(".edgtf-active-item").removeClass("edgtf-active-item"), t.parent().addClass("edgtf-active-item"), e.find("a").removeClass("current"), t.addClass("current"))
                })
            },
            d = function (e) {
                var t, a = _(".edgtf-main-menu a, .edgtf-mobile-nav a, .edgtf-fullscreen-menu a"),
                    d = e,
                    o = "" !== d ? _('[data-edgtf-anchor="' + d + '"]') : "";
                if ("" !== d && 0 < o.length) {
                    var i = o.offset().top;
                    return t = i - s(i) - edgtfGlobalVars.vars.edgtfAddForAdminBar, a.length && a.each(function () {
                        var e = _(this); - 1 < e.attr("href").indexOf(d) && n(e)
                    }), edgtf.html.stop().animate({
                        scrollTop: Math.round(t)
                    }, 1e3, function () {
                        history.pushState && history.pushState(null, "", "#" + d)
                    }), !1
                }
            },
            s = function (e) {
                "edgtf-sticky-header-on-scroll-down-up" === edgtf.modules.stickyHeader.behaviour && (edgtf.modules.stickyHeader.isStickyVisible = e > edgtf.modules.header.stickyAppearAmount), "edgtf-sticky-header-on-scroll-up" === edgtf.modules.stickyHeader.behaviour && e > edgtf.scroll && (edgtf.modules.stickyHeader.isStickyVisible = !1);
                var t = edgtf.modules.stickyHeader.isStickyVisible ? edgtfGlobalVars.vars.edgtfStickyHeaderTransparencyHeight : edgtfPerPageVars.vars.edgtfHeaderTransparencyHeight;
                return edgtf.windowWidth < 1025 && (t = 0), t
            };
        return {
            init: function () {
                var t, e, a;
                _("[data-edgtf-anchor]").length && (edgtf.document.on("click", ".edgtf-main-menu a, .edgtf-fullscreen-menu a, .edgtf-btn, .edgtf-anchor, .edgtf-mobile-nav a", function () {
                    var e, t = _(this),
                        a = t.prop("hash").split("#")[1],
                        d = "" !== a ? _('[data-edgtf-anchor="' + a + '"]') : "";
                    if ("" !== a && 0 < d.length) {
                        var o = d.offset().top;
                        return e = o - s(o) - edgtfGlobalVars.vars.edgtfAddForAdminBar, n(t), edgtf.html.stop().animate({
                            scrollTop: Math.round(e)
                        }, 1e3, function () {
                            history.pushState && history.pushState(null, "", "#" + a)
                        }), !1
                    }
                }), e = _("[data-edgtf-anchor]"), "/" !== (a = window.location.href.split("#")[0]).substr(-1) && (a += "/"), e.waypoint(function (e) {
                    "down" === e && (t = 0 < _(this.element).length ? _(this.element).data("edgtf-anchor") : _(this).data("edgtf-anchor"), n(_("a[href='" + a + "#" + t + "']")))
                }, {
                    offset: "50%"
                }), e.waypoint(function (e) {
                    "up" === e && (t = 0 < _(this.element).length ? _(this.element).data("edgtf-anchor") : _(this).data("edgtf-anchor"), n(_("a[href='" + a + "#" + t + "']")))
                }, {
                    offset: function () {
                        return -(_(this.element).outerHeight() - 150)
                    }
                }), _(window).load(function () {
                    var e;
                    "" !== (e = window.location.hash.split("#")[1]) && 0 < _('[data-edgtf-anchor="' + e + '"]').length && d(e)
                }))
            }
        }
    };

    function r(e) {
        var t = _("#edgtf-back-to-top");
        t.removeClass("off on"), "on" === e ? t.addClass("on") : t.addClass("off")
    }

    function l() {
        var e = _(".edgtf-self-hosted-video");
        e.length && e.mediaelementplayer({
            audioWidth: "100%"
        })
    }

    function f() {
        var e = _(".edgtf-self-hosted-video-holder .edgtf-video-wrap");
        e.length && e.each(function () {
            var e = _(this),
                t = e.closest(".edgtf-self-hosted-video-holder").outerWidth(),
                a = t / edgtf.videoRatio;
            navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (e.parent().width(t), e.parent().height(a)), e.width(t), e.height(a), e.find("video, .mejs-overlay, .mejs-poster").width(t), e.find("video, .mejs-overlay, .mejs-poster").height(a)
        })
    }

    function g() {
        fluidvids.init({
            selector: ["iframe"],
            players: ["www.youtube.com", "player.vimeo.com"]
        })
    }

    function c() {
        _("a[data-rel^='prettyPhoto']").prettyPhoto({
            hook: "data-rel",
            animation_speed: "normal",
            slideshow: !1,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            horizontal_padding: 0,
            default_width: 960,
            default_height: 540,
            counter_separator_label: "/",
            theme: "pp_default",
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            overlay_gallery: !1,
            keyboard_shortcuts: !0,
            deeplinking: !1,
            custom_markup: "",
            social_tools: !1,
            markup: '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="Expand the image">Expand</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="fa fa-angle-right"></span></a>                                             <a class="pp_previous" href="#"><span class="fa fa-angle-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">Previous</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">Next</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">Close</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>'
        })
    }
    var u = function () {
        var e = _(".edgtf-icon-has-hover");
        return {
            init: function () {
                e.length && e.each(function () {
                    ! function (e) {
                        if (void 0 !== e.data("hover-color")) {
                            var t = function (e) {
                                    e.data.icon.css("color", e.data.color)
                                },
                                a = e.data("hover-color"),
                                d = e.css("color");
                            "" !== a && (e.on("mouseenter", {
                                icon: e,
                                color: a
                            }, t), e.on("mouseleave", {
                                icon: e,
                                color: d
                            }, t))
                        }
                    }(_(this))
                })
            }
        }
    };

    function S() {
        var e = _(".edgtf-parallax-row-holder");
        e.length && e.each(function () {
            var e = _(this),
                t = e.data("parallax-bg-image"),
                a = .4 * e.data("parallax-bg-speed"),
                d = 0;
            void 0 !== e.data("parallax-bg-height") && !1 !== e.data("parallax-bg-height") && (d = parseInt(e.data("parallax-bg-height"))), e.css({
                "background-image": "url(" + t + ")"
            }), 0 < d && e.css({
                "min-height": d + "px",
                height: d + "px"
            }), e.parallax("50%", a)
        })
    }

    function h() {
        var e = _(".edgtf-widget-sticky-sidebar"),
            t = _(".edgtf-page-header"),
            c = t.length ? t.outerHeight() : 0,
            n = 0,
            s = 0,
            r = 0,
            l = 0,
            u = [];

        function a() {
            u.length && _.each(u, function (e) {
                u[e].object;
                var t = u[e].offset,
                    a = u[e].position,
                    d = u[e].height,
                    o = u[e].width,
                    i = u[e].sidebarHolder,
                    n = u[e].sidebarHolderHeight;
                if (edgtf.body.hasClass("edgtf-fixed-on-scroll")) {
                    var s = _(".edgtf-fixed-wrapper.fixed");
                    s.length && (c = s.outerHeight() + edgtfGlobalVars.vars.edgtfAddForAdminBar)
                } else edgtf.body.hasClass("edgtf-no-behavior") && (c = edgtfGlobalVars.vars.edgtfAddForAdminBar);
                if (1024 < edgtf.windowWidth && i.length) {
                    var r = -(a - c),
                        l = d - a - 40,
                        f = n + t - c - a - edgtfGlobalVars.vars.edgtfTopBarHeight;
                    if (edgtf.scroll >= t - c && d < n)
                        if (i.hasClass("edgtf-sticky-sidebar-appeared") ? i.css({
                                top: r + "px"
                            }) : i.addClass("edgtf-sticky-sidebar-appeared").css({
                                position: "fixed",
                                top: r + "px",
                                width: o,
                                "margin-top": "-10px"
                            }).animate({
                                "margin-top": "0"
                            }, 200), edgtf.scroll + l >= f) {
                            var g = n - l + r - c;
                            i.css({
                                position: "absolute",
                                top: g + "px"
                            })
                        } else i.hasClass("edgtf-sticky-sidebar-appeared") && i.css({
                            position: "fixed",
                            top: r + "px"
                        });
                    else i.removeClass("edgtf-sticky-sidebar-appeared").css({
                        position: "relative",
                        top: "0",
                        width: "auto"
                    })
                } else i.removeClass("edgtf-sticky-sidebar-appeared").css({
                    position: "relative",
                    top: "0",
                    width: "auto"
                })
            })
        }
        return {
            init: function () {
                e.length && e.each(function () {
                    var e = _(this),
                        t = e.parents("aside.edgtf-sidebar"),
                        a = e.parents(".wpb_widgetised_column"),
                        d = "",
                        o = 0;
                    if (n = e.offset().top, s = e.position().top, l = r = 0, t.length) {
                        r = t.outerHeight(), l = t.outerWidth(), o = (d = t).parent().parent().outerHeight();
                        var i = t.parent().parent().find(".edgtf-blog-holder");
                        i.length && (o -= parseInt(i.css("marginBottom")))
                    } else a.length && (r = a.outerHeight(), l = a.outerWidth(), o = (d = a).parents(".vc_row").outerHeight());
                    u.push({
                        object: e,
                        offset: n,
                        position: s,
                        height: r,
                        width: l,
                        sidebarHolder: d,
                        sidebarHolderHeight: o
                    })
                }), a(), _(window).scroll(function () {
                    a()
                })
            },
            reInit: a
        }
    }

    function p() {
        var e = _(".edgtf-owl-slider");
        e.length && e.each(function () {
            var t = _(this),
                e = t.children().length,
                a = 1,
                d = !0,
                o = !0,
                i = !1,
                n = 5e3,
                s = 600,
                r = 0,
                l = 0,
                f = 0,
                g = 0,
                c = !1,
                u = !1,
                h = !1,
                p = !1,
                m = !1,
                v = !0,
                y = !1,
                b = !!t.hasClass("edgtf-pl-is-slider"),
                w = b ? t.parent() : t;
            void 0 === t.data("number-of-items") || !1 === t.data("number-of-items") || b || (a = t.data("number-of-items")), void 0 !== w.data("number-of-columns") && !1 !== w.data("number-of-columns") && b && (a = w.data("number-of-columns")), "no" === w.data("enable-loop") && (d = !1), "no" === w.data("enable-autoplay") && (o = !1), "yes" === w.data("enable-autoplay-hover-pause") && (i = !0), void 0 !== w.data("slider-speed") && !1 !== w.data("slider-speed") && (n = w.data("slider-speed")), void 0 !== w.data("slider-speed-animation") && !1 !== w.data("slider-speed-animation") && (s = w.data("slider-speed-animation")), void 0 !== w.data("slider-margin") && !1 !== w.data("slider-margin") ? r = "no" === w.data("slider-margin") ? 0 : w.data("slider-margin") : t.parent().hasClass("edgtf-huge-space") ? r = 60 : t.parent().hasClass("edgtf-large-space") ? r = 50 : t.parent().hasClass("edgtf-medium-space") ? r = 40 : t.parent().hasClass("edgtf-normal-space") ? r = 30 : t.parent().hasClass("edgtf-small-space") ? r = 20 : t.parent().hasClass("edgtf-tiny-space") && (r = 10), "yes" === w.data("slider-padding") && (c = !0, g = parseInt(.28 * t.outerWidth()), r = 50), "yes" === w.data("enable-center") && (u = !0), "yes" === w.data("enable-auto-width") && (h = !0), void 0 !== w.data("slider-animate-in") && !1 !== w.data("slider-animate-in") && (p = w.data("slider-animate-in")), void 0 !== w.data("slider-animate-out") && !1 !== w.data("slider-animate-out") && (m = w.data("slider-animate-out")), "no" === w.data("enable-navigation") && (v = !1), "yes" === w.data("enable-pagination") && (y = !0), v && y && t.addClass("edgtf-slider-has-both-nav"), e <= 1 && (y = v = o = d = !1);
            var C = 2,
                x = 3,
                k = a;
            a < 3 && (x = C = a), 4 < a && (k = 4), (c || 30 < r) && (l = 20, f = 30), 0 < r && r <= 30 && (f = l = r), t.owlCarousel({
                items: a,
                loop: d,
                autoplay: o,
                autoplayHoverPause: i,
                autoplayTimeout: n,
                smartSpeed: s,
                margin: r,
                stagePadding: g,
                center: u,
                autoWidth: h,
                animateIn: p,
                animateOut: m,
                dots: y,
                nav: v,
                navText: ['<span class="edgtf-prev-icon icon-arrows-left"></span>', '<span class="edgtf-next-icon icon-arrows-right"></span>'],
                responsive: {
                    0: {
                        items: 1,
                        margin: l,
                        stagePadding: 0,
                        center: !1,
                        autoWidth: !1
                    },
                    681: {
                        items: C,
                        margin: f
                    },
                    769: {
                        items: x,
                        margin: f
                    },
                    1025: {
                        items: k
                    },
                    1281: {
                        items: a
                    }
                },
                onInitialize: function () {
                    t.css("visibility", "visible"), S()
                },
                onDrag: function (e) {
                    edgtf.body.hasClass("edgtf-smooth-page-transitions-fadeout") && (0 < e.isTrigger && t.addClass("edgtf-slider-is-moving"))
                },
                onDragged: function () {
                    edgtf.body.hasClass("edgtf-smooth-page-transitions-fadeout") && t.hasClass("edgtf-slider-is-moving") && setTimeout(function () {
                        t.removeClass("edgtf-slider-is-moving")
                    }, 500)
                }
            })
        })
    }
}(jQuery),
function (o) {
    "use strict";

    function e() {
        o(document).on("click", ".edgtf-like", function () {
            var e, t = o(this),
                a = t.attr("id");
            if (t.hasClass("liked")) return !1;
            void 0 !== t.data("type") && (e = t.data("type"));
            var d = {
                action: "aalto_edge_like",
                likes_id: a,
                type: e
            };
            return o.post(edgtfGlobalVars.vars.edgtfAjaxUrl, d, function (e) {
                t.html(e).addClass("liked").attr("title", "You already like this!")
            }), !1
        })
    }
    o(document).ready(e)
}(jQuery),
function (u) {
    "use strict";
    var e = {};

    function t() {
        var e, t;
        (e = u(".edgtf-blog-list-holder.edgtf-bl-masonry")).length && e.each(function () {
            var e = u(this),
                t = e.find(".edgtf-blog-list");
            t.waitForImages(function () {
                t.isotope({
                    layoutMode: "packery",
                    itemSelector: ".edgtf-bl-item",
                    percentPosition: !0,
                    packery: {
                        gutter: ".edgtf-bl-grid-gutter",
                        columnWidth: ".edgtf-bl-grid-sizer"
                    }
                }), t.css("opacity", "1")
            })
        }), (t = u(".edgtf-bl-alternating.edgtf-show-info-on-appear .edgtf-bl-item")).length && !edgtf.htmlEl.hasClass("touch") && t.appear(function () {
            var e = u(this);
            setTimeout(function () {
                e.addClass("edgtf-appear")
            }, 240 * parseInt(e.index() % 2 ? 1 : e.index()))
        })
    }

    function a() {
        o().init()
    }

    function d() {
        o().scroll()
    }

    function o() {
        var e = u(".edgtf-blog-list-holder"),
            o = function (e) {
                var t = e.outerHeight() + e.offset().top - edgtfGlobalVars.vars.edgtfAddForAdminBar;
                !e.hasClass("edgtf-bl-pag-infinite-scroll-started") && edgtf.scroll + edgtf.windowHeight > t && i(e)
            },
            i = function (a, e) {
                var d, o, i = a.find(".edgtf-blog-list");
                void 0 !== a.data("max-num-pages") && !1 !== a.data("max-num-pages") && (o = a.data("max-num-pages")), a.hasClass("edgtf-bl-pag-standard-blog-list") && a.data("next-page", e), a.hasClass("edgtf-bl-pag-infinite-scroll") && a.addClass("edgtf-bl-pag-infinite-scroll-started");
                var t = edgtf.modules.common.getLoadMoreData(a),
                    n = a.find(".edgtf-blog-pag-loading");
                if ((d = t.nextPage) <= o) {
                    a.hasClass("edgtf-bl-pag-standard-blog-list") ? (n.addClass("edgtf-showing edgtf-standard-pag-trigger"), a.addClass("edgtf-bl-pag-standard-blog-list-animate")) : n.addClass("edgtf-showing");
                    var s = edgtf.modules.common.setLoadMoreAjaxData(t, "aalto_edge_blog_shortcode_load_more");
                    u.ajax({
                        type: "POST",
                        data: s,
                        url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                        success: function (e) {
                            a.hasClass("edgtf-bl-pag-standard-blog-list") || d++, a.data("next-page", d);
                            var t = u.parseJSON(e).html;
                            a.hasClass("edgtf-bl-pag-standard-blog-list") ? (r(a, o, d), a.waitForImages(function () {
                                a.hasClass("edgtf-bl-masonry") ? l(a, i, n, t) : (f(a, i, n, t), "function" == typeof edgtf.modules.common.edgtfStickySidebarWidget && edgtf.modules.common.edgtfStickySidebarWidget().reInit())
                            })) : a.waitForImages(function () {
                                a.hasClass("edgtf-bl-masonry") ? g(i, n, t) : (c(i, n, t), "function" == typeof edgtf.modules.common.edgtfStickySidebarWidget && edgtf.modules.common.edgtfStickySidebarWidget().reInit())
                            }), a.hasClass("edgtf-bl-pag-infinite-scroll-started") && a.removeClass("edgtf-bl-pag-infinite-scroll-started")
                        }
                    })
                }
                d === o && a.find(".edgtf-blog-pag-load-more").hide()
            },
            r = function (e, t, a) {
                var d = e.find(".edgtf-bl-standard-pagination"),
                    o = d.find("li.edgtf-bl-pag-number"),
                    i = d.find("li.edgtf-bl-pag-prev a"),
                    n = d.find("li.edgtf-bl-pag-next a");
                o.removeClass("edgtf-bl-pag-active"), o.eq(a - 1).addClass("edgtf-bl-pag-active"), i.data("paged", a - 1), n.data("paged", a + 1), 1 < a ? i.css({
                    opacity: "1"
                }) : i.css({
                    opacity: "0"
                }), a === t ? n.css({
                    opacity: "0"
                }) : n.css({
                    opacity: "1"
                })
            },
            l = function (e, t, a, d) {
                t.html(d).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), a.removeClass("edgtf-showing edgtf-standard-pag-trigger"), e.removeClass("edgtf-bl-pag-standard-blog-list-animate"), setTimeout(function () {
                    t.isotope("layout"), "function" == typeof edgtf.modules.common.edgtfStickySidebarWidget && edgtf.modules.common.edgtfStickySidebarWidget().reInit()
                }, 600)
            },
            f = function (e, t, a, d) {
                a.removeClass("edgtf-showing edgtf-standard-pag-trigger"), e.removeClass("edgtf-bl-pag-standard-blog-list-animate"), t.html(d)
            },
            g = function (e, t, a) {
                e.append(a).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), t.removeClass("edgtf-showing"), setTimeout(function () {
                    e.isotope("layout"), "function" == typeof edgtf.modules.common.edgtfStickySidebarWidget && edgtf.modules.common.edgtfStickySidebarWidget().reInit()
                }, 600)
            },
            c = function (e, t, a) {
                t.removeClass("edgtf-showing"), e.append(a)
            };
        return {
            init: function () {
                e.length && e.each(function () {
                    var d, e, t, a = u(this);
                    a.hasClass("edgtf-bl-pag-standard-blog-list") && (e = (d = a).find(".edgtf-bl-standard-pagination li")).length && e.each(function () {
                        var t = u(this).children("a"),
                            a = 1;
                        t.on("click", function (e) {
                            e.preventDefault(), e.stopPropagation(), void 0 !== t.data("paged") && !1 !== t.data("paged") && (a = t.data("paged")), i(d, a)
                        })
                    }), a.hasClass("edgtf-bl-pag-load-more") && (t = a).find(".edgtf-blog-pag-load-more a").on("click", function (e) {
                        e.preventDefault(), e.stopPropagation(), i(t)
                    }), a.hasClass("edgtf-bl-pag-infinite-scroll") && o(a)
                })
            },
            scroll: function () {
                e.length && e.each(function () {
                    var e = u(this);
                    e.hasClass("edgtf-bl-pag-infinite-scroll") && o(e)
                })
            }
        }
    }(edgtf.modules.blogListSC = e).edgtfOnDocumentReady = t, e.edgtfOnWindowLoad = a, e.edgtfOnWindowScroll = d, u(document).ready(t), u(window).load(a), u(window).scroll(d)
}(jQuery),
function (d) {
    "use strict";
    var e = {};

    function t() {
        a(), d(document.body).on("blog_list_load_more_trigger", function () {
            a()
        })
    }

    function a() {
        var e, t = d(".edgtf-blog-holder.edgtf-blog-chequered"),
            a = t.children(".edgtf-blog-holder-inner");
        t.length && (e = a.find(".edgtf-blog-masonry-grid-sizer").outerWidth(), a.children("article").css({
            height: e + "px"
        }), a.isotope("layout", function () {
            a.css("opacity", "1")
        }))
    }(edgtf.modules.blogChequered = e).edgtfOnWindowLoad = t, d(window).load(t)
}(jQuery),
function (o) {
    "use strict";
    var e = {};

    function t() {
        i(), o(document.body).on("blog_list_load_more_trigger", function () {
            n()
        })
    }

    function a() {
        n()
    }

    function d() {
        i()
    }

    function i() {
        var e = o(".edgtf-blog-holder.edgtf-blog-masonry-gallery");
        e.length && e.each(function () {
            var e = o(this).children(".edgtf-blog-holder-inner"),
                t = e.find("article"),
                a = 1.25 * e.find(".edgtf-blog-masonry-grid-sizer").width();
            t.css({
                height: a + "px"
            }), e.isotope("layout", function () {}), n()
        })
    }

    function n() {
        var e = o(".edgtf-blog-holder.edgtf-blog-masonry-gallery");
        e.length && e.each(function () {
            var e = o(this),
                t = e.find("article"),
                a = e.find(".edgtf-blog-pagination-holder"),
                d = 0;
            t.each(function () {
                var e = o(this);
                setTimeout(function () {
                    e.appear(function () {
                        7 == ++d && (d = 0), setTimeout(function () {
                            e.addClass("edgtf-appeared")
                        }, 200 * d)
                    }, {
                        accX: 0,
                        accY: 0
                    })
                }, 150)
            }), a.appear(function () {
                a.addClass("edgtf-appeared")
            }, {
                accX: 0,
                accY: edgtfGlobalVars.vars.edgtfElementAppearAmount
            })
        })
    }(edgtf.modules.blogMasonryGallery = e).edgtfOnDocumentReady = t, e.edgtfOnWindowLoad = a, e.edgtfOnWindowResize = d, o(document).ready(t), o(window).load(a), o(window).resize(d)
}(jQuery),
function (d) {
    "use strict";
    var e = {};

    function t() {
        a(), d(document.body).on("blog_list_load_more_trigger", function () {
            a()
        })
    }

    function a() {
        var e = d(".edgtf-blog-holder.edgtf-blog-narrow");
        e.length && e.each(function () {
            var e = d(this),
                t = e.find("article"),
                a = e.find(".edgtf-blog-pagination-holder");
            t.each(function () {
                var e = d(this);
                e.appear(function () {
                    e.addClass("edgtf-appeared")
                }, {
                    accX: 0,
                    accY: edgtfGlobalVars.vars.edgtfElementAppearAmount
                })
            }), a.appear(function () {
                a.addClass("edgtf-appeared")
            }, {
                accX: 0,
                accY: edgtfGlobalVars.vars.edgtfElementAppearAmount
            })
        })
    }(edgtf.modules.blogNarrow = e).edgtfOnWindowLoad = t, d(window).load(t)
}(jQuery),
function (l) {
    "use strict";
    var e = {};

    function t() {
        f(), i()
    }

    function a() {
        n().init()
    }

    function d() {
        i()
    }

    function o() {
        n().scroll()
    }

    function f() {
        l("audio.edgtf-blog-audio").mediaelementplayer({
            audioWidth: "100%"
        })
    }

    function g(e, t) {
        if (t.hasClass("edgtf-masonry-images-fixed")) {
            var a = parseInt(t.find("article").css("padding-left")),
                d = t.find(".edgtf-post-size-default"),
                o = t.find(".edgtf-post-size-large-width"),
                i = t.find(".edgtf-post-size-large-height"),
                n = t.find(".edgtf-post-size-large-width-height");
            680 < edgtf.windowWidth ? (d.css("height", e - 2 * a), i.css("height", Math.round(2 * e) - 2 * a), n.css("height", Math.round(2 * e) - 2 * a), o.css("height", e - 2 * a)) : (d.css("height", e), i.css("height", e), n.css("height", e), o.css("height", Math.round(e / 2)))
        }
    }

    function i() {
        var e = l(".edgtf-blog-holder.edgtf-blog-type-masonry");
        e.length && e.each(function () {
            var e = l(this),
                t = e.children(".edgtf-blog-holder-inner");
            g(e.find(".edgtf-blog-masonry-grid-sizer").width(), e), t.waitForImages(function () {
                t.isotope({
                    layoutMode: "packery",
                    itemSelector: "article",
                    percentPosition: !0,
                    packery: {
                        gutter: ".edgtf-blog-masonry-grid-gutter",
                        columnWidth: ".edgtf-blog-masonry-grid-sizer"
                    }
                }), t.css("opacity", "1"), setTimeout(function () {
                    t.isotope("layout")
                }, 800)
            })
        })
    }

    function n() {
        var e = l(".edgtf-blog-holder"),
            a = function (e) {
                var t = e.outerHeight() + e.offset().top - edgtfGlobalVars.vars.edgtfAddForAdminBar;
                !e.hasClass("edgtf-blog-pagination-infinite-scroll-started") && edgtf.scroll + edgtf.windowHeight > t && d(e)
            },
            d = function (a) {
                var d, e, o = a.children(".edgtf-blog-holder-inner");
                void 0 !== a.data("max-num-pages") && !1 !== a.data("max-num-pages") && (e = a.data("max-num-pages")), a.hasClass("edgtf-blog-pagination-infinite-scroll") && a.addClass("edgtf-blog-pagination-infinite-scroll-started");
                var t = edgtf.modules.common.getLoadMoreData(a),
                    i = a.find(".edgtf-blog-pag-loading");
                if ((d = t.nextPage) <= e) {
                    i.addClass("edgtf-showing");
                    var n = edgtf.modules.common.setLoadMoreAjaxData(t, "aalto_edge_blog_load_more");
                    l.ajax({
                        type: "POST",
                        data: n,
                        url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                        success: function (e) {
                            d++, a.data("next-page", d);
                            var t = l.parseJSON(e).html;
                            a.waitForImages(function () {
                                a.hasClass("edgtf-blog-type-masonry") ? (s(o, i, t), g(o.find(".edgtf-blog-masonry-grid-sizer").width(), a)) : r(o, i, t), setTimeout(function () {
                                    f(), edgtf.modules.common.edgtfOwlSlider(), edgtf.modules.common.edgtfFluidVideo(), edgtf.modules.common.edgtfInitSelfHostedVideoPlayer(), edgtf.modules.common.edgtfSelfHostedVideoSize(), "function" == typeof edgtf.modules.common.edgtfStickySidebarWidget && edgtf.modules.common.edgtfStickySidebarWidget().reInit(), l(document.body).trigger("blog_list_load_more_trigger")
                                }, 400)
                            }), a.hasClass("edgtf-blog-pagination-infinite-scroll-started") && a.removeClass("edgtf-blog-pagination-infinite-scroll-started")
                        }
                    })
                }
                d === e && a.find(".edgtf-blog-pag-load-more").hide()
            },
            s = function (e, t, a) {
                e.append(a).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), t.removeClass("edgtf-showing"), setTimeout(function () {
                    e.isotope("layout")
                }, 600)
            },
            r = function (e, t, a) {
                t.removeClass("edgtf-showing"), e.append(a)
            };
        return {
            init: function () {
                e.length && e.each(function () {
                    var t, e = l(this);
                    e.hasClass("edgtf-blog-pagination-load-more") && (t = e).find(".edgtf-blog-pag-load-more a").on("click", function (e) {
                        e.preventDefault(), e.stopPropagation(), d(t)
                    }), e.hasClass("edgtf-blog-pagination-infinite-scroll") && a(e)
                })
            },
            scroll: function () {
                e.length && e.each(function () {
                    var e = l(this);
                    e.hasClass("edgtf-blog-pagination-infinite-scroll") && a(e)
                })
            }
        }
    }(edgtf.modules.blog = e).edgtfOnDocumentReady = t, e.edgtfOnWindowLoad = a, e.edgtfOnWindowResize = d, e.edgtfOnWindowScroll = o, l(document).ready(t), l(window).load(a), l(window).resize(d), l(window).scroll(o)
}(jQuery),
function (f) {
    "use strict";
    var e = {};

    function t() {
        ! function () {
            var t = f("a.edgtf-fullscreen-menu-opener");
            if (t.length) {
                var a, o = f(".edgtf-fullscreen-menu-holder-outer"),
                    e = !1,
                    d = !1,
                    i = f(".edgtf-fullscreen-above-menu-widget-holder"),
                    n = f(".edgtf-fullscreen-below-menu-widget-holder"),
                    s = f(".edgtf-fullscreen-menu-holder-outer nav > ul > li > a"),
                    r = f(".edgtf-fullscreen-menu > ul li.has_sub > a"),
                    l = f(".edgtf-fullscreen-menu ul li:not(.has_sub) a");
                o.height(edgtf.windowHeight).niceScroll({
                    scrollspeed: 30,
                    mousescrollstep: 20,
                    cursorwidth: 0,
                    cursorborder: 0,
                    cursorborderradius: 0,
                    cursorcolor: "transparent",
                    autohidemode: !1,
                    horizrailenabled: !1
                }), f(window).resize(function () {
                    o.height(edgtf.windowHeight)
                }), edgtf.body.hasClass("edgtf-fade-push-text-right") ? (a = "edgtf-push-nav-right", e = !0) : edgtf.body.hasClass("edgtf-fade-push-text-top") && (a = "edgtf-push-text-top", d = !0), (e || d) && (i.length && i.children().css({
                    "-webkit-animation-delay": "0ms",
                    "-moz-animation-delay": "0ms",
                    "animation-delay": "0ms"
                }), s.each(function (e) {
                    f(this).css({
                        "-webkit-animation-delay": 70 * (e + 1) + "ms",
                        "-moz-animation-delay": 70 * (e + 1) + "ms",
                        "animation-delay": 70 * (e + 1) + "ms"
                    })
                }), n.length && n.children().css({
                    "-webkit-animation-delay": 70 * (s.length + 1) + "ms",
                    "-moz-animation-delay": 70 * (s.length + 1) + "ms",
                    "animation-delay": 70 * (s.length + 1) + "ms"
                })), t.on("click", function (e) {
                    e.preventDefault(), t.hasClass("edgtf-fm-opened") ? (t.removeClass("edgtf-fm-opened"), edgtf.body.removeClass("edgtf-fullscreen-menu-opened edgtf-fullscreen-fade-in").addClass("edgtf-fullscreen-fade-out"), edgtf.body.addClass(a), edgtf.modules.common.edgtfEnableScroll(), f("nav.edgtf-fullscreen-menu ul.sub_menu").slideUp(200, function () {
                        f("nav.popup_menu").getNiceScroll().resize()
                    })) : (t.addClass("edgtf-fm-opened"), edgtf.body.removeClass("edgtf-fullscreen-fade-out").addClass("edgtf-fullscreen-menu-opened edgtf-fullscreen-fade-in"), edgtf.body.removeClass(a), edgtf.modules.common.edgtfDisableScroll(), f(document).keyup(function (e) {
                        27 == e.keyCode && (t.removeClass("edgtf-fm-opened"), edgtf.body.removeClass("edgtf-fullscreen-menu-opened edgtf-fullscreen-fade-in").addClass("edgtf-fullscreen-fade-out"), edgtf.body.addClass(a), edgtf.modules.common.edgtfEnableScroll(), f("nav.edgtf-fullscreen-menu ul.sub_menu").slideUp(200, function () {
                            f("nav.popup_menu").getNiceScroll().resize()
                        }))
                    }))
                }), r.on("tap click", function (e) {
                    e.preventDefault();
                    var t = f(this),
                        a = t.parent();
                    if (a.hasClass("has_sub")) {
                        var d = a.find("> ul.sub_menu");
                        d.is(":visible") ? (d.slideUp(450, "easeInOutQuint", function () {
                            o.getNiceScroll().resize()
                        }), a.removeClass("open_sub")) : (a.addClass("open_sub"), 1 === r.length ? a.removeClass("open_sub").find(".sub_menu").slideUp(400, "easeInOutQuint", function () {
                            o.getNiceScroll().resize(), d.slideDown(400, "easeInOutQuint", function () {
                                o.getNiceScroll().resize()
                            })
                        }) : a.siblings().removeClass("open_sub").find(".sub_menu").slideUp(400, "easeInOutQuint", function () {
                            o.getNiceScroll().resize(), d.slideDown(400, "easeInOutQuint", function () {
                                o.getNiceScroll().resize()
                            })
                        }))
                    }
                    return !1
                }), l.click(function (e) {
                    if ("http://#" === f(this).attr("href") || "#" === f(this).attr("href")) return !1;
                    1 == e.which && (t.removeClass("edgtf-fm-opened"), edgtf.body.removeClass("edgtf-fullscreen-menu-opened"), edgtf.body.removeClass("edgtf-fullscreen-fade-in").addClass("edgtf-fullscreen-fade-out"), edgtf.body.addClass(a), f("nav.edgtf-fullscreen-menu ul.sub_menu").slideUp(200, function () {
                        f("nav.popup_menu").getNiceScroll().resize()
                    }), edgtf.modules.common.edgtfEnableScroll())
                })
            }
        }()
    }(edgtf.modules.headerMinimal = e).edgtfOnDocumentReady = t, f(document).ready(t)
}(jQuery),
function (s) {
    "use strict";
    var e = {};

    function t() {
        a().init()
    }(edgtf.modules.headerVertical = e).edgtfOnDocumentReady = t, s(document).ready(t);
    var a = function () {
        var o = s(".edgtf-vertical-menu-area"),
            n = function () {
                t() && o.getNiceScroll().resize()
            },
            t = function () {
                return o.hasClass("edgtf-with-scroll")
            },
            a = function () {
                var e = s(".edgtf-vertical-area-bottom-logo"),
                    t = o.find(".edgtf-vertical-area-opener"),
                    a = 0;

                function d() {
                    o.removeClass("active"), e.length && e.removeClass("active")
                }
                t.on("click tap", function () {
                    o.hasClass("active") ? d() : function () {
                        o.addClass("active"), e.length && e.addClass("active");
                        a = s(window).scrollTop()
                    }()
                }), s(window).scroll(function () {
                    400 < Math.abs(s(window).scrollTop() - a) && d()
                })
            };
        return {
            init: function () {
                var i, e;
                o.length && (e = o.find(".edgtf-vertical-menu"), (i = e.find("ul li.menu-item-has-children")).each(function () {
                    var t = s(this).find(" > .second, > ul"),
                        a = this,
                        d = s(this).find("> a"),
                        o = "fast";
                    d.on("click tap", function (e) {
                        e.preventDefault(), e.stopPropagation(), t.is(":visible") ? (s(a).removeClass("open"), t.slideUp(o, function () {
                            n()
                        })) : (d.parent().parent().children().hasClass("open") && d.parent().parent().parent().hasClass("edgtf-vertical-menu") ? (s(this).parent().parent().children().removeClass("open"), s(this).parent().parent().children().find(" > .second").slideUp(o)) : (s(this).parents("li").hasClass("open") || (i.removeClass("open"), i.find(" > .second, > ul").slideUp(o)), s(this).parent().parent().children().hasClass("open") && (s(this).parent().parent().children().removeClass("open"), s(this).parent().parent().children().find(" > .second, > ul").slideUp(o))), s(a).addClass("open"), t.slideDown("slow", function () {
                            n()
                        }))
                    })
                }), t() && o.niceScroll({
                    scrollspeed: 60,
                    mousescrollstep: 40,
                    cursorwidth: 0,
                    cursorborder: 0,
                    cursorborderradius: 0,
                    cursorcolor: "transparent",
                    autohidemode: !1,
                    horizrailenabled: !1
                }), edgtf.body.hasClass("edgtf-header-vertical-closed") && a())
            }
        }
    }
}(jQuery),
function (n) {
    "use strict";
    var e = {};

    function t() {
        ! function () {
            var t = n(".edgtf-mobile-header .edgtf-mobile-menu-opener"),
                a = n(".edgtf-mobile-header .edgtf-mobile-nav"),
                e = n(".edgtf-mobile-nav .mobile_arrow, .edgtf-mobile-nav h6, .edgtf-mobile-nav a.edgtf-mobile-no-link");
            t.length && a.length && t.on("tap click", function (e) {
                e.stopPropagation(), e.preventDefault(), a.is(":visible") ? (a.slideUp(450, "easeInOutQuint"), t.removeClass("edgtf-mobile-menu-opened")) : (a.slideDown(450, "easeInOutQuint"), t.addClass("edgtf-mobile-menu-opened"))
            });
            e.length && e.each(function () {
                n(this).on("tap click", function (e) {
                    var t = n(this),
                        a = t.parent("li"),
                        d = a.siblings(".menu-item-has-children");
                    if (a.hasClass("has_sub")) {
                        var o = a.find("> ul.sub_menu");
                        o.is(":visible") ? (o.slideUp(450, "easeInOutQuint"), a.removeClass("edgtf-opened")) : (a.addClass("edgtf-opened"), 0 === d.length ? o.slideDown(400, "easeInOutQuint") : (a.closest("li.menu-item").siblings().find(".menu-item").removeClass("edgtf-opened"), a.siblings().removeClass("edgtf-opened").find(".sub_menu").slideUp(400, "easeInOutQuint", function () {
                            o.slideDown(400, "easeInOutQuint")
                        })))
                    }
                })
            });
            n(".edgtf-mobile-nav a, .edgtf-mobile-logo-wrapper a").on("click tap", function (e) {
                "http://#" !== n(this).attr("href") && "#" !== n(this).attr("href") && (a.slideUp(450, "easeInOutQuint"), t.removeClass("edgtf-mobile-menu-opened"))
            })
        }(),
        function () {
            var t = n(".edgtf-mobile-header"),
                a = t.find(".edgtf-mobile-menu-opener"),
                e = t.length ? t.outerHeight() : 0;
            edgtf.body.hasClass("edgtf-content-is-behind-header") && 0 < e && edgtf.windowWidth <= 1024 && n(".edgtf-content").css("marginTop", -e);
            if (edgtf.body.hasClass("edgtf-sticky-up-mobile-header")) {
                var d, o = n("#wpadminbar"),
                    i = n(document).scrollTop();
                d = e + edgtfGlobalVars.vars.edgtfAddForAdminBar, n(window).scroll(function () {
                    var e = n(document).scrollTop();
                    d < e ? t.addClass("edgtf-animate-mobile-header") : t.removeClass("edgtf-animate-mobile-header"), i < e && d < e && !a.hasClass("edgtf-mobile-menu-opened") || e < d ? (t.removeClass("mobile-header-appear"), t.css("margin-bottom", 0), o.length && t.find(".edgtf-mobile-header-inner").css("top", 0)) : (t.addClass("mobile-header-appear"), t.css("margin-bottom", d)), i = n(document).scrollTop()
                })
            }
        }()
    }(edgtf.modules.mobileHeader = e).edgtfOnDocumentReady = t, n(document).ready(t)
}(jQuery),
function (c) {
    "use strict";
    var e = {};

    function t() {
        1024 < edgtf.windowWidth && function () {
            var t, e, a = c(".edgtf-page-header"),
                d = c(".edgtf-sticky-header"),
                o = c(".edgtf-fixed-wrapper"),
                i = o.children(".edgtf-menu-area"),
                n = i.outerHeight(),
                s = c(".edgtf-slider"),
                r = s.length ? s.outerHeight() : 0,
                l = o.length ? o.offset().top - edgtfGlobalVars.vars.edgtfAddForAdminBar : 0;
            switch (!0) {
                case edgtf.body.hasClass("edgtf-sticky-header-on-scroll-up"):
                    edgtf.modules.stickyHeader.behaviour = "edgtf-sticky-header-on-scroll-up";
                    var f = c(document).scrollTop();
                    t = parseInt(edgtfGlobalVars.vars.edgtfTopBarHeight) + parseInt(edgtfGlobalVars.vars.edgtfLogoAreaHeight) + parseInt(edgtfGlobalVars.vars.edgtfMenuAreaHeight) + parseInt(edgtfGlobalVars.vars.edgtfStickyHeaderHeight), (e = function () {
                        var e = c(document).scrollTop();
                        f < e && t < e || e < t ? (edgtf.modules.stickyHeader.isStickyVisible = !1, d.removeClass("header-appear").find(".edgtf-main-menu .second").removeClass("edgtf-drop-down-start"), edgtf.body.removeClass("edgtf-sticky-header-appear")) : (edgtf.modules.stickyHeader.isStickyVisible = !0, d.addClass("header-appear"), edgtf.body.addClass("edgtf-sticky-header-appear")), f = c(document).scrollTop()
                    })(), c(window).scroll(function () {
                        e()
                    });
                    break;
                case edgtf.body.hasClass("edgtf-sticky-header-on-scroll-down-up"):
                    edgtf.modules.stickyHeader.behaviour = "edgtf-sticky-header-on-scroll-down-up", 0 !== edgtfPerPageVars.vars.edgtfStickyScrollAmount ? edgtf.modules.stickyHeader.stickyAppearAmount = parseInt(edgtfPerPageVars.vars.edgtfStickyScrollAmount) : edgtf.modules.stickyHeader.stickyAppearAmount = parseInt(edgtfGlobalVars.vars.edgtfTopBarHeight) + parseInt(edgtfGlobalVars.vars.edgtfLogoAreaHeight) + parseInt(edgtfGlobalVars.vars.edgtfMenuAreaHeight) + parseInt(r), (e = function () {
                        edgtf.scroll < edgtf.modules.stickyHeader.stickyAppearAmount ? (edgtf.modules.stickyHeader.isStickyVisible = !1, d.removeClass("header-appear").find(".edgtf-main-menu .second").removeClass("edgtf-drop-down-start"), edgtf.body.removeClass("edgtf-sticky-header-appear")) : (edgtf.modules.stickyHeader.isStickyVisible = !0, d.addClass("header-appear"), edgtf.body.addClass("edgtf-sticky-header-appear"))
                    })(), c(window).scroll(function () {
                        e()
                    });
                    break;
                case edgtf.body.hasClass("edgtf-fixed-on-scroll"):
                    edgtf.modules.stickyHeader.behaviour = "edgtf-fixed-on-scroll";
                    var g = function () {
                        edgtf.scroll <= l ? (o.removeClass("fixed"), edgtf.body.removeClass("edgtf-fixed-header-appear"), i.css({
                            height: n + "px"
                        }), a.css("margin-bottom", "0")) : (o.addClass("fixed"), edgtf.body.addClass("edgtf-fixed-header-appear"), i.css({
                            height: n - 30 + "px"
                        }), a.css("margin-bottom", n - 30 + "px"))
                    };
                    g(), c(window).scroll(function () {
                        g()
                    })
            }
        }()
    }(edgtf.modules.stickyHeader = e).isStickyVisible = !1, e.stickyAppearAmount = 0, e.behaviour = "", e.edgtfOnDocumentReady = t, c(document).ready(t)
}(jQuery),
function (r) {
    "use strict";
    var e = {};

    function t() {
        var n;
        d(), (n = r(".edgtf-drop-down > ul > li")).each(function (e) {
            if (0 < r(n[e]).find(".second").length) {
                var t = r(n[e]),
                    a = t.find(".second");
                if (t.hasClass("wide")) {
                    var d = 0,
                        o = r(this).find(".second > .inner > ul > li");
                    o.each(function () {
                        var e = r(this).height();
                        d < e && (d = e)
                    }), o.css("height", ""), o.height(d)
                }
                if (edgtf.menuDropdownHeightSet || (t.data("original_height", a.height() + "px"), a.height(0)), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) t.on("touchstart mouseenter", function () {
                    a.css({
                        height: t.data("original_height"),
                        overflow: "visible",
                        visibility: "visible",
                        opacity: "1"
                    })
                }).on("mouseleave", function () {
                    a.css({
                        height: "0px",
                        overflow: "hidden",
                        visibility: "hidden",
                        opacity: "0"
                    })
                });
                else if (edgtf.body.hasClass("edgtf-dropdown-animate-height")) {
                    var i = {
                        interval: 0,
                        over: function () {
                            setTimeout(function () {
                                a.addClass("edgtf-drop-down-start"), a.css({
                                    visibility: "visible",
                                    height: "0px"
                                }), a.css("opacity", "1"), a.stop().animate({
                                    height: r(n[e]).data("original_height")
                                }, 350, "easeInOutCubic", function () {
                                    a.css("overflow", "visible")
                                })
                            }, 100)
                        },
                        timeout: 100,
                        out: function () {
                            a.stop().animate({
                                height: "0px",
                                opacity: 0
                            }, 0, function () {
                                a.css({
                                    overflow: "hidden",
                                    visibility: "hidden"
                                })
                            }), a.removeClass("edgtf-drop-down-start")
                        }
                    };
                    t.hoverIntent(i)
                } else {
                    var i = {
                        interval: 0,
                        over: function () {
                            setTimeout(function () {
                                a.addClass("edgtf-drop-down-start"), a.stop().css({
                                    height: t.data("original_height")
                                })
                            }, 150)
                        },
                        timeout: 150,
                        out: function () {
                            a.stop().css({
                                height: "0px"
                            }), a.removeClass("edgtf-drop-down-start")
                        }
                    };
                    t.hoverIntent(i)
                }
            }
        }), r(".edgtf-drop-down ul li.wide ul li a").on("click", function (e) {
            if (1 == e.which) {
                var t = r(this);
                setTimeout(function () {
                    t.mouseleave()
                }, 500)
            }
        }), edgtf.menuDropdownHeightSet = !0
    }

    function a() {
        o()
    }

    function d() {
        var e = r(".edgtf-drop-down > ul > li.narrow.menu-item-has-children");
        e.length && e.each(function (e) {
            var t, a = r(this),
                d = a.offset().left,
                o = a.find(".second"),
                i = o.find(".inner ul"),
                n = i.outerWidth(),
                s = edgtf.windowWidth - d;
            edgtf.body.hasClass("edgtf-boxed") && (s = edgtf.boxedLayoutWidth - (d - (edgtf.windowWidth - edgtf.boxedLayoutWidth) / 2)), 0 < a.find("li.sub").length && (t = s - n), o.removeClass("right"), i.removeClass("right"), (s < n || t < n) && (o.addClass("right"), i.addClass("right"))
        })
    }

    function o() {
        var o = r(".edgtf-drop-down > ul > li.wide");
        o.length && o.each(function (e) {
            var t = r(o[e]).find(".second");
            if (t.length && !t.hasClass("left_position") && !t.hasClass("right_position")) {
                t.css("left", 0);
                var a = t.offset().left;
                if (edgtf.body.hasClass("edgtf-boxed")) {
                    var d = r(".edgtf-boxed .edgtf-wrapper .edgtf-wrapper-inner").outerWidth();
                    a -= (edgtf.windowWidth - d) / 2, t.css("left", -a), t.css("width", d)
                } else t.css("left", -a), t.css("width", edgtf.windowWidth)
            }
        })
    }(edgtf.modules.header = e).edgtfSetDropDownMenuPosition = d, e.edgtfSetDropDownWideMenuPosition = o, e.edgtfOnDocumentReady = t, e.edgtfOnWindowLoad = a, r(document).ready(t), r(window).load(a)
}(jQuery),
function (c) {
    "use strict";
    var e = {};

    function t() {
        ! function () {
            if (edgtf.body.hasClass("edgtf-search-covers-header")) {
                var e = c("a.edgtf-search-opener");
                0 < e.length && e.click(function (e) {
                    e.preventDefault();
                    var t, a = c(this),
                        d = c(".edgtf-page-header"),
                        o = c(".edgtf-top-bar"),
                        i = d.find(".edgtf-fixed-wrapper.fixed"),
                        n = c(".edgtf-mobile-header"),
                        s = c(".edgtf-search-cover"),
                        r = !!a.parents(".edgtf-top-bar").length,
                        l = !!a.parents(".edgtf-fixed-wrapper.fixed").length,
                        f = !!a.parents(".edgtf-sticky-header").length,
                        g = !!a.parents(".edgtf-mobile-header").length;
                    s.removeClass("edgtf-is-active"), r ? (t = edgtfGlobalVars.vars.edgtfTopBarHeight, o.find(".edgtf-search-cover").addClass("edgtf-is-active")) : l ? (t = i.outerHeight(), d.children(".edgtf-search-cover").addClass("edgtf-is-active")) : f ? (t = edgtfGlobalVars.vars.edgtfStickyHeaderHeight, d.children(".edgtf-search-cover").addClass("edgtf-is-active")) : g ? (t = n.hasClass("mobile-header-appear") ? n.children(".edgtf-mobile-header-inner").outerHeight() : n.outerHeight(), n.find(".edgtf-search-cover").addClass("edgtf-is-active")) : (t = d.outerHeight(), d.children(".edgtf-search-cover").addClass("edgtf-is-active")), s.hasClass("edgtf-is-active") && s.height(t).stop(!0).fadeIn(600).find('input[type="text"]').focus(), s.find(".edgtf-search-close").click(function (e) {
                        e.preventDefault(), s.stop(!0).fadeOut(450)
                    }), s.blur(function () {
                        s.stop(!0).fadeOut(450)
                    }), c(window).scroll(function () {
                        s.stop(!0).fadeOut(450)
                    })
                })
            }
        }()
    }(edgtf.modules.searchCoversHeader = e).edgtfOnDocumentReady = t, c(document).ready(t)
}(jQuery),
function (i) {
    "use strict";
    var e = {};

    function t() {
        ! function () {
            if (edgtf.body.hasClass("edgtf-fullscreen-search")) {
                var e = i("a.edgtf-search-opener");
                if (0 < e.length) {
                    var a = i(".edgtf-fullscreen-search-holder"),
                        t = i(".edgtf-fullscreen-search-close");
                    e.offset();
                    e.click(function (e) {
                        e.preventDefault(), a.hasClass("edgtf-animate") ? (edgtf.body.removeClass("edgtf-fullscreen-search-opened edgtf-search-fade-out"), edgtf.body.removeClass("edgtf-search-fade-in"), a.removeClass("edgtf-animate"), setTimeout(function () {
                            a.find(".edgtf-search-field").val(""), a.find(".edgtf-search-field").blur()
                        }, 300), edgtf.modules.common.edgtfEnableScroll()) : (edgtf.body.addClass("edgtf-fullscreen-search-opened edgtf-search-fade-in"), edgtf.body.removeClass("edgtf-search-fade-out"), a.addClass("edgtf-animate"), setTimeout(function () {
                            a.find(".edgtf-search-field").focus()
                        }, 900), edgtf.modules.common.edgtfDisableScroll()), t.click(function (e) {
                            e.preventDefault(), edgtf.body.removeClass("edgtf-fullscreen-search-opened edgtf-search-fade-in"), edgtf.body.addClass("edgtf-search-fade-out"), a.removeClass("edgtf-animate"), setTimeout(function () {
                                a.find(".edgtf-search-field").val(""), a.find(".edgtf-search-field").blur()
                            }, 300), edgtf.modules.common.edgtfEnableScroll()
                        }), i(document).mouseup(function (e) {
                            var t = i(".edgtf-form-holder-inner");
                            t.is(e.target) || 0 !== t.has(e.target).length || (e.preventDefault(), edgtf.body.removeClass("edgtf-fullscreen-search-opened edgtf-search-fade-in"), edgtf.body.addClass("edgtf-search-fade-out"), a.removeClass("edgtf-animate"), setTimeout(function () {
                                a.find(".edgtf-search-field").val(""), a.find(".edgtf-search-field").blur()
                            }, 300), edgtf.modules.common.edgtfEnableScroll())
                        }), i(document).keyup(function (e) {
                            27 == e.keyCode && (edgtf.body.removeClass("edgtf-fullscreen-search-opened edgtf-search-fade-in"), edgtf.body.addClass("edgtf-search-fade-out"), a.removeClass("edgtf-animate"), setTimeout(function () {
                                a.find(".edgtf-search-field").val(""), a.find(".edgtf-search-field").blur()
                            }, 300), edgtf.modules.common.edgtfEnableScroll())
                        })
                    });
                    var d = i(".edgtf-fullscreen-search-holder .edgtf-search-field"),
                        o = i(".edgtf-fullscreen-search-holder .edgtf-field-holder .edgtf-line");
                    d.focus(function () {
                        o.css("width", "100%")
                    }), d.blur(function () {
                        o.css("width", "0")
                    })
                }
            }
        }()
    }(edgtf.modules.searchFullscreen = e).edgtfOnDocumentReady = t, i(document).ready(t)
}(jQuery),
function (u) {
    "use strict";
    var e = {};

    function t() {
        ! function () {
            if (edgtf.body.hasClass("edgtf-slide-from-header-bottom")) {
                var e = u("a.edgtf-search-opener");
                0 < e.length && e.click(function (e) {
                    e.preventDefault();
                    var t = u(this),
                        a = parseInt(edgtf.windowWidth - t.offset().left - t.outerWidth());
                    edgtf.body.hasClass("edgtf-boxed") && 1024 < edgtf.windowWidth && (a -= parseInt((edgtf.windowWidth - u(".edgtf-boxed .edgtf-wrapper .edgtf-wrapper-inner").outerWidth()) / 2));
                    var d = u(".edgtf-page-header"),
                        o = "100%",
                        i = u(".edgtf-top-bar"),
                        n = d.find(".edgtf-fixed-wrapper.fixed"),
                        s = u(".edgtf-mobile-header"),
                        r = u(".edgtf-slide-from-header-bottom-holder"),
                        l = !!t.parents(".edgtf-top-bar").length,
                        f = !!t.parents(".edgtf-fixed-wrapper.fixed").length,
                        g = !!t.parents(".edgtf-sticky-header").length,
                        c = !!t.parents(".edgtf-mobile-header").length;
                    r.removeClass("edgtf-is-active"), l ? i.find(".edgtf-slide-from-header-bottom-holder").addClass("edgtf-is-active") : f ? (o = n.outerHeight() + edgtfGlobalVars.vars.edgtfAddForAdminBar, d.children(".edgtf-slide-from-header-bottom-holder").addClass("edgtf-is-active")) : g ? (o = edgtfGlobalVars.vars.edgtfStickyHeaderHeight + edgtfGlobalVars.vars.edgtfAddForAdminBar, d.children(".edgtf-slide-from-header-bottom-holder").addClass("edgtf-is-active")) : c ? (s.hasClass("mobile-header-appear") && (o = s.children(".edgtf-mobile-header-inner").outerHeight() + edgtfGlobalVars.vars.edgtfAddForAdminBar), s.find(".edgtf-slide-from-header-bottom-holder").addClass("edgtf-is-active")) : d.children(".edgtf-slide-from-header-bottom-holder").addClass("edgtf-is-active"), r.hasClass("edgtf-is-active") && r.css({
                        right: a,
                        top: o
                    }).stop(!0).slideToggle(300, "easeOutBack"), u(document).keyup(function (e) {
                        27 == e.keyCode && r.stop(!0).fadeOut(0)
                    }), u(window).scroll(function () {
                        r.stop(!0).fadeOut(0)
                    })
                })
            }
        }()
    }(edgtf.modules.searchSlideFromHB = e).edgtfOnDocumentReady = t, u(document).ready(t)
}(jQuery),
function (o) {
    "use strict";
    var e = {};

    function t() {
        var e, a, d, t;
        e = o(".edgtf-wrapper"), a = o("a.edgtf-side-menu-button-opener"), d = "edgtf-right-side-menu-opened", e.prepend('<div class="edgtf-cover"/>'), o("a.edgtf-side-menu-button-opener, a.edgtf-close-side-menu").click(function (e) {
            if (e.preventDefault(), a.hasClass("opened")) a.removeClass("opened"), edgtf.body.removeClass(d);
            else {
                a.addClass("opened"), edgtf.body.addClass(d), o(".edgtf-wrapper .edgtf-cover").click(function () {
                    edgtf.body.removeClass("edgtf-right-side-menu-opened"), a.removeClass("opened")
                });
                var t = o(window).scrollTop();
                o(window).scroll(function () {
                    400 < Math.abs(edgtf.scroll - t) && (edgtf.body.removeClass(d), a.removeClass("opened"))
                })
            }
        }), (t = o(".edgtf-side-menu")).length && t.niceScroll({
            scrollspeed: 60,
            mousescrollstep: 40,
            cursorwidth: 0,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            autohidemode: !1,
            horizrailenabled: !1
        })
    }(edgtf.modules.sidearea = e).edgtfOnDocumentReady = t, o(document).ready(t)
}(jQuery),
function (s) {
    "use strict";
    var e = {};

    function t() {
        ! function () {
            var e = s(".edgtf-title-holder.edgtf-bg-parallax");
            if (0 < e.length && 1024 < edgtf.windowWidth) {
                var t = e.hasClass("edgtf-bg-parallax-zoom-out"),
                    a = parseInt(e.data("height")),
                    d = parseInt(e.data("background-width")),
                    o = a / 1e4 * 7,
                    i = -edgtf.scroll * o,
                    n = edgtfGlobalVars.vars.edgtfAddForAdminBar;
                e.css({
                    "background-position": "center " + (i + n) + "px"
                }), t && t.css({
                    "background-size": d - edgtf.scroll + "px auto"
                }), s(window).scroll(function () {
                    i = -edgtf.scroll * o, e.css({
                        "background-position": "center " + (i + n) + "px"
                    }), t && t.css({
                        "background-size": d - edgtf.scroll + "px auto"
                    })
                })
            }
        }()
    }(edgtf.modules.title = e).edgtfOnDocumentReady = t, s(document).ready(t)
}(jQuery),
function (f) {
    "use strict";
    var e = {};

    function t() {
        var e, t, a, d, o;
        f(document).on("click", ".edgtf-quantity-minus, .edgtf-quantity-plus", function (e) {
                e.stopPropagation();
                var t, a = f(this),
                    d = a.siblings(".edgtf-quantity-input"),
                    o = parseFloat(d.data("step")),
                    i = parseFloat(d.data("max")),
                    n = !1,
                    s = parseFloat(d.val());
                a.hasClass("edgtf-quantity-minus") && (n = !0), n ? 1 <= (t = s - o) ? d.val(t) : d.val(0) : (t = s + o, void 0 === i ? d.val(t) : i <= t ? d.val(i) : d.val(t)), d.trigger("change")
            }),
            function () {
                var e = f(".woocommerce-ordering .orderby");
                e.length && e.select2({
                    minimumResultsForSearch: 1 / 0
                });
                var t = f(".edgtf-woocommerce-page .edgtf-content .variations td.value select");
                t.length && t.select2();
                var a = f("#calc_shipping_country");
                a.length && a.select2();
                var d = f(".cart-collaterals .shipping select#calc_shipping_state");
                d.length && d.select2()
            }(), (e = f(".edgtf-woo-single-page.edgtf-woo-single-has-pretty-photo .images .woocommerce-product-gallery__image")).length && (e.children("a").attr("data-rel", "prettyPhoto[woo_single_pretty_photo]"), "function" == typeof edgtf.modules.common.edgtfPrettyPhoto && edgtf.modules.common.edgtfPrettyPhoto()), (t = f(".edgtf-pl-holder"), a = {}, d = function (n, s) {
                var r = n.find(".edgtf-pl-outer"),
                    e = edgtf.modules.common.getLoadMoreData(n),
                    l = n.find(".edgtf-prl-loading");
                ! function (e, t) {
                    for (var a in t) e[a] = t[a];
                    switch (e.ordering) {
                        case "menu_order":
                            e.metaKey = "", e.order = "asc", e.orderby = "menu_order title";
                            break;
                        case "popularity":
                            e.metaKey = "total_sales", e.order = "desc", e.orderby = "meta_value_num";
                            break;
                        case "rating":
                            e.metaKey = "_wc_average_rating", e.order = "desc", e.orderby = "meta_value_num";
                            break;
                        case "newness":
                            e.metaKey = "", e.order = "desc", e.orderby = "date";
                            break;
                        case "price":
                            e.metaKey = "_price", e.order = "asc", e.orderby = "meta_value_num";
                            break;
                        case "price-desc":
                            e.metaKey = "_price", e.order = "desc", e.orderby = "meta_value_num"
                    }
                }(a, s.data()), e.category = void 0 !== a.category ? a.category : "", e.metaKey = void 0 !== a.metaKey ? a.metaKey : "", e.order = void 0 !== a.order ? a.order : "", e.orderby = void 0 !== a.orderby ? a.orderby : "", e.minPrice = void 0 !== a.minprice ? a.minprice : "", e.maxPrice = void 0 !== a.maxprice ? a.maxprice : "", l.fadeIn();
                var t = edgtf.modules.common.setLoadMoreAjaxData(e, "edgtf_product_ajax_load_category");
                f.ajax({
                    type: "POST",
                    data: t,
                    url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                    success: function (e) {
                        var t = f.parseJSON(e),
                            i = t.html;
                        n.waitForImages(function () {
                            var e, t, a, d, o;
                            s.parent().siblings().find("a").removeClass("active"), s.addClass("active"), n.hasClass("edgtf-masonry-layout") ? (d = l, o = i, (a = r).find(".edgtf-pli").remove(), a.append(o).isotope("reloadItems").isotope({
                                sortBy: "original-order"
                            }), setTimeout(function () {
                                a.isotope("layout"), d.fadeOut()
                            }, 400)) : (e = l, t = i, r.html(t), e.fadeOut()), g(), c()
                        })
                    }
                })
            }, o = function (e, t) {
                e.on("click", function () {
                    edgtf.windowWidth <= 768 && (e.hasClass("opened") ? (e.removeClass("opened"), t.slideUp()) : (e.addClass("opened"), t.slideDown()))
                })
            }, {
                init: function () {
                    t.length && t.each(function () {
                        var a, e = f(this);
                        (a = e).find(".edgtf-pl-categories a, .edgtf-pl-ordering a").on("click", function (e) {
                            e.preventDefault(), e.stopPropagation();
                            var t = f(this);
                            t.hasClass("active") || d(a, t)
                        }), o(e.find(".edgtf-pl-ordering-outer h6"), e.find(".edgtf-pl-ordering")), o(e.find(".edgtf-pl-categories-label"), e.find(".edgtf-pl-categories-label").next("ul"))
                    })
                }
            }).init(), g(), c()
    }

    function a() {
        o()
    }

    function d() {
        o()
    }

    function o() {
        var e = f(".edgtf-pl-holder.edgtf-masonry-layout .edgtf-pl-outer");
        e.length && e.each(function () {
            var e = f(this);
            e.waitForImages(function () {
                e.isotope({
                    itemSelector: ".edgtf-pli",
                    resizable: !1,
                    masonry: {
                        columnWidth: ".edgtf-pl-sizer",
                        gutter: ".edgtf-pl-gutter"
                    }
                }), setTimeout(function () {
                    "function" == typeof edgtf.modules.common.edgtfInitParallax && edgtf.modules.common.edgtfInitParallax()
                }, 1e3), e.isotope("layout").css("opacity", 1)
            })
        })
    }

    function g() {
        var e = f(".add_to_cart_button, .single_add_to_cart_button");
        e.length && e.click(function () {
            f(this).text(edgtfGlobalVars.vars.edgtfAddingToCartLabel)
        })
    }

    function c() {
        var e = f(".add_to_wishlist");
        e.length && e.click(function () {
            var e, t, a, d, o = f(this);
            o.closest(".edgtf-pli").length ? e = o.closest(".edgtf-pli") : o.closest(".edgtf-plc-item").length ? e = o.closest(".edgtf-plc-item") : o.closest(".product").length && (e = o.closest(".product")), t = e.find("img").offset(), a = e.find("img").height() / 2, d = e.find("img").width() / 2, f("#yith-wcwl-popup-message").css({
                top: t.top + a,
                left: t.left + d
            }), o.addClass("edgtf-adding-to-wishlist"), f(document).on("added_to_wishlist", function () {
                o.removeClass("edgtf-adding-to-wishlist"), setTimeout(function () {
                    var e = f("#yith-wcwl-popup-message");
                    e.stop().addClass("edgtf-wishlist-vanish-out"), e.one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
                        e.removeClass("edgtf-wishlist-vanish-out")
                    })
                }, 1e3)
            })
        })
    }(edgtf.modules.woocommerce = e).edgtfOnDocumentReady = t, e.edgtfOnWindowLoad = a, e.edgtfOnWindowResize = d, f(document).ready(t), f(window).load(a), f(window).resize(d)
}(jQuery),
function (i) {
    "use strict";
    var e = {};

    function t() {
        a()
    }

    function a() {
        var e = i(".edgtf-accordion-holder");
        e.length && e.each(function () {
            var e = i(this),
                t = e.find(".edgtf-accordion-width");
            if (e.hasClass("edgtf-in-grid") && t.each(function () {
                    i(this).addClass("edgtf-grid")
                }), e.hasClass("edgtf-accordion") && e.accordion({
                    animate: "easeOutQuad",
                    collapsible: !0,
                    active: 0,
                    icons: "",
                    heightStyle: "content",
                    activate: function (e, t) {
                        t.newPanel.find(".edgtf-btn.edgtf-btn-text-on-hover").each(function () {
                            var e = i(this);
                            e.removeClass("edgtf-btn-initialized"), e.css("width", "auto"), e.find(".edgtf-btn-arrow").css("position", "relative"), edgtf.modules.button.edgtfReinitButton()
                        })
                    }
                }), e.hasClass("edgtf-toggle")) {
                var a = i(this),
                    d = a.find(".edgtf-accordion-title"),
                    o = d.next();
                a.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"), d.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"), o.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), d.each(function () {
                    var t = i(this);
                    t.hover(function () {
                        t.toggleClass("ui-state-hover")
                    }), t.on("click", function () {
                        t.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), t.next().toggleClass("ui-accordion-content-active").slideToggle(500, "easeOutQuad", function (e) {
                            edgtf.modules.common.edgtfInitParallax(), t.next().find(".edgtf-btn.edgtf-btn-text-on-hover").each(function () {
                                var e = i(this);
                                e.removeClass("edgtf-btn-initialized"), e.css("width", "auto"), e.find(".edgtf-btn-arrow").css("position", "relative"), edgtf.modules.button.edgtfReinitButton()
                            })
                        })
                    })
                })
            }
        })
    }(edgtf.modules.accordions = e).edgtfInitAccordions = a, e.edgtfOnDocumentReady = t, i(document).ready(t)
}(jQuery),
function (o) {
    "use strict";
    var e = {};

    function t() {
        a()
    }

    function a() {
        var a, d, e = o(".edgtf-grow-in, .edgtf-fade-in-down, .edgtf-element-from-fade, .edgtf-element-from-left, .edgtf-element-from-right, .edgtf-element-from-top, .edgtf-element-from-bottom, .edgtf-flip-in, .edgtf-x-rotate, .edgtf-z-rotate, .edgtf-y-translate, .edgtf-fade-in, .edgtf-fade-in-left-x-rotate");
        e.length && e.each(function () {
            var t = o(this);
            t.appear(function () {
                if (a = t.data("animation"), d = parseInt(t.data("animation-delay")), void 0 !== a && "" !== a) {
                    var e = a + "-on";
                    setTimeout(function () {
                        t.addClass(e)
                    }, d)
                }
            }, {
                accX: 0,
                accY: edgtfGlobalVars.vars.edgtfElementAppearAmount
            })
        })
    }(edgtf.modules.animationHolder = e).edgtfInitAnimationHolder = a, e.edgtfOnDocumentReady = t, o(document).ready(t)
}(jQuery),
function (i) {
    "use strict";
    var e = {};

    function t() {
        a().init()
    }(edgtf.modules.button = e).edgtfButton = a, e.edgtfReinitButton = function () {
        a().init()
    }, e.edgtfOnDocumentReady = t, i(document).ready(t);
    var a = function () {
        var e = i(".edgtf-btn");
        return {
            init: function () {
                e.length && (e.each(function () {
                    ! function (e) {
                        if (void 0 !== e.data("hover-color")) {
                            var t = function (e) {
                                    e.data.button.css("color", e.data.color)
                                },
                                a = e.css("color"),
                                d = e.data("hover-color");
                            e.on("mouseenter", {
                                button: e,
                                color: d
                            }, t), e.on("mouseleave", {
                                button: e,
                                color: a
                            }, t)
                        }
                    }(i(this)),
                    function (e) {
                        if (void 0 !== e.data("hover-bg-color")) {
                            var t = function (e) {
                                    e.data.button.css("background-color", e.data.color)
                                },
                                a = e.css("background-color"),
                                d = e.data("hover-bg-color");
                            e.on("mouseenter", {
                                button: e,
                                color: d
                            }, t), e.on("mouseleave", {
                                button: e,
                                color: a
                            }, t)
                        }
                    }(i(this))
                }), e.filter(".edgtf-btn-text-on-hover").each(function () {
                    var e, t, a, d, o;
                    e = i(this), t = e.outerWidth(), a = e.find(".edgtf-btn-text").outerWidth(), d = Math.round(t - a), o = e.find(".edgtf-btn-arrow"), e.hasClass("edgtf-btn-initialized") || (e.css("width", d), o.css("position", "absolute"), e.mouseenter(function () {
                        e.css("width", t)
                    }), e.mouseleave(function () {
                        e.css("width", d)
                    }), e.addClass("edgtf-btn-initialized"))
                }))
            }
        }
    }
}(jQuery),
function (m) {
    "use strict";
    var e = {};

    function t() {
        a()
    }

    function a() {
        var o, i, n, s, r, l, f, g, c, u, h, e = m(".edgtf-countdown"),
            p = (new Date).getMonth();
        e.length && e.each(function () {
            var e, t, a = m(this).attr("id"),
                d = m("#" + a);
            o = d.data("year"), i = d.data("month"), n = d.data("day"), s = d.data("hour"), r = d.data("minute"), l = d.data("timezone"), f = d.data("month-label"), g = d.data("day-label"), c = d.data("hour-label"), u = d.data("minute-label"), h = d.data("second-label"), e = d.data("digit-size"), t = d.data("label-size"), p != i && (i -= 1), d.countdown({
                until: new Date(o, i, n, s, r, 44),
                labels: ["", f, "", g, c, u, h],
                format: "ODHMS",
                timezone: l,
                padZeroes: !0,
                onTick: function () {
                    d.find(".countdown-amount").css({
                        "font-size": e + "px",
                        "line-height": e + "px"
                    }), d.find(".countdown-period").css({
                        "font-size": t + "px"
                    })
                }
            })
        })
    }(edgtf.modules.countdown = e).edgtfInitCountdown = a, e.edgtfOnDocumentReady = t, m(document).ready(t)
}(jQuery),
function (d) {
    "use strict";
    var e = {};

    function t() {
        a()
    }

    function a() {
        var e = d(".edgtf-counter-holder");
        e.length && e.each(function () {
            var t = d(this),
                a = t.find(".edgtf-counter");
            t.appear(function () {
                if (t.css("opacity", "1"), a.hasClass("edgtf-zero-counter")) {
                    var e = parseFloat(a.text());
                    a.countTo({
                        from: 0,
                        to: e,
                        speed: 1500,
                        refreshInterval: 100
                    })
                } else a.absoluteCounter({
                    speed: 2e3,
                    fadeInDelay: 1e3
                })
            }, {
                accX: 0,
                accY: edgtfGlobalVars.vars.edgtfElementAppearAmount
            })
        })
    }(edgtf.modules.counter = e).edgtfInitCounter = a, e.edgtfOnDocumentReady = t, d(document).ready(t)
}(jQuery),
function (r) {
    "use strict";
    var e = {};

    function t() {
        d()
    }

    function a() {
        o()
    }

    function d() {
        var e = r(".edgtf-custom-font-holder");
        e.length && e.each(function () {
            var e = r(this),
                t = "",
                a = "",
                d = "",
                o = "",
                i = "",
                n = "",
                s = "";
            void 0 !== e.data("item-class") && !1 !== e.data("item-class") && (t = e.data("item-class")), void 0 !== e.data("font-size-1280") && !1 !== e.data("font-size-1280") && (a += "font-size: " + e.data("font-size-1280") + " !important;"), void 0 !== e.data("font-size-1024") && !1 !== e.data("font-size-1024") && (d += "font-size: " + e.data("font-size-1024") + " !important;"), void 0 !== e.data("font-size-768") && !1 !== e.data("font-size-768") && (o += "font-size: " + e.data("font-size-768") + " !important;"), void 0 !== e.data("font-size-680") && !1 !== e.data("font-size-680") && (i += "font-size: " + e.data("font-size-680") + " !important;"), void 0 !== e.data("line-height-1280") && !1 !== e.data("line-height-1280") && (a += "line-height: " + e.data("line-height-1280") + " !important;"), void 0 !== e.data("line-height-1024") && !1 !== e.data("line-height-1024") && (d += "line-height: " + e.data("line-height-1024") + " !important;"), void 0 !== e.data("line-height-768") && !1 !== e.data("line-height-768") && (o += "line-height: " + e.data("line-height-768") + " !important;"), void 0 !== e.data("line-height-680") && !1 !== e.data("line-height-680") && (i += "line-height: " + e.data("line-height-680") + " !important;"), (a.length || d.length || o.length || i.length) && (a.length && (s += "@media only screen and (max-width: 1280px) {.edgtf-custom-font-holder." + t + " { " + a + " } }"), d.length && (s += "@media only screen and (max-width: 1024px) {.edgtf-custom-font-holder." + t + " { " + d + " } }"), o.length && (s += "@media only screen and (max-width: 768px) {.edgtf-custom-font-holder." + t + " { " + o + " } }"), i.length && (s += "@media only screen and (max-width: 680px) {.edgtf-custom-font-holder." + t + " { " + i + " } }")), s.length && (n = '<style type="text/css">' + s + "</style>"), n.length && r("head").append(n)
        })
    }

    function o() {
        var e = r(".edgtf-cf-typed");
        e.length && e.each(function () {
            var e = r(this),
                t = e.parent(".edgtf-cf-typed-wrap").parent(".edgtf-custom-font-holder"),
                a = [],
                d = e.find(".edgtf-cf-typed-1").text(),
                o = e.find(".edgtf-cf-typed-2").text(),
                i = e.find(".edgtf-cf-typed-3").text(),
                n = e.find(".edgtf-cf-typed-4").text();
            d.length && a.push(d), o.length && a.push(o), i.length && a.push(i), n.length && a.push(n), t.appear(function () {
                e.typed({
                    strings: a,
                    typeSpeed: 90,
                    backDelay: 700,
                    loop: !0,
                    contentType: "text",
                    loopCount: !1,
                    cursorChar: "_"
                })
            }, {
                accX: 0,
                accY: edgtfGlobalVars.vars.edgtfElementAppearAmount
            })
        })
    }(edgtf.modules.customFont = e).edgtfCustomFontResize = d, e.edgtfCustomFontTypeOut = o, e.edgtfOnDocumentReady = t, e.edgtfOnWindowLoad = a, r(document).ready(t), r(window).load(a)
}(jQuery),
function (r) {
    "use strict";
    var e = {};

    function t() {
        a()
    }

    function a() {
        var e = r(".edgtf-elements-holder");
        e.length && e.each(function () {
            var e = r(this).children(".edgtf-eh-item"),
                t = "",
                s = "";
            (e.each(function () {
                var e = r(this),
                    t = "",
                    a = "",
                    d = "",
                    o = "",
                    i = "",
                    n = "";
                void 0 !== e.data("item-class") && !1 !== e.data("item-class") && (t = e.data("item-class")), void 0 !== e.data("1280-1600") && !1 !== e.data("1280-1600") && (a = e.data("1280-1600")), void 0 !== e.data("1024-1280") && !1 !== e.data("1024-1280") && (d = e.data("1024-1280")), void 0 !== e.data("768-1024") && !1 !== e.data("768-1024") && (o = e.data("768-1024")), void 0 !== e.data("680-768") && !1 !== e.data("680-768") && (i = e.data("680-768")), void 0 !== e.data("680") && !1 !== e.data("680") && (n = e.data("680")), (a.length || d.length || o.length || i.length || n.length || "".length) && (a.length && (s += "@media only screen and (min-width: 1281px) and (max-width: 1600px) {.edgtf-eh-item-content." + t + " { padding: " + a + " !important; } }"), d.length && (s += "@media only screen and (min-width: 1025px) and (max-width: 1280px) {.edgtf-eh-item-content." + t + " { padding: " + d + " !important; } }"), o.length && (s += "@media only screen and (min-width: 769px) and (max-width: 1024px) {.edgtf-eh-item-content." + t + " { padding: " + o + " !important; } }"), i.length && (s += "@media only screen and (min-width: 681px) and (max-width: 768px) {.edgtf-eh-item-content." + t + " { padding: " + i + " !important; } }"), n.length && (s += "@media only screen and (max-width: 680px) {.edgtf-eh-item-content." + t + " { padding: " + n + " !important; } }"))
            }), s.length && (t = '<style type="text/css">' + s + "</style>"), t.length && r("head").append(t), "function" == typeof edgtf.modules.common.edgtfOwlSlider) && (edgtf.modules.common.edgtfOwlSlider(), r(".edgtf-owl-slider").each(function () {
                r(this).data("owl.carousel").onResize()
            }))
        })
    }(edgtf.modules.elementsHolder = e).edgtfInitElementsHolderResponsiveStyle = a, e.edgtfOnDocumentReady = t, r(document).ready(t)
}(jQuery),
function (s) {
    "use strict";
    var e = {};

    function t() {
        var e;
        (e = s(".edgtf-fsis-slider")).length && e.each(function () {
            var t = s(this),
                e = t.parent(),
                a = e.children(".edgtf-fsis-prev-nav"),
                d = e.children(".edgtf-fsis-next-nav"),
                o = e.children(".edgtf-fsis-slider-mask");
            e.addClass("edgtf-fsis-is-init"), i(t), n(t, a, d, -1), t.on("drag.owl.carousel", function () {
                setTimeout(function () {
                    o.hasClass("edgtf-drag") || e.hasClass("edgtf-fsis-active") || o.addClass("edgtf-drag")
                }, 200)
            }), t.on("dragged.owl.carousel", function () {
                setTimeout(function () {
                    o.hasClass("edgtf-drag") && o.removeClass("edgtf-drag")
                }, 300)
            }), t.on("translate.owl.carousel", function (e) {
                n(t, a, d, e.item.index)
            }), t.on("translated.owl.carousel", function () {
                i(t), setTimeout(function () {
                    o.removeClass("edgtf-drag")
                }, 300)
            })
        })
    }

    function i(t) {
        var e, a = t.find(".owl-item.active");
        if (t.find(".edgtf-fsis-item").removeClass("edgtf-fsis-content-image-init"), (e = t.find(".edgtf-fsis-item")).length && e.removeClass("edgtf-fsis-active-image"), a.length) {
            var d = a.find(".edgtf-fsis-item"),
                o = d.children(".edgtf-fsis-image");
            setTimeout(function () {
                d.addClass("edgtf-fsis-content-image-init")
            }, 100), o.off().on("mouseenter", function () {
                d.addClass("edgtf-fsis-image-hover")
            }).on("mouseleave", function () {
                d.removeClass("edgtf-fsis-image-hover")
            }).on("click", function () {
                d.hasClass("edgtf-fsis-active-image") ? (t.trigger("play.owl.autoplay"), t.parent().removeClass("edgtf-fsis-active"), d.removeClass("edgtf-fsis-active-image")) : (t.trigger("stop.owl.autoplay"), t.parent().addClass("edgtf-fsis-active"), d.addClass("edgtf-fsis-active-image"))
            }), s(document).keyup(function (e) {
                27 === e.keyCode && (t.trigger("play.owl.autoplay"), t.parent().removeClass("edgtf-fsis-active"), d.removeClass("edgtf-fsis-active-image"))
            })
        }
    }

    function n(e, t, a, d) {
        var o = -1 === d ? e.find(".owl-item.active") : s(e.find(".owl-item")[d]),
            i = o.prev().find(".edgtf-fsis-image").css("background-image"),
            n = o.next().find(".edgtf-fsis-image").css("background-image");
        i.length && t.css({
            "background-image": i
        }), n.length && a.css({
            "background-image": n
        })
    }(edgtf.modules.fullScreenImageSlider = e).edgtfOnWindowLoad = t, s(window).load(t)
}(jQuery),
function (g) {
    "use strict";
    var e = {};

    function t() {
        a()
    }

    function a() {
        var e = g(".edgtf-full-screen-sections");
        e.length && e.each(function () {
            var d = g(this),
                e = d.children(".edgtf-fss-wrapper"),
                o = e.children(".edgtf-fss-item"),
                i = o.length,
                n = o.hasClass("edgtf-fss-item-has-style"),
                t = !1,
                a = "",
                s = "",
                r = "";
            edgtf.body.hasClass("edgtf-light-header") ? r = "light" : edgtf.body.hasClass("edgtf-dark-header") && (r = "dark"), void 0 !== d.data("enable-continuous-vertical") && !1 !== d.data("enable-continuous-vertical") && "yes" === d.data("enable-continuous-vertical") && (t = !0), void 0 !== d.data("enable-navigation") && !1 !== d.data("enable-navigation") && (a = d.data("enable-navigation")), void 0 !== d.data("enable-pagination") && !1 !== d.data("enable-pagination") && (s = d.data("enable-pagination"));
            var l = "no" !== a,
                f = "no" !== s;
            e.fullpage({
                    sectionSelector: ".edgtf-fss-item",
                    scrollingSpeed: 1200,
                    verticalCentered: !1,
                    continuousVertical: t,
                    navigation: f,
                    onLeave: function (e, t, a) {
                        n && c(g(o[t - 1]).data("header-style"), r), l && u(d, i, t)
                    },
                    afterRender: function () {
                        n && c(o.first().data("header-style"), r), l && (u(d, i, 1), d.children(".edgtf-fss-nav-holder").css("visibility", "visible")), e.css("visibility", "visible")
                    }
                }),
                function (e) {
                    var t = e.find(".edgtf-fss-item"),
                        n = "",
                        a = "";
                    t.each(function () {
                        var e = g(this),
                            t = "",
                            a = "",
                            d = "",
                            o = "",
                            i = "";
                        void 0 !== e.data("item-class") && !1 !== e.data("item-class") && (t = e.data("item-class")), void 0 !== e.data("laptop-image") && !1 !== e.data("laptop-image") && (a = e.data("laptop-image")), void 0 !== e.data("tablet-image") && !1 !== e.data("tablet-image") && (d = e.data("tablet-image")), void 0 !== e.data("tablet-portrait-image") && !1 !== e.data("tablet-portrait-image") && (o = e.data("tablet-portrait-image")), void 0 !== e.data("mobile-image") && !1 !== e.data("mobile-image") && (i = e.data("mobile-image")), (a.length || d.length || o.length || i.length) && (a.length && (n += "@media only screen and (max-width: 1280px) {.edgtf-fss-item." + t + " { background-image: url(" + a + ") !important; } }"), d.length && (n += "@media only screen and (max-width: 1024px) {.edgtf-fss-item." + t + " { background-image: url( " + d + ") !important; } }"), o.length && (n += "@media only screen and (max-width: 800px) {.edgtf-fss-item." + t + " { background-image: url( " + o + ") !important; } }"), i.length && (n += "@media only screen and (max-width: 680px) {.edgtf-fss-item." + t + " { background-image: url( " + i + ") !important; } }"))
                    }), n.length && (a = '<style type="text/css">' + n + "</style>");
                    a.length && g("head").append(a)
                }(d), l && (d.find("#edgtf-fss-nav-up").on("click", function () {
                    return g.fn.fullpage.moveSectionUp(), !1
                }), d.find("#edgtf-fss-nav-down").on("click", function () {
                    return g.fn.fullpage.moveSectionDown(), !1
                }))
        })
    }

    function c(e, t) {
        void 0 !== e && "" !== e ? edgtf.body.removeClass("edgtf-light-header edgtf-dark-header").addClass("edgtf-" + e + "-header") : "" !== t ? edgtf.body.removeClass("edgtf-light-header edgtf-dark-header").addClass("edgtf-" + t + "-header") : edgtf.body.removeClass("edgtf-light-header edgtf-dark-header")
    }

    function u(e, t, a) {
        var d = e,
            o = d.find("#edgtf-fss-nav-up"),
            i = d.find("#edgtf-fss-nav-down"),
            n = !1;
        void 0 !== e.data("enable-continuous-vertical") && !1 !== e.data("enable-continuous-vertical") && "yes" === e.data("enable-continuous-vertical") && (n = !0), 1 !== a || n ? a !== t || n ? (o.css({
            opacity: "1",
            height: "auto",
            visibility: "visible"
        }), i.css({
            opacity: "1",
            height: "auto",
            visibility: "visible"
        })) : (i.css({
            opacity: "0",
            height: "0",
            visibility: "hidden"
        }), 2 === t && o.css({
            opacity: "1",
            height: "auto",
            visibility: "visible"
        })) : (o.css({
            opacity: "0",
            height: "0",
            visibility: "hidden"
        }), i.css({
            opacity: "0",
            height: "0",
            visibility: "hidden"
        }), a !== t && i.css({
            opacity: "1",
            height: "auto",
            visibility: "visible"
        }))
    }(edgtf.modules.fullScreenSections = e).edgtfInitFullScreenSections = a, e.edgtfOnDocumentReady = t, g(document).ready(t)
}(jQuery),
function (n) {
    "use strict";
    var e = {};

    function t() {
        a()
    }

    function a() {
        var e = n(".edgtf-fullscreen-carousel-holder");
        e.length && e.each(function () {
            var a = n(this),
                d = a.find(".edgtf-fsc-item"),
                e = (a.find(".edgtf-fcs-item-image"), a.find(".edgtf-fsc-next-trigger")),
                t = function () {
                    var e = edgtf.windowHeight - a.offset().top;
                    edgtf.body.hasClass("edgtf-paspartu-enabled") && (e -= parseInt(n(".edgtf-wrapper").css("padding-top")));
                    a.css("height", e)
                },
                o = function () {
                    var e;
                    a.addClass("edgtf-animating"), e = d.filter(".edgtf-active").data("index") < d.length ? d.filter(".edgtf-active").next().data("index") - 1 : 0, d.find("> div").removeAttr("style"), d.removeClass("edgtf-remove"), d.filter(".edgtf-active").addClass("edgtf-remove"), d.removeClass("edgtf-active edgtf-next"), d.eq(e).addClass("edgtf-active"), e < d.length - 1 ? d.filter(".edgtf-active").next().addClass("edgtf-next") : d.first().addClass("edgtf-next"), i(), d.filter(".edgtf-active").one(edgtf.transitionEnd, function () {
                        a.removeClass("edgtf-animating")
                    })
                },
                i = function () {
                    if (a.hasClass("edgtf-fsc-with-progress-indicator")) {
                        var e = a.find(".edgtf-fsc-indicator-bullet"),
                            t = d.filter(".edgtf-active").data("index") - 1;
                        e.removeClass("edgtf-active"), e.eq(t).addClass("edgtf-active")
                    }
                };
            a.waitForImages(function () {
                t(), d.first().addClass("edgtf-active").find("> div").css("transition", "none"), a.css("visibility", "visible"), setTimeout(function () {
                    d.filter(".edgtf-active").next().addClass("edgtf-next")
                }, 200), e.on("click", function (e) {
                    a.hasClass("edgtf-animating") || o()
                }), e.on("mouseenter", function () {
                    a.addClass("edgtf-peek")
                }).on("mouseleave", function () {
                    a.removeClass("edgtf-peek")
                }), a.hasClass("edgtf-fsc-slide-on-scroll") && !edgtf.htmlEl.hasClass("touch") && (a.mousewheel(function (e) {
                    e.preventDefault(), a.hasClass("edgtf-animating") || -1 == (e.deltaY < 0 ? -1 : 1) && o()
                }), a.on("wheel", function () {
                    return !1
                })), i()
            }), n(window).resize(function () {
                t()
            })
        })
    }(edgtf.modules.fullscreenCarousel = e).edgtfInitFullscreenCarousel = a, e.edgtfOnDocumentReady = t, n(document).ready(t)
}(jQuery),
function (c) {
    "use strict";
    var e = {};

    function t() {
        a()
    }

    function a() {
        var e = c(".edgtf-google-map");
        e.length && e.each(function () {
            var e, t, a, d, o, i, n, s, r, l, f = c(this),
                g = !1;
            void 0 !== f.data("predefined-style") && "yes" === f.data("predefined-style") && (g = !0), void 0 !== f.data("custom-map-style") && (e = f.data("custom-map-style")), void 0 !== f.data("color-overlay") && !1 !== f.data("color-overlay") && (t = f.data("color-overlay")), void 0 !== f.data("saturation") && !1 !== f.data("saturation") && (a = f.data("saturation")), void 0 !== f.data("lightness") && !1 !== f.data("lightness") && (d = f.data("lightness")), void 0 !== f.data("zoom") && !1 !== f.data("zoom") && (o = f.data("zoom")), void 0 !== f.data("pin") && !1 !== f.data("pin") && (i = f.data("pin")), void 0 !== f.data("height") && !1 !== f.data("height") && (n = f.data("height")), void 0 !== f.data("unique-id") && !1 !== f.data("unique-id") && (s = f.data("unique-id")), void 0 !== f.data("scroll-wheel") && (r = f.data("scroll-wheel")), void 0 !== f.data("addresses") && !1 !== f.data("addresses") && (l = f.data("addresses")),
                function (e, t, a, d, o, i, n, s, r, l, f, g, c) {
                    if ("object" != typeof google) return;
                    var u, h = [];
                    h = e ? [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#e9e9e9"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                            color: "#dedede"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#333333"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f2f2f2"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }] : [{
                        stylers: [{
                            hue: a
                        }, {
                            saturation: d
                        }, {
                            lightness: o
                        }, {
                            gamma: 1
                        }]
                    }];
                    u = e || "yes" === t ? "edgtf-style" : google.maps.MapTypeId.ROADMAP;
                    i = "yes" === i;
                    var p = new google.maps.StyledMapType(h, {
                        name: "Edge Google Map"
                    });
                    g = new google.maps.Geocoder;
                    var m = new google.maps.LatLng(-34.397, 150.644);
                    isNaN(r) || (r += "px");
                    var v, y = {
                        zoom: n,
                        scrollwheel: i,
                        center: m,
                        zoomControl: !0,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.SMALL,
                            position: google.maps.ControlPosition.RIGHT_CENTER
                        },
                        scaleControl: !1,
                        scaleControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        streetViewControl: !1,
                        streetViewControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        panControl: !1,
                        panControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeControl: !1,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "edgtf-style"],
                            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeId: u
                    };
                    for ((f = new google.maps.Map(document.getElementById(s), y)).mapTypes.set("edgtf-style", p), v = 0; v < c.length; ++v) b(c[v], l, f, g);
                    document.getElementById(s).style.height = r
                }(g, e, t, a, d, r, o, "edgtf-map-" + s, n, i, "map_" + s, "geocoder_" + s, l)
        })
    }

    function b(d, o, i, e) {
        if ("" !== d) {
            var t = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + d + "</p></div></div>",
                n = new google.maps.InfoWindow({
                    content: t
                });
            e.geocode({
                address: d
            }, function (e, t) {
                if (t === google.maps.GeocoderStatus.OK) {
                    i.setCenter(e[0].geometry.location);
                    var a = new google.maps.Marker({
                        map: i,
                        position: e[0].geometry.location,
                        icon: o,
                        title: d.store_title
                    });
                    google.maps.event.addListener(a, "click", function () {
                        n.open(i, a)
                    }), google.maps.event.addDomListener(window, "resize", function () {
                        i.setCenter(e[0].geometry.location)
                    })
                }
            })
        }
    }(edgtf.modules.googleMap = e).edgtfShowGoogleMap = a, e.edgtfOnDocumentReady = t, c(document).ready(t)
}(jQuery),
function (t) {
    "use strict";
    var e = {};

    function a() {
        d().init()
    }(edgtf.modules.icon = e).edgtfIcon = d, e.edgtfOnDocumentReady = a, t(document).ready(a);
    var d = function () {
        var e = t(".edgtf-icon-shortcode");
        return {
            init: function () {
                e.length && e.each(function () {
                    var e;
                    (e = t(this)).hasClass("edgtf-icon-animation") && e.appear(function () {
                            e.parent(".edgtf-icon-animation-holder").addClass("edgtf-icon-animation-show")
                        }, {
                            accX: 0,
                            accY: edgtfGlobalVars.vars.edgtfElementAppearAmount
                        }),
                        function (e) {
                            if (void 0 !== e.data("hover-color")) {
                                var t = function (e) {
                                        e.data.icon.css("color", e.data.color)
                                    },
                                    a = e.find(".edgtf-icon-element"),
                                    d = e.data("hover-color"),
                                    o = a.css("color");
                                "" !== d && (e.on("mouseenter", {
                                    icon: a,
                                    color: d
                                }, t), e.on("mouseleave", {
                                    icon: a,
                                    color: o
                                }, t))
                            }
                        }(t(this)),
                        function (e) {
                            if (void 0 !== e.data("hover-background-color")) {
                                var t = function (e) {
                                        e.data.icon.css("background-color", e.data.color)
                                    },
                                    a = e.data("hover-background-color"),
                                    d = e.css("background-color");
                                "" !== a && (e.on("mouseenter", {
                                    icon: e,
                                    color: a
                                }, t), e.on("mouseleave", {
                                    icon: e,
                                    color: d
                                }, t))
                            }
                        }(t(this)),
                        function (e) {
                            if (void 0 !== e.data("hover-border-color")) {
                                var t = function (e) {
                                        e.data.icon.css("border-color", e.data.color)
                                    },
                                    a = e.data("hover-border-color"),
                                    d = e.css("borderTopColor");
                                "" !== a && (e.on("mouseenter", {
                                    icon: e,
                                    color: a
                                }, t), e.on("mouseleave", {
                                    icon: e,
                                    color: d
                                }, t))
                            }
                        }(t(this))
                })
            }
        }
    }
}(jQuery),
function (t) {
    "use strict";
    var e = {};

    function a() {
        d().init()
    }(edgtf.modules.iconListItem = e).edgtfInitIconList = d, e.edgtfOnDocumentReady = a, t(document).ready(a);
    var d = function () {
        var e = t(".edgtf-animate-list");
        return {
            init: function () {
                e.length && e.each(function () {
                    var e;
                    e = t(this), setTimeout(function () {
                        e.appear(function () {
                            e.addClass("edgtf-appeared")
                        }, {
                            accX: 0,
                            accY: edgtfGlobalVars.vars.edgtfElementAppearAmount
                        })
                    }, 30)
                })
            }
        }
    }
}(jQuery),
function (t) {
    "use strict";
    var e = {};

    function a() {
        d()
    }

    function d() {
        var e = t(".edgtf-image-gallery.edgtf-ig-masonry-type");
        e.length && e.each(function () {
            var e = t(this).find(".edgtf-ig-masonry");
            e.waitForImages(function () {
                e.isotope({
                    layoutMode: "packery",
                    itemSelector: ".edgtf-ig-image",
                    percentPosition: !0,
                    packery: {
                        gutter: ".edgtf-ig-grid-gutter",
                        columnWidth: ".edgtf-ig-grid-sizer"
                    }
                }), setTimeout(function () {
                    e.isotope("layout"), edgtf.modules.common.edgtfInitParallax()
                }, 800), e.css("opacity", "1")
            })
        })
    }(edgtf.modules.imageGallery = e).edgtfInitImageGalleryMasonry = d, e.edgtfOnWindowLoad = a, t(window).load(a)
}(jQuery),
function (t) {
    "use strict";
    var e = {};

    function a() {
        d()
    }

    function d() {
        var e = t(".edgtf-info-boxes-holder");
        e.length && edgtf.htmlEl.hasClass("touch") && e.on("click", function () {
            t(this).toggleClass("edgtf-ib-touch-anim")
        })
    }(edgtf.modules.infoBox = e).edgtfInfoBoxAnimation = d, e.edgtfOnDocumentReady = a, t(document).ready(a)
}(jQuery),
function (t) {
    "use strict";
    var e = {};

    function a() {
        d()
    }

    function d() {
        var e = t(".edgtf-link-section-holder.edgtf-appear-fx");
        e.length && !edgtf.htmlEl.hasClass("touch") && e.appear(function () {
            t(this).addClass("edgtf-appear")
        })
    }(edgtf.modules.linkSection = e).edgtfLinkSectionAnimation = d, e.edgtfOnDocumentReady = a, t(document).ready(a)
}(jQuery),
function (t) {
    "use strict";
    var e = {};

    function a() {
        d()
    }

    function d() {
        var e = t(".edgtf-pie-chart-holder");
        e.length && e.each(function () {
            var a = t(this),
                d = a.children(".edgtf-pc-percentage"),
                o = "#25abd1",
                i = "#f7f7f7",
                n = 176;
            void 0 !== d.data("size") && "" !== d.data("size") && (n = d.data("size")), void 0 !== d.data("bar-color") && "" !== d.data("bar-color") && (o = d.data("bar-color")), void 0 !== d.data("track-color") && "" !== d.data("track-color") && (i = d.data("track-color")), d.appear(function () {
                var e, t;
                e = d.find(".edgtf-pc-percent"), t = parseFloat(e.text()), e.countTo({
                    from: 0,
                    to: t,
                    speed: 1500,
                    refreshInterval: 50
                }), a.css("opacity", "1"), d.easyPieChart({
                    barColor: o,
                    trackColor: i,
                    scaleColor: !1,
                    lineCap: "butt",
                    lineWidth: 4,
                    animate: 1500,
                    size: n
                })
            }, {
                accX: 0,
                accY: edgtfGlobalVars.vars.edgtfElementAppearAmount
            })
        })
    }(edgtf.modules.pieChart = e).edgtfInitPieChart = d, e.edgtfOnDocumentReady = a, t(document).ready(a)
}(jQuery),
function (t) {
    "use strict";
    var e = {};

    function a() {
        d()
    }

    function d() {
        var e = t(".edgtf-process-holder");
        e.length && e.each(function () {
            var e = t(this);
            e.appear(function () {
                e.addClass("edgtf-process-appeared")
            }, {
                accX: 0,
                accY: edgtfGlobalVars.vars.edgtfElementAppearAmount
            })
        })
    }(edgtf.modules.process = e).edgtfInitProcess = d, e.edgtfOnDocumentReady = a, t(document).ready(a)
}(jQuery),
function (n) {
    "use strict";
    var e = {};

    function t() {
        a()
    }

    function a() {
        var e = n(".edgtf-progress-bar");
        e.length && e.each(function (e) {
            var d = n(this),
                o = d.find(".edgtf-pb-content"),
                i = o.data("percentage");
            o.css("width", "0%"), d.appear(function () {
                setTimeout(function () {
                    var e, a, t;
                    o.css({
                        width: i + "%"
                    }), e = d, a = parseFloat(i), (t = e.find(".edgtf-pb-percent")).length && t.each(function (e) {
                        var t = n(this);
                        t.countTo({
                            from: 0,
                            to: a,
                            speed: 1e3,
                            refreshInterval: 50
                        })
                    })
                }, 100 * e)
            })
        })
    }(edgtf.modules.progressBar = e).edgtfInitProgressBars = a, e.edgtfOnDocumentReady = t, n(document).ready(t)
}(jQuery),
function (t) {
    "use strict";
    var e = {};

    function a() {
        d()
    }

    function d() {
        var e = t(".edgtf-st-square.edgtf-appear-fx");
        e.length && !edgtf.htmlEl.hasClass("touch") && e.appear(function () {
            t(this).addClass("edgtf-appear")
        })
    }(edgtf.modules.sectionTitle = e).edgtfSectionTitleAnimation = d, e.edgtfOnDocumentReady = a, t(document).ready(a)
}(jQuery),
function (i) {
    "use strict";
    var e = {};

    function t() {
        a()
    }

    function a() {
        var e = i(".edgtf-tabs");
        e.length && e.each(function () {
            var e = i(this);
            e.children(".edgtf-tab-container").each(function (e) {
                e += 1;
                var t = i(this),
                    a = t.attr("id"),
                    d = t.parent().find(".edgtf-tabs-nav li:nth-child(" + e + ") a"),
                    o = d.attr("href"); - 1 < (a = "#" + a).indexOf(o) && d.attr("href", a)
            }), e.tabs(), i(".edgtf-tabs a.edgtf-external-link").unbind("click")
        })
    }(edgtf.modules.tabs = e).edgtfInitTabs = a, e.edgtfOnDocumentReady = t, i(document).ready(t)
}(jQuery),
function (r) {
    "use strict";
    var e = {};

    function t() {
        a()
    }

    function a() {
        var n = r(".edgtf-vertical-split-slider");
        if (n.length) {
            edgtf.body.hasClass("edgtf-vss-initialized") && (edgtf.body.removeClass("edgtf-vss-initialized"), r.fn.multiscroll.destroy()), n.height(edgtf.windowHeight).animate({
                opacity: 1
            }, 300);
            var s = "";
            edgtf.body.hasClass("edgtf-light-header") ? s = "light" : edgtf.body.hasClass("edgtf-dark-header") && (s = "dark"), n.multiscroll({
                scrollingSpeed: 700,
                easing: "easeInOutQuart",
                navigation: !0,
                useAnchorsOnLoad: !1,
                sectionSelector: ".edgtf-vss-ms-section",
                leftSelector: ".edgtf-vss-ms-left",
                rightSelector: ".edgtf-vss-ms-right",
                afterRender: function () {
                    l(r(".edgtf-vss-ms-left .edgtf-vss-ms-section:last-child").data("header-style"), s), edgtf.body.addClass("edgtf-vss-initialized");
                    var e = r("div.wpcf7 > form");
                    e.length && e.each(function () {
                        var t = r(this);
                        t.find(".wpcf7-submit").off().on("click", function (e) {
                            e.preventDefault(), wpcf7.submit(t)
                        })
                    });
                    var t = r('<div class="edgtf-vss-responsive"></div>'),
                        a = n.find(".edgtf-vss-ms-left > div"),
                        d = n.find(".edgtf-vss-ms-right > div");
                    n.after(t);
                    for (var o = 0; o < a.length; o++) t.append(r(a[o]).clone(!0)), t.append(r(d[a.length - 1 - o]).clone(!0));
                    var i = r(".edgtf-vss-responsive .edgtf-google-map");
                    i.length && i.each(function () {
                        var e = r(this);
                        e.empty();
                        var t = Math.floor(1e5 * Math.random() + 1);
                        e.attr("id", "edgtf-map-" + t), e.data("unique-id", t)
                    }), "function" == typeof edgtf.modules.animationHolder.edgtfInitAnimationHolder && edgtf.modules.animationHolder.edgtfInitAnimationHolder(), "function" == typeof edgtf.modules.button.edgtfButton && edgtf.modules.button.edgtfButton().init(), "function" == typeof edgtf.modules.elementsHolder.edgtfInitElementsHolderResponsiveStyle && edgtf.modules.elementsHolder.edgtfInitElementsHolderResponsiveStyle(), "function" == typeof edgtf.modules.googleMap.edgtfShowGoogleMap && edgtf.modules.googleMap.edgtfShowGoogleMap(), "function" == typeof edgtf.modules.icon.edgtfIcon && edgtf.modules.icon.edgtfIcon().init(), "function" == typeof edgtf.modules.progressBar.edgtfInitProgressBars && edgtf.modules.progressBar.edgtfInitProgressBars()
                },
                onLeave: function (e, t) {
                    var a, d;
                    d = t, (a = n).hasClass("edgtf-vss-scrolling-animation") && (1 < d && !a.hasClass("edgtf-vss-scrolled") ? a.addClass("edgtf-vss-scrolled") : 1 === d && a.hasClass("edgtf-vss-scrolled") && a.removeClass("edgtf-vss-scrolled")), l(r(r(".edgtf-vss-ms-left .edgtf-vss-ms-section")[r(".edgtf-vss-ms-left .edgtf-vss-ms-section").length - t]).data("header-style"), s)
                }
            }), edgtf.windowWidth <= 1024 ? r.fn.multiscroll.destroy() : r.fn.multiscroll.build(), r(window).resize(function () {
                edgtf.windowWidth <= 1024 ? r.fn.multiscroll.destroy() : r.fn.multiscroll.build()
            })
        }
    }

    function l(e, t) {
        void 0 !== e && "" !== e ? edgtf.body.removeClass("edgtf-light-header edgtf-dark-header").addClass("edgtf-" + e + "-header") : "" !== t ? edgtf.body.removeClass("edgtf-light-header edgtf-dark-header").addClass("edgtf-" + t + "-header") : edgtf.body.removeClass("edgtf-light-header edgtf-dark-header")
    }(edgtf.modules.verticalSplitSlider = e).edgtfInitVerticalSplitSlider = a, e.edgtfOnDocumentReady = t, r(document).ready(t)
}(jQuery),
function (u) {
    "use strict";
    var e = {};

    function t() {
        var e;
        (e = u(".edgtf-portfolio-section-holder")).length && e.each(function () {
            var e = u(this),
                t = e.find(".edgtf-section-item"),
                a = e.find(".edgtf-section-link"),
                d = e.find(".edgtf-portfolio-section-image-holder .edgtf-image-url-holder-inner");
            t.eq(0).addClass("hovered"), d.eq(0).addClass("hovered"), edgtf.htmlEl.hasClass("touch") && (a.eq(0).addClass("active"), a.each(function () {
                var t = u(this);
                t.on("click", function (e) {
                    t.hasClass("active") || (e.preventDefault(), a.removeClass("active"), t.addClass("active"))
                })
            })), t.each(function (t) {
                var a = u(this);
                a.on("mouseover", function () {
                    var e = d.eq(t);
                    a.hasClass("hovered") || (a.siblings().removeClass("hovered"), e.siblings().removeClass("hovered"), a.addClass("hovered"), e.addClass("hovered"))
                })
            })
        })
    }

    function a() {
        var e, t, a, d, o, i;
        n(), (e = u(".edgtf-portfolio-list-holder .edgtf-pl-filter-holder")).length && e.each(function () {
            var o = u(this),
                i = o.closest(".edgtf-portfolio-list-holder"),
                n = i.find(".edgtf-pl-inner"),
                s = !!i.hasClass("edgtf-pl-pag-load-more");
            o.find(".edgtf-pl-filter:first").addClass("edgtf-pl-current"), i.hasClass("edgtf-pl-gallery") && n.isotope(), o.find(".edgtf-pl-filter").click(function () {
                var e = u(this),
                    t = e.attr("data-filter"),
                    a = t.length ? t.substring(1) : "",
                    d = !!n.children().hasClass(a);
                e.parent().children(".edgtf-pl-filter").removeClass("edgtf-pl-current"), e.addClass("edgtf-pl-current"), s && !d && t.length ? function d(e, t, a) {
                    var o = e,
                        i = o.find(".edgtf-pl-inner"),
                        n = t,
                        s = a,
                        r = 0;
                    void 0 !== o.data("max-num-pages") && !1 !== o.data("max-num-pages") && (r = o.data("max-num-pages"));
                    var l = edgtf.modules.common.getLoadMoreData(o),
                        f = l.nextPage,
                        g = edgtf.modules.common.setLoadMoreAjaxData(l, "edgtf_core_portfolio_ajax_load_more"),
                        c = o.find(".edgtf-pl-loading");
                    f <= r && (c.addClass("edgtf-showing edgtf-filter-trigger"), i.css("opacity", "0"), u.ajax({
                        type: "POST",
                        data: g,
                        url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                        success: function (e) {
                            f++, o.data("next-page", f);
                            var t = u.parseJSON(e),
                                a = t.html;
                            o.waitForImages(function () {
                                i.append(a).isotope("reloadItems").isotope({
                                    sortBy: "original-order"
                                });
                                var e = !!i.children().hasClass(s);
                                e ? setTimeout(function () {
                                    p(i.find(".edgtf-pl-grid-sizer").width(), o), i.isotope("layout").isotope({
                                        filter: n
                                    }), c.removeClass("edgtf-showing edgtf-filter-trigger"), setTimeout(function () {
                                        i.css("opacity", "1"), h(), edgtf.modules.common.edgtfInitParallax()
                                    }, 150)
                                }, 400) : (c.removeClass("edgtf-showing edgtf-filter-trigger"), d(o, n, s))
                            })
                        }
                    }))
                }(i, t, a) : (t = 0 === t.length ? "*" : t, o.parent().children(".edgtf-pl-inner").isotope({
                    filter: t
                }), edgtf.modules.common.edgtfInitParallax())
            })
        }), (t = u(".edgtf-portfolio-single-holder .edgtf-ps-masonry-images").children()).length && (t.isotope({
            layoutMode: "packery",
            itemSelector: ".edgtf-ps-image",
            percentPosition: !0,
            packery: {
                gutter: ".edgtf-ps-grid-gutter",
                columnWidth: ".edgtf-ps-grid-sizer"
            }
        }), t.css("opacity", "1")), h(), s().init(), r().init(), (a = u(".edgtf-fullscreen-portfolio-grid-holder")).length && a.each(function () {
            var e = u(this),
                t = e.find(".edgtf-fpg-item"),
                a = e.find(".edgtf-fpgi-link"),
                d = e.find(".edgtf-fpg-image-holder .edgtf-image-url-holder-inner");
            t.eq(0).addClass("hovered"), d.eq(0).addClass("hovered"), edgtf.htmlEl.hasClass("touch") && (a.eq(0).addClass("active"), a.each(function () {
                var t = u(this);
                t.on("click", function (e) {
                    t.hasClass("active") || (e.preventDefault(), a.removeClass("active"), t.addClass("active"))
                })
            })), t.each(function (t) {
                var a = u(this);
                a.on("mouseover", function () {
                    var e = d.eq(t);
                    a.hasClass("hovered") || (a.siblings().removeClass("hovered"), e.siblings().removeClass("hovered"), a.addClass("hovered"), e.addClass("hovered"))
                })
            })
        }), l(), (d = u(".edgtf-portfolio-fullscreen-slider-holder")).length && d.each(function () {
            var e = u(this),
                t = e.find(".edgtf-pfs-item"),
                a = e.find(".edgtf-pfs-link"),
                d = e.find(".edgtf-pfs-image-holder .edgtf-pfs-image-holder-item"),
                o = e.find(".edgtf-pfs-articles-holder"),
                i = e.find(".swiper-container"),
                n = 0,
                s = u(".edgtf-mobile-header").height();
            t.eq(0).addClass("hovered"), d.eq(0).addClass("hovered"), edgtf.htmlEl.hasClass("touch") && (a.eq(0).addClass("active"), a.each(function () {
                var t = u(this);
                t.on("click", function (e) {
                    t.hasClass("active") || (e.preventDefault(), a.removeClass("active"), t.addClass("active"))
                })
            })), t.each(function (t) {
                var a = u(this);
                a.on("mouseover", function () {
                    var e = d.eq(t);
                    a.hasClass("hovered") || (a.siblings().removeClass("hovered"), e.siblings().removeClass("hovered"), a.addClass("hovered"), e.addClass("hovered"))
                })
            }), edgtf.htmlEl.hasClass("touch") && e.css("height", "calc(100vh - " + s + "px)"), n = .3 * -edgtf.windowHeight, edgtf.windowWidth <= 1300 && (n = .6 * -edgtf.windowHeight), edgtf.windowWidth <= 1025 && (n = .3 * -edgtf.windowHeight), edgtf.htmlEl.hasClass("touch") && t.each(function () {
                u(this).css("min-height", u(this).outerHeight())
            }), new Swiper(i, {
                loop: !1,
                initialSlide: 0,
                slidesOffsetBefore: n,
                slidesPerView: "auto",
                centeredSlides: !0,
                speed: 600,
                direction: "vertical",
                mousewheelControl: !0,
                preventClicks: !0,
                preventClicksPropagation: !1,
                onInit: function () {
                    e.addClass("edgtf-initialized")
                },
                onSlideChangeEnd: function (e) {
                    var t = o.find(".edgtf-pfs-item").last();
                    t.offset().top + t.height() <= edgtf.windowHeight ? e.lockSwipeToNext() : e.unlockSwipeToNext()
                }
            })
        }), f().init(), (o = u(".edgtf-ptf-list-showcase-meta-inner")).length && o.niceScroll({
            scrollspeed: 60,
            mousescrollstep: 40,
            cursorwidth: 0,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            autohidemode: !1,
            horizrailenabled: !1
        }), g().init(), (i = u(".edgtf-portfolio-project-info.edgtf-appear-fx")).length && !edgtf.htmlEl.hasClass("touch") && i.appear(function () {
            u(this).addClass("edgtf-appear")
        })
    }

    function d() {
        n(), l()
    }

    function o() {
        s().scroll()
    }

    function h() {
        var e = u(".edgtf-portfolio-list-holder.edgtf-pl-has-animation");
        e.length && e.each(function () {
            u(this).children(".edgtf-pl-inner").children("article").each(function (e) {
                var t = u(this);
                t.appear(function () {
                    t.addClass("edgtf-item-show"), setTimeout(function () {
                        t.addClass("edgtf-item-shown")
                    }, 1e3)
                }, {
                    accX: 0,
                    accY: 0
                })
            })
        })
    }

    function n() {
        var e = u(".edgtf-portfolio-list-holder.edgtf-pl-masonry");
        e.length && e.each(function () {
            var e = u(this),
                t = e.children(".edgtf-pl-inner");
            p(e.find(".edgtf-pl-grid-sizer").width(), e), t.isotope({
                layoutMode: "packery",
                itemSelector: "article",
                percentPosition: !0,
                packery: {
                    gutter: ".edgtf-pl-grid-gutter",
                    columnWidth: ".edgtf-pl-grid-sizer"
                }
            }), setTimeout(function () {
                edgtf.modules.common.edgtfInitParallax()
            }, 600), t.css("opacity", "1")
        })
    }

    function p(e, t) {
        if (t.hasClass("edgtf-pl-images-fixed")) {
            var a = parseInt(t.find("article").css("padding-left")),
                d = t.find(".edgtf-pl-masonry-default"),
                o = t.find(".edgtf-pl-masonry-large-width"),
                i = t.find(".edgtf-pl-masonry-large-height"),
                n = t.find(".edgtf-pl-masonry-large-width-height");
            680 < edgtf.windowWidth ? (d.css("height", e - 2 * a), i.css("height", Math.round(2 * e) - 2 * a), n.css("height", Math.round(2 * e) - 2 * a), o.css("height", e - 2 * a)) : (d.css("height", e), i.css("height", e), n.css("height", e), o.css("height", Math.round(e / 2)))
        }
    }

    function s() {
        var e = u(".edgtf-portfolio-list-holder"),
            o = function (e) {
                var t = e.outerHeight() + e.offset().top - edgtfGlobalVars.vars.edgtfAddForAdminBar;
                !e.hasClass("edgtf-pl-infinite-scroll-started") && edgtf.scroll + edgtf.windowHeight > t && i(e)
            },
            i = function (a, d) {
                var o, i, n = a.find(".edgtf-pl-inner");
                void 0 !== a.data("max-num-pages") && !1 !== a.data("max-num-pages") && (i = a.data("max-num-pages")), a.hasClass("edgtf-pl-pag-standard") && a.data("next-page", d), a.hasClass("edgtf-pl-pag-infinite-scroll") && a.addClass("edgtf-pl-infinite-scroll-started");
                var e = edgtf.modules.common.getLoadMoreData(a),
                    s = a.find(".edgtf-pl-loading");
                if ((o = e.nextPage) <= i || 0 == i) {
                    a.hasClass("edgtf-pl-pag-standard") ? (s.addClass("edgtf-showing edgtf-standard-pag-trigger"), a.addClass("edgtf-pl-pag-standard-animate")) : s.addClass("edgtf-showing");
                    var t = edgtf.modules.common.setLoadMoreAjaxData(e, "edgtf_core_portfolio_ajax_load_more");
                    u.ajax({
                        type: "POST",
                        data: t,
                        url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                        success: function (e) {
                            a.hasClass("edgtf-pl-pag-standard") || o++, a.data("next-page", o);
                            var t = u.parseJSON(e).html;
                            a.hasClass("edgtf-pl-pag-standard") ? (r(a, i, o), a.waitForImages(function () {
                                a.hasClass("edgtf-pl-masonry") ? l(a, n, s, t) : a.hasClass("edgtf-pl-gallery") && a.hasClass("edgtf-pl-has-filter") ? l(a, n, s, t) : f(a, n, s, t)
                            })) : a.waitForImages(function () {
                                a.hasClass("edgtf-pl-masonry") ? 1 == d ? l(a, n, s, t) : g(a, n, s, t) : a.hasClass("edgtf-pl-gallery") && a.hasClass("edgtf-pl-has-filter") && 1 != d ? g(a, n, s, t) : c(n, s, t)
                            }), a.hasClass("edgtf-pl-infinite-scroll-started") && a.removeClass("edgtf-pl-infinite-scroll-started")
                        }
                    })
                }
                o === i && a.find(".edgtf-pl-load-more-holder").hide()
            },
            r = function (e, t, a) {
                var d = e.find(".edgtf-pl-standard-pagination"),
                    o = d.find("li.edgtf-pl-pag-number"),
                    i = d.find("li.edgtf-pl-pag-prev a"),
                    n = d.find("li.edgtf-pl-pag-next a");
                o.removeClass("edgtf-pl-pag-active"), o.eq(a - 1).addClass("edgtf-pl-pag-active"), i.data("paged", a - 1), n.data("paged", a + 1), 1 < a ? i.css({
                    opacity: "1"
                }) : i.css({
                    opacity: "0"
                }), a === t ? n.css({
                    opacity: "0"
                }) : n.css({
                    opacity: "1"
                })
            },
            l = function (e, t, a, d) {
                t.find("article").remove(), t.append(d), p(t.find(".edgtf-pl-grid-sizer").width(), e), t.isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), a.removeClass("edgtf-showing edgtf-standard-pag-trigger"), e.removeClass("edgtf-pl-pag-standard-animate"), setTimeout(function () {
                    t.isotope("layout"), h(), edgtf.modules.common.edgtfInitParallax()
                }, 600)
            },
            f = function (e, t, a, d) {
                a.removeClass("edgtf-showing edgtf-standard-pag-trigger"), e.removeClass("edgtf-pl-pag-standard-animate"), t.html(d), h(), edgtf.modules.common.edgtfInitParallax()
            },
            g = function (e, t, a, d) {
                t.append(d), p(t.find(".edgtf-pl-grid-sizer").width(), e), t.isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), a.removeClass("edgtf-showing"), setTimeout(function () {
                    t.isotope("layout"), h(), edgtf.modules.common.edgtfInitParallax()
                }, 600)
            },
            c = function (e, t, a) {
                t.removeClass("edgtf-showing"), e.append(a), h(), edgtf.modules.common.edgtfInitParallax()
            };
        return {
            init: function () {
                e.length && e.each(function () {
                    var d, e, t, a = u(this);
                    a.hasClass("edgtf-pl-pag-standard") && (e = (d = a).find(".edgtf-pl-standard-pagination li")).length && e.each(function () {
                        var t = u(this).children("a"),
                            a = 1;
                        t.on("click", function (e) {
                            e.preventDefault(), e.stopPropagation(), void 0 !== t.data("paged") && !1 !== t.data("paged") && (a = t.data("paged")), i(d, a)
                        })
                    }), a.hasClass("edgtf-pl-pag-load-more") && (t = a).find(".edgtf-pl-load-more a").on("click", function (e) {
                        e.preventDefault(), e.stopPropagation(), i(t)
                    }), a.hasClass("edgtf-pl-pag-infinite-scroll") && o(a)
                })
            },
            scroll: function () {
                e.length && e.each(function () {
                    var e = u(this);
                    e.hasClass("edgtf-pl-pag-infinite-scroll") && o(e)
                })
            },
            getMainPagFunction: function (e, t) {
                i(e, t)
            }
        }
    }(edgtf.modules.portfolio = e).edgtfOnDocumentReady = t, e.edgtfOnWindowLoad = a, e.edgtfOnWindowResize = d, e.edgtfOnWindowScroll = o, u(document).ready(t), u(window).load(a), u(window).resize(d), u(window).scroll(o);
    var r = function () {
        var t = u(".edgtf-follow-portfolio-info .edgtf-portfolio-single-holder .edgtf-ps-info-sticky-holder");
        if (t.length) var e = t.parent(),
            a = e.offset().top,
            d = e.height(),
            o = u(".edgtf-ps-image-holder").height(),
            i = u(".header-appear, .edgtf-fixed-wrapper"),
            n = i.length ? i.height() : 0;
        return {
            init: function () {
                ! function () {
                    if (t.length && d < o && edgtf.scroll > a) {
                        var e = edgtf.scroll - a + edgtfGlobalVars.vars.edgtfAddForAdminBar + n;
                        o < e + d && (e = o - d), t.stop().css({
                            transform: "translate3d(0px, " + e + " px, 0px)"
                        })
                    }
                }(), u(window).scroll(function () {
                    t.length && d < o && (edgtf.scroll > a ? edgtf.scroll + n + edgtfGlobalVars.vars.edgtfAddForAdminBar + d + 50 < a + o ? (u(".header-appear, .edgtf-fixed-wrapper").length && (n = u(".header-appear, .edgtf-fixed-wrapper").height()), t.stop().css({
                        transform: "translate3d(0px, " + (edgtf.scroll - a + edgtfGlobalVars.vars.edgtfAddForAdminBar + n) + "px, 0px)"
                    }), n = 0) : t.stop().css({
                        transform: "translate3d(0px, " + (o - d) + "px, 0px)"
                    }) : t.stop().css({
                        transform: "translate3d(0,0,0)"
                    }))
                })
            }
        }
    };

    function l() {
        var e = u(".edgtf-fullscreen-portfolio-grid-holder");
        e.length && e.each(function () {
            var e, t, a, d, o, i = u(this),
                n = i.find(".edgtf-fpg-holder-inner"),
                s = i.find(".edgtf-fpg-item"),
                r = u(".edgtf-mobile-header").height();
            edgtf.htmlEl.hasClass("touch") && i.css("height", "calc(100vh - " + r + "px)"), e = i.height(), void 0 !== i.data("col-number") && "" !== i.data("col-number") && (t = i.data("col-number")), void 0 !== i.data("number-of-posts") && "" !== i.data("number-of-posts") && (a = i.data("number-of-posts")), edgtf.windowWidth <= 480 ? t = 1 : edgtf.windowWidth <= 768 && 2 < t && (t = 2), 0 !== a && (d = Math.ceil(a / t)), o = e / d, edgtf.windowWidth <= 480 && (o = "auto"), s.each(function (e) {
                u(this).height(o)
            }), n.height() > e + 2 && i.css("height", "auto"), i.css("opacity", 1)
        })
    }
    var f = function () {
        var e = u(".edgtf-pl-scrollable"),
            l = "";
        l = u(".edgtf-fixed-wrapper").length ? ".edgtf-page-header .fixed" : ".edgtf-page-header .header-appear", e.addClass("edgtf-ptf-hovered");
        var f = function (e) {
                var t = e.find(".edgtf-ptf-list-showcase-meta");
                t.find(".edgtf-ptf-list-showcase-meta-inner").css({
                    left: t.offset().left,
                    width: t.width()
                })
            },
            g = function (e) {
                var t = e.find(".edgtf-ptf-list-showcase-meta"),
                    a = t.find(".edgtf-ptf-list-showcase-meta-inner"),
                    d = a.height(),
                    o = e.find(".edgtf-ptf-list-showcase-preview"),
                    i = o.offset().top,
                    n = o.offset().top + o.height(),
                    s = u(l).height() + edgtfGlobalVars.vars.edgtfAddForAdminBar;
                i <= edgtf.scroll + s && n > edgtf.scroll ? (t.hasClass("edgtf-fix-meta") || (t.addClass("edgtf-fix-meta"), f(e)), n < edgtf.scroll + s + d ? (t.addClass("edgtf-fix-bottom"), a.css("top", n - (edgtf.scroll + d))) : (t.removeClass("edgtf-fix-bottom"), a.css("top", s))) : (t.removeClass("edgtf-fix-meta"), t.removeClass("edgtf-fix-bottom"))
            };
        return {
            init: function () {
                e.length && 768 < edgtf.windowWidth && e.each(function () {
                    var e, o, t, a, i, n, d, s, r = u(this);
                    o = (e = r).find(".edgtf-ptf-list-showcase-meta"), t = e.find(".edgtf-ptf-list-showcase-meta-items-holder"), a = e.find(".edgtf-ptf-list-showcase-preview"), i = t.find(".edgtf-ptf-list-showcase-meta-item"), n = a.find(".edgtf-ptf-list-showcase-preview-item"), d = t.find(".edgtf-ptf-meta-item-title a"), s = 1, i.first().addClass("active"), n.first().addClass("active"), n.on("mouseenter", function () {
                        s = u(this).index();
                        var e = u(this);
                        i.removeClass("active"), n.removeClass("active"), i.clearQueue(), i.eq(s).addClass("active"), e.addClass("active")
                    }), i.on("click touch", function () {
                        s = u(this).index();
                        var e = u(this),
                            t = n.eq(s),
                            a = t.offset().top - edgtf.windowHeight / 2 + t.height() / 2,
                            d = o.offset().top - u(l).height();
                        i.removeClass("active"), n.removeClass("active"), n.clearQueue(), e.addClass("active"), t.addClass("active"), 0 == s ? edgtf.html.stop().animate({
                            scrollTop: d
                        }, 1200, "easeOutExpo") : edgtf.html.stop().animate({
                            scrollTop: a
                        }, 1200, "easeOutExpo")
                    }), d.on("click touch", function (e) {
                        u(this).parents(".edgtf-ptf-list-showcase-meta-item").hasClass("active") || e.preventDefault()
                    }), e.on("mouseleave", function () {
                        i.removeClass("active"), n.removeClass("active")
                    }), g(r), f(r), u(window).scroll(function () {
                        g(r)
                    }), u(window).resize(function () {
                        f(r)
                    })
                })
            }
        }
    };
    var g = function () {
        var e = u(".edgtf-portfolio-single-holder.edgtf-ps-split-screen-layout"),
            a = u(".edgtf-portfolio-single-holder.edgtf-ps-split-screen-layout .edgtf-ps-info-holder");
        if (a.length && edgtf.htmlEl.hasClass("no-touch")) var t = a.parent().offset().top,
            d = a.outerHeight() + 100,
            o = u(".edgtf-ps-image").parent(),
            i = o.height(),
            n = u(".edgtf-page-header"),
            s = n.find(".edgtf-fixed-wrapper"),
            r = n.length ? n.height() : 0,
            l = s.length ? s.height() : 0,
            f = r;
        var g = function () {
                if (a.length && edgtf.htmlEl.hasClass("no-touch")) {
                    var e = n.find(".edgtf-sticky-header");
                    if (e.length)
                        if (e.hasClass("header-appear")) f = edgtfGlobalVars.vars.edgtfStickyHeaderTransparencyHeight + edgtfGlobalVars.vars.edgtfAddForAdminBar;
                        else {
                            var t = 0 < r - edgtf.scroll;
                            f = t ? edgtfGlobalVars.vars.edgtfAddForAdminBar + r - 5 : 24
                        }
                    else s.length && (f = edgtfGlobalVars.vars.edgtfAddForAdminBar + l);
                    a.length && d < i && edgtf.htmlEl.hasClass("no-touch") && a.css("top", f + "px")
                }
            },
            c = function () {
                a.length && edgtf.htmlEl.hasClass("no-touch") ? (d = a.outerHeight() + 30, i = o.height(), d < i && edgtf.htmlEl.hasClass("no-touch") && (s.length && (r = l), edgtf.scroll >= t - r - edgtfGlobalVars.vars.edgtfAddForAdminBar ? "fixed" !== a.css("position") && (a.css("position", "fixed"), 0 < edgtf.scroll && (a.addClass("edgtf-animating"), a.one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
                    a.removeClass("edgtf-animating")
                }))) : a.css("position", "static"), t + i <= edgtf.scroll + d + f ? a.stop().css("margin-top", t + i - edgtf.scroll - d - f + "px") : a.css("margin-top", "0")), a.hasClass("edgtf-appeared") || a.addClass("edgtf-appeared")) : edgtf.htmlEl.hasClass("touch") && (a.hasClass("edgtf-appeared") || a.addClass("edgtf-appeared"))
            };
        return {
            init: function () {
                e.length && (a.length && edgtf.htmlEl.hasClass("no-touch") && a.css("width", a.width()), c(), g(), u(window).scroll(function () {
                    c(), g()
                }), u(window).resize(function () {
                    g(), c()
                }))
            }
        }
    }
}(jQuery),
function (t) {
    "use strict";
    var e = {};

    function a() {
        d()
    }

    function d() {
        var e = t(".edgtf-show-info-on-appear .edgtf-team");
        e.length && !edgtf.htmlEl.hasClass("touch") && e.appear(function () {
            var e = t(this);
            setTimeout(function () {
                e.addClass("edgtf-appear")
            }, 240 * parseInt(e.index() % 2 ? 1 : e.index()))
        })
    }(edgtf.modules.team = e).edgtfTeamAnimation = d, e.edgtfOnDocumentReady = a, t(document).ready(a)
}(jQuery),
function (i) {
    "use strict";
    var e = {};

    function t() {
        var e;
        (e = i(".edgtf-testimonials")).length && e.each(function () {
            var e = i(this);
            e.waitForImages(function () {
                e.css("visibility", "visible")
            });
            var t, a = !0,
                d = !0,
                o = 800;
            void 0 !== e.data("enable-autoplay") && "no" === e.data("enable-autoplay") && (a = !1), void 0 !== e.data("animation-speed") && !1 !== e.data("animation-speed") && (o = e.data("animation-speed")), void 0 !== e.data("enable-navigation") && "no" === e.data("enable-navigation") && (d = !1), t = [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: !0
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }], e.slick({
                infinite: !0,
                autoplay: a,
                speed: o,
                slidesToShow: 3,
                arrows: !1,
                dots: d,
                easing: "easeOutQuart",
                dotsClass: "edgtf-slick-dots",
                adaptiveHeight: !0,
                prevArrow: '<span class="edgtf-slick-prev edgtf-prev-icon"><span class="arrow_carrot-left"></span></span>',
                nextArrow: '<span class="edgtf-slick-next edgtf-next-icon"><span class="arrow_carrot-right"></span></span>',
                customPaging: function (e, t) {
                    return '<span class="edgtf-slick-dot-inner"></span>'
                },
                responsive: t
            })
        })
    }(edgtf.modules.testimonialsSlider = e).edgtfOnWindowLoad = t, i(window).load(t)
}(jQuery);;
window.addComment = function (a) {
    function b() {
        c(), g()
    }

    function c(a) {
        if (t && (m = j(r.cancelReplyId), n = j(r.commentFormId), m)) {
            m.addEventListener("touchstart", e), m.addEventListener("click", e);
            for (var b, c = d(a), g = 0, h = c.length; g < h; g++) b = c[g], b.addEventListener("touchstart", f), b.addEventListener("click", f)
        }
    }

    function d(a) {
        var b, c = r.commentReplyClass;
        return a && a.childNodes || (a = q), b = q.getElementsByClassName ? a.getElementsByClassName(c) : a.querySelectorAll("." + c)
    }

    function e(a) {
        var b = this,
            c = r.temporaryFormId,
            d = j(c);
        d && o && (j(r.parentIdFieldId).value = "0", d.parentNode.replaceChild(o, d), b.style.display = "none", a.preventDefault())
    }

    function f(b) {
        var c, d = this,
            e = i(d, "belowelement"),
            f = i(d, "commentid"),
            g = i(d, "respondelement"),
            h = i(d, "postid");
        e && f && g && h && (c = a.addComment.moveForm(e, f, g, h), !1 === c && b.preventDefault())
    }

    function g() {
        if (s) {
            var a = {
                childList: !0,
                subTree: !0
            };
            p = new s(h), p.observe(q.body, a)
        }
    }

    function h(a) {
        for (var b = a.length; b--;)
            if (a[b].addedNodes.length) return void c()
    }

    function i(a, b) {
        return u ? a.dataset[b] : a.getAttribute("data-" + b)
    }

    function j(a) {
        return q.getElementById(a)
    }

    function k(b, c, d, e) {
        var f = j(b);
        o = j(d);
        var g, h, i, k = j(r.parentIdFieldId),
            p = j(r.postIdFieldId);
        if (f && o && k) {
            l(o), e && p && (p.value = e), k.value = c, m.style.display = "", f.parentNode.insertBefore(o, f.nextSibling), m.onclick = function () {
                return !1
            };
            try {
                for (var s = 0; s < n.elements.length; s++)
                    if (g = n.elements[s], h = !1, "getComputedStyle" in a ? i = a.getComputedStyle(g) : q.documentElement.currentStyle && (i = g.currentStyle), (g.offsetWidth <= 0 && g.offsetHeight <= 0 || "hidden" === i.visibility) && (h = !0), "hidden" !== g.type && !g.disabled && !h) {
                        g.focus();
                        break
                    }
            } catch (t) {}
            return !1
        }
    }

    function l(a) {
        var b = r.temporaryFormId,
            c = j(b);
        c || (c = q.createElement("div"), c.id = b, c.style.display = "none", a.parentNode.insertBefore(c, a))
    }
    var m, n, o, p, q = a.document,
        r = {
            commentReplyClass: "comment-reply-link",
            cancelReplyId: "cancel-comment-reply-link",
            commentFormId: "commentform",
            temporaryFormId: "wp-temp-form-div",
            parentIdFieldId: "comment_parent",
            postIdFieldId: "comment_post_ID"
        },
        s = a.MutationObserver || a.WebKitMutationObserver || a.MozMutationObserver,
        t = "querySelector" in q && "addEventListener" in a,
        u = !!q.documentElement.dataset;
    return t && "loading" !== q.readyState ? b() : t && a.addEventListener("DOMContentLoaded", b, !1), {
        init: c,
        moveForm: k
    }
}(window);;
! function (a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function (c) {
                var d = c.data;
                if (d)
                    if (d.secret || d.message || d.value)
                        if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                            var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                                k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                            for (e = 0; e < k.length; e++) k[e].style.display = "none";
                            for (e = 0; e < j.length; e++)
                                if (f = j[e], c.source === f.contentWindow) {
                                    if (f.removeAttribute("style"), "height" === d.message) {
                                        if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                        else if (~~g < 200) g = 200;
                                        f.height = g
                                    }
                                    if ("link" === d.message)
                                        if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                            if (b.activeElement === f) a.top.location.href = d.value
                                } else;
                        }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);;
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function () {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function ($) {
        "function" != typeof window.vc_js && (window.vc_js = function () {
            "use strict";
            vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function ($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function () {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = !0;
                0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
                    animation: sliderFx,
                    slideshow: slideshow,
                    slideshowSpeed: sliderTimeout,
                    sliderSpeed: 800,
                    smoothHeight: !0
                })
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function () {
            0 < jQuery(".wpb_googleplus").length && function () {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function () {
            0 < jQuery(".wpb_pinterest").length && function () {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function () {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function () {
                var $el = jQuery(this);
                $el.vcwaypoint(function () {
                    $el.find(".vc_single_bar").each(function (index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function () {
                            bar.css({
                                width: val + "%"
                            })
                        }, 200 * index)
                    })
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function () {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function () {
                var $el = jQuery(this);
                $el.vcwaypoint(function () {
                    $el.addClass("wpb_start_animation animated")
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function ($el) {
            function event(e) {
                e && e.preventDefault && e.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({
                    duration: 300,
                    complete: function () {
                        element.removeClass("vc_toggle_active")
                    }
                }) : content.slideDown({
                    duration: 300,
                    complete: function () {
                        element.addClass("vc_toggle_active")
                    }
                })
            }
            $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").off("click").on("click", event) : jQuery(".vc_toggle_title").off("click").on("click", event)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function ($tab) {
            if (jQuery.ui) {
                var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                    ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                    old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9;
                $call.each(function (index) {
                    var $tabs, interval = jQuery(this).attr("data-interval"),
                        tabs_array = [];
                    if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                            show: function (event, ui) {
                                wpb_prepare_tab_content(event, ui)
                            },
                            activate: function (event, ui) {
                                wpb_prepare_tab_content(event, ui)
                            }
                        }), interval && 0 < interval) try {
                        $tabs.tabs("rotate", 1e3 * interval)
                    } catch (err) {
                        window.console && window.console.warn && console.warn("tabs behaviours error", err)
                    }
                    jQuery(this).find(".wpb_tab").each(function () {
                        tabs_array.push(this.id)
                    }), jQuery(this).find(".wpb_tabs_nav li").on("click", function (e) {
                        return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                    }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function (e) {
                        var index, length;
                        e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                    })
                })
            }
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function () {
            jQuery(".wpb_accordion").each(function (index) {
                var $tabs, active_tab, collapsible, $this = jQuery(this);
                $this.attr("data-interval"), collapsible = !1 === (active_tab = !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1) || "yes" === $this.data("collapsible"), $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                    header: "> div > h3",
                    autoHeight: !1,
                    heightStyle: "content",
                    active: active_tab,
                    collapsible: collapsible,
                    navigation: !0,
                    activate: vc_accordionActivate,
                    change: function (event, ui) {
                        void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                    }
                }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function () {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function () {
            var layout_modes = {
                fitrows: "fitRows",
                masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function () {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
                }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function (e) {
                    e && e.preventDefault && e.preventDefault();
                    var $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                        filter: jQuery(this).attr("data-filter")
                    })
                }), jQuery(window).bind("load resize", function () {
                    $thumbs.isotope("layout")
                })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function ($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function () {
                var $this = jQuery(this);
                if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
                    $this.data("carousel_enabled", !0);
                    getColumnsCount(jQuery(this));
                    jQuery(this).hasClass("columns_count_1") && 900;
                    var carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                    carousel_li.css({
                        "margin-right": carousel_li.css("margin-left"),
                        "margin-left": 0
                    });
                    var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                    fluid_ul.width(fluid_ul.width() + 300), jQuery(window).on("resize", function () {
                        screen_size != (screen_size = getSizeName()) && window.setTimeout(function () {
                            location.reload()
                        }, 20)
                    })
                }
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function () {
            jQuery(".wpb_gallery_slides").each(function (index) {
                var $imagesGrid, this_element = jQuery(this);
                if (this_element.hasClass("wpb_slider_nivo")) {
                    var sliderTimeout = 1e3 * this_element.attr("data-interval");
                    0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                        effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                        slices: 15,
                        boxCols: 8,
                        boxRows: 4,
                        animSpeed: 800,
                        pauseTime: sliderTimeout,
                        startSlide: 0,
                        directionNav: !0,
                        directionNavHide: !0,
                        controlNav: !0,
                        keyboardNav: !1,
                        pauseOnHover: !0,
                        manualAdvance: !1,
                        prevText: "Prev",
                        nextText: "Next"
                    })
                } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function () {
                    $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows"
                    })
                }) : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function () {
            try {
                jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: "normal",
                    hook: "data-rel",
                    padding: 15,
                    opacity: .7,
                    showTitle: !0,
                    allowresize: !0,
                    counter_separator_label: "/",
                    hideflash: !1,
                    deeplinking: !1,
                    modal: !1,
                    callback: function () {
                        -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                    },
                    social_tools: ""
                })
            } catch (err) {
                window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
        }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function () {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
        }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function () {
            var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function (key, item) {
                    var $el = $(this);
                    $el.addClass("vc_hidden");
                    var $el_full = $el.next(".vc_row-full-width");
                    if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                        var padding, paddingRight, el_margin_left = parseInt($el.css("margin-left"), 10),
                            el_margin_right = parseInt($el.css("margin-right"), 10),
                            offset = 0 - $el_full.offset().left - el_margin_left,
                            width = $(window).width();
                        if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                                position: "relative",
                                left: offset,
                                "box-sizing": "border-box",
                                width: width
                            }), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({
                            "padding-left": padding + "px",
                            "padding-right": paddingRight + "px"
                        });
                        $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                            el: $el,
                            offset: offset,
                            marginLeft: el_margin_left,
                            marginRight: el_margin_right,
                            elFull: $el_full,
                            width: width
                        })
                    }
                }), $(document).trigger("vc-full-width-row", $elements)
            }

            function fullHeightRow() {
                var windowHeight, offsetTop, fullHeight, $element = $(".vc_row-o-full-height:first");
                $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh")));
                $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function () {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function () {
                var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
            }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function () {
                    return !1
                }
            }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function () {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function (el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        });
        var screen_size = getSizeName();

        function getSizeName() {
            var screen_w = jQuery(window).width();
            return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
        }
        "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function (event, ui) {
            var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $line_charts = panel.find(".vc_line-chart"),
                $carousel = panel.find('[data-ride="vc_carousel"]');
            if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                    reload: !1
                }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                    reload: !1
                }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
                var $frame = $google_maps.find("iframe");
                $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
            }
            panel.parents(".isotope").length && panel.parents(".isotope").each(function () {
                jQuery(this).isotope("layout")
            })
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function () {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function (event, ui) {
            if (ui.newPanel.length && ui.newHeader.length) {
                var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
                    $round_charts = ui.newPanel.find(".vc_round-chart"),
                    $line_charts = ui.newPanel.find(".vc_line-chart"),
                    $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
                void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                    reload: !1
                }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                    reload: !1
                }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function () {
                    jQuery(this).isotope("layout")
                })
            }
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function () {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
        }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function () {
            jQuery("[data-vc-video-bg]").each(function () {
                var youtubeUrl, youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function (event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function ($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function () {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function (event) {
                        event.target.mute().setLoop(!0)
                    }
                }
            }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function () {
                vcResizeVideoBackground($element)
            })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function ($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function (url) {
            if (void 0 === url) return !1;
            var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id && id[1]
        }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function () {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function () {
                $("iframe", this).css("pointer-events", "auto")
            }), $wpbGmapsWidget.on("mouseleave", function () {
                $("iframe", this).css("pointer-events", "none")
            }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function (hoverBox) {
            hoverBox.each(function () {
                var $this = jQuery(this),
                    perspective = 4 * $this.width() + "px";
                $this.css("perspective", perspective)
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function (hoverBox) {
            hoverBox.each(function () {
                var $this = jQuery(this),
                    hoverBoxInner = $this.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0);
                var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
                    backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
                hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function () {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).resize(window.vc_prepareHoverBox), jQuery(document).ready(function ($) {
            window.vc_js()
        })
    }(window.jQuery);