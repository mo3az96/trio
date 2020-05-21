$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $('body').removeClass("overflow");
        $(this).remove();
    });
});
$(document).ready(function () {
    if ($(window).width() > 767) {
        $('select.selectpicker').selectpicker({
            dropupAuto: false
        });
    }

    /////////Brands Slider/////////
    $('.brand-slider').owlCarousel({
        items: 6,
        margin: 0,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<i class='fas fa-caret-right'></i>", "<i class='fas fa-caret-left'></i>"],
        dots: true,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });

    /////////Product-slider/////////
    $('.Product-slider').owlCarousel({
        items: 4,
        margin: 0,
        // stagePadding: 1,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<i class='fas fa-caret-right'></i>", "<i class='fas fa-caret-left'></i>"],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    /////////testimonial-slider/////////
    $('.testimonial-slider').owlCarousel({
        items: 2,
        margin: 28,
        // stagePadding: 1,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<i class='fas fa-caret-right'></i>", "<i class='fas fa-caret-left'></i>"],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            },
        }
    });
    ///////////////
    $('.megamenu-link').click(function () {
        $(this).toggleClass("link-active");
        $('.mega-menu').slideToggle(300);
        $('.overlay').fadeToggle("300");
        // $("body").toggleClass("overflow");
        if ($(window).width() <= 767) {
            $('.overlay').fadeOut("300");
        }
    });
    $('.overlay').click(function () {
        $('.megamenu-link').removeClass("link-active");
        $('.mega-menu').slideUp(300);
        $('.overlay').fadeOut("300");
        // $("body").removeClass("overflow");
    });
    ///////////////
    //////mobile/////
    if ($(window).width() <= 767) {
        console.log($("nav .mega-ul"));
        $("nav .mega-ul").unwrap();
        $("nav .mega-ul").unwrap();

        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(300);
            $(".search-cont").addClass("open");
            $("body").addClass("overflow");
            $('.search-input').focus();
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").removeClass("open");
            $(".search-form").fadeOut(400);
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
        ////////
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".mo-navbar").addClass("nav-in");
            $('.lang').addClass("lang-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $('.lang').removeClass("lang-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $('.lang').removeClass("lang-in");
            $("body").removeClass("overflow");
        });

        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
        $(".megamenu-link").addClass("mo-accordion");
        $(".mega-ul").addClass("mo-panel");

        $(".search-select").removeClass("selectpicker");
        $(".search-select").addClass("mobile-select");
        $(".search-select").wrap('<div class="mobile-select-cont"></div>');
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })
});