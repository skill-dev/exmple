

jQuery(document).on('ready', function ($) {
    "use strict";

    

    /* ---------------------------------------------------- */
    /*  Main Navigation                                     */
    /* ---------------------------------------------------- */
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(500);
    });

    /*=========================================================================
                       PRELOADER
    =========================================================================*/

    $(window).on('load', function () {
        var status = $('.status'); status.fadeOut();
        var preloader = $('.preloader'); preloader.delay(350).fadeOut('slow');
    });

    /*=========================================================================
                      NAVIGATION
    =========================================================================*/
        var page_scroll = $('a.page-scroll');
        page_scroll.on('click', function (e) {
            var anchor = $(this);
            var html_body = $('html, body');
            html_body.stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

    /*=========================================================================
                       SCROLL TO TOP 
    =========================================================================*/  
    $.scrollUp({
        scrollText: '<span class="ti-arrow-up"></span>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });



    
   


    /*=========================================================================
                    START VIDEO JS
    =========================================================================*/
    function autoPlayYouTubeModal() {
        var body_s = $("body");
        var trigger = body_s.find('[data-toggle="modal"]');
        trigger.on("click", function () {
            var theModal = $(this).data("target")
                , videoSRC = $('#video-modal iframe').attr('src')
                , videoSRCauto = videoSRC + "?autoplay=1";
            $(theModal + ' iframe').attr('src', videoSRCauto);
            $(theModal + ' button.close').on("click", function () {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
            $('.modal').on("click", function () {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
        });
    }
    autoPlayYouTubeModal();
  


    /*=========================================================================
              BLOG SLIDER
    =========================================================================*/
    $('#blog-slider').owlCarousel({
        items: 1,
        //center:true,
        loop: true,
        nav:true,
        dots: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        navText:['',''],
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:1},
            640:{ items:1},
            768:{ items:1},
            800:{ items:1},
            960:{ items:1},
            991:{ items:1},
            1024:{ items:1},
            1199:{ items:1}
        }
    });
    
    /*=========================================================================
              SCREEN SLIDER
    =========================================================================*/
    $('.screen_slider').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: true,
        margin: 22,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    
    /*=========================================================================
              TESTIMONIAL SLIDER
    =========================================================================*/
    var testimonial_slider = $('.testimonial_slider');
    testimonial_slider.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        dots: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    /* ---------------------------------------------------- */
    /*  Fancybox                                            */
    /* ---------------------------------------------------- */
    (function () {
        if ($('.single-image').length) {
            var $images = $('.single-image');
            $images.each(function () {
                $(this).append('<span class="curtain"></span>');
            });
            // Single Image
            $images.filter('.plus-icon').fancybox({
                'titleShow': true
                , 'padding': '10'
                , 'transitionIn': 'fade'
                , 'transitionOut': 'fade'
                , 'easingIn': 'easeOutBack'
                , 'easingOut': 'easeInBack'
                , helpers: {
                    title: {
                        type: 'over'
                    }
                }
            });
        }
    }());
    
    

    /*=========================================================================
              PRICE TABLE
    =========================================================================*/
    $('.price-table').on('mouseenter', function () {
        $('.price-table').removeClass('active');
        $(this).addClass('active');
    });
    $('.price-table').on('mouseleave', function () {
        $('.price-table').removeClass('active');
        $('.price-table.center').addClass('active');
    });


    /*=========================================================================
              START PARALLAX JS
    =========================================================================*/
    (function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {}
        else {
            $(window).stellar({
                horizontalScrolling: false
                , responsive: true
            });
        }
    }());
    

    /*=========================================================================
           START WOW ANIMATION JS
    =========================================================================*/
    new WOW().init();



    /*=========================================================================
              FAQ
    =========================================================================*/
    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".pull-right")
        .toggleClass('fa-plus fa-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);



    /*---------------------------
        MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'http://zwebtheme.us14.list-manage.com/subscribe/post?u=db7691ab21bec0b5bdaf4080c&amp;id=149bd01728', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
               
            }
        }
    });
    
    /*=========================================================================
                       GOOGLE MAP
    =========================================================================*/
    
        $(".google_map").gMap({
            address: 'Bogra, Bangladesh',   
            markers: [
                    {'address' : 'Bogra, Bangladesh'}          // Street
                ],
            zoom: 14,                                      // 0 - 21    
            scrollwheel: false,                            // Boolean: true / false
            maptype : 'roadmap' 
        });
    
    


}(jQuery));


