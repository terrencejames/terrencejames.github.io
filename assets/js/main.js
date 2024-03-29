(function($){
    "use strict";

    var $body = $('body'),
        $header = $('.split-image'),
        $navigation = $('#navigation'),
        $intro = $('.hero-split-intro'),
        $navTriggerOpen = $('.nav-trigger-open'),
        $navTriggerClose = $('.nav-trigger-close'),
        $pageScrollLink = $('.page-scroll > a'),
        $workItem = $('.collapse', '#panel-group-work'),
        $educationItem = $('.collapse', '#panel-group-education'),
        $projectDetail = $('.project-detail');


    // Preloader
    $body.jpreLoader({
        showPercentage: false,
        loaderVPos: '50%',
        closeBtnText: ''
    });

    $(window).on('beforeunload', function() {
      $(window).scrollTop(0);
    });

    $(document).ready(function(){

        $(window).smartload(function(){

          pageScroll();


          // Navigation - Show & hide
            $navTriggerOpen.on('click', function(){
                $navigation[0].style.visibility="visible";
                $navigation.fadeIn();
            });

            $navTriggerClose.on('click', function(){
                $navigation.fadeOut();
            });

            // Desktop
            ScrollReveal().reveal("#heythere", { delay: 1000, distance: '150px', afterReveal: null, mobile: false });
            ScrollReveal().reveal("#terrencejames", { delay: 1100, distance: '150px', afterReveal: null, mobile: false });
            ScrollReveal().reveal("#diaz", { delay: 1200, distance: '150px', afterReveal: null, mobile: false });
            ScrollReveal().reveal("#softwareeng", { delay: 1300, distance: '150px', afterReveal: null, mobile: false });
            ScrollReveal().reveal("#resumecv", { delay: 2000, duration: 1100,  distance: '150px', origin: 'right', mobile: false });
            // ScrollReveal().reveal("#resume", { delay: 2000, duration: 1100,  distance: '150px', origin: 'right', mobile: false });
            // ScrollReveal().reveal("#resume2", { delay: 2000, duration: 1100,  distance: '150px', origin: 'right', mobile: false });
            // ScrollReveal().reveal("#cv", { delay: 2000, duration: 1100,  distance: '150px', origin: 'right', mobile: false });
            // ScrollReveal().reveal("#cv2", { delay: 2000, duration: 1100,  distance: '150px', origin: 'right', mobile: false });
            ScrollReveal().reveal($header, {delay: 2800, distance: '50px', afterReveal: null, mobile: false});
            ScrollReveal().reveal("#navigation", { delay: 3600, duration: 800, distance: '50px', origin: 'left', mobile: false });

            //mobile
            ScrollReveal().reveal("#heythere", { delay: 500, distance: '150px', afterReveal: null, desktop: false });
            ScrollReveal().reveal("#terrencejames", { delay: 500, distance: '150px', afterReveal: null, desktop: false });
            ScrollReveal().reveal("#diaz", { delay: 500, distance: '150px', afterReveal: null, desktop: false });
            ScrollReveal().reveal("#softwareeng", { delay: 500, distance: '150px', afterReveal: null, desktop: false });
            ScrollReveal().reveal("#resume", { delay: 500, duration: 800,  distance: '150px', origin: 'right', desktop: false });
            ScrollReveal().reveal("#resume2", { delay: 500, duration: 800,  distance: '150px', origin: 'right', desktop: false });
            ScrollReveal().reveal("#cv", { delay: 500, duration: 800,  distance: '150px', origin: 'right', desktop: false });
            ScrollReveal().reveal("#cv2", { delay: 500, duration: 800,  distance: '150px', origin: 'right', desktop: false });

            ScrollReveal().reveal($header, {delay: 800, duration: 800, distance: '50px', afterReveal: null, desktop: false});

            ScrollReveal().reveal("#work-experiences", { delay: 500, distance: '50px' });
            ScrollReveal().reveal("#profile", { delay: 500, distance: '50px' });


            // Bootstrap scrollspy
            var ww = Math.max($(window).width(), window.innerWidth);
            $body.scrollspy({
                target: '#navigation',
                offset: ww > 992 ? 0 : $header.height()
            });




            // Page scrolling feature


            // Resume - Collapse
            resumeCollapse();


            // Skills - Bar chart
            var $skillsBarChart = $('.skills-bar-chart'),
                $barChartItem = $skillsBarChart.find('.chart-item');

            $barChartItem.find('.chart-percent').each(function(){
                var percent = $(this).data('percent');
                $(this).text(percent + '%');
                $(this).parent().css('width', percent + '%');
            });


            // Skills - Circle chart
            var $circleChart = $('.skills-circle-chart'),
                grayColor = 'background-gray-dark',
                baseColor = 'background-color',
                itemColor = grayColor,
                sliceColor1 = baseColor,
                sliceColor2 = baseColor,
                deg1 = 90;

            $circleChart.each(function(){
                var $circleChartItem = $(this).find('.chart-item'),
                    $circleChartPercent = $(this).find('.chart-percent'),
                    circleChartPercent = $circleChartPercent.data('percent'),
                    deg = (circleChartPercent / 100 * 360),
                    deg2 = deg;

                if (circleChartPercent < 50){
                    itemColor = baseColor;
                    sliceColor1 = grayColor;
                    sliceColor2 = grayColor;
                    deg1 = (circleChartPercent / 100 * 360 + 90);
                    deg2 = 0;
                }

                $('<span class="chart-slice one"></span>').prependTo($circleChartItem);
                $('<span class="chart-slice two"></span>').prependTo($circleChartItem);

                var $circleSlice1 = $(this).find('.chart-slice.one'),
                    $circleSlice2 = $(this).find('.chart-slice.two');

                $circleChartItem.addClass(itemColor);

                $circleSlice1.addClass(sliceColor1);
                $circleSlice1.css({
                    '-webkit-transform': 'rotate(' + deg1 + 'deg)',
                    transform: 'rotate(' + deg1 + 'deg)'
                });

                $circleSlice2.addClass(sliceColor2);
                $circleSlice2.css({
                    '-webkit-transform': 'rotate(' + deg2 + 'deg)',
                    transform: 'rotate(' + deg2 + 'deg)'
                });

                $('<span class="display-block title-small"></span>').prependTo($circleChartPercent);
                $circleChartPercent.children().text(circleChartPercent + '%');
            });


            // Project detail - Show & hide
            $projectDetail.on('hover', function(){
                $(this).toggleClass('active');
            }, function(){
                $(this).toggleClass('active');
            });
        });



        $(window).smartresize(function(){

            // Bootstrap scrollspy
            var ww = Math.max($(window).width(), window.innerWidth),
                dataScrollSpy = $body.data('bs.scrollspy'),
                offset = ww > 992 ? 0 : $header.height();

            dataScrollSpy.options.offset = offset;
            $body.data('bs.scrollspy', dataScrollSpy);
            $body.scrollspy('refresh');


            // Page scrolling feature
            pageScroll();


            // Navigation - Show & hide
            if (ww >= 992){
                $navigation.show();
            }
            else{
                $navigation.hide();
            }


            // Resume - Collapse
            resumeCollapse();
        });


        /*
         * Detect mobile device.
         * Source: http://www.abeautifulsite.net/detecting-mobile-devices-with-javascript/
         */

        let isMobile = {
            Android: function(){
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function(){
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function(){
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function(){
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function(){
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function(){
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        // Page scrolling feature
        function pageScroll(){
            $pageScrollLink.on('click', function(e){
                var ww = Math.max($(window).width(), window.innerWidth),
                    anchor = $(this),
                    href = anchor.attr('href'),
                    offset = ww > 992 ? 0 : $header.height();

                $('html, body').stop().animate({
                    scrollTop: $(href).offset().top - (offset - 1)
                }, 1000, 'easeInOutExpo');

                if (ww < 992){
                    $navigation.fadeOut('fast');
                }

                e.preventDefault();
            });
        };


        // Resume - Collapse
        function resumeCollapse(){
            var ww = Math.max($(window).width(), window.innerWidth);
            if (ww < 768){
                $workItem.collapse('show');
                $educationItem.collapse('show');
            }
            else{
                $workItem.not(':first').collapse('hide');
                $educationItem.not(':first').collapse('hide');
            }
        };


        if ($.fn.magnificPopup){
            var $popupTrigger = $('.popup-trigger'),
                $popupTriggerClose = $('.popup-trigger-close');

            $popupTrigger.on('click', function(e){
                $.magnificPopup.open({
                    items: {
                        src: $(this).closest('.popup-container').find('.popup-content')
                    },
                    type: 'inline',
                    fixedContentPos: true,
                    closeOnContentClick: false,
                    callbacks: {
                        open: function () {
                            $('.mfp-wrap').addClass('popup-wrap');
                        },
                        close: function () {
                            $('.mfp-wrap').removeClass('popup-wrap');
                        }
                    }
                });

                e.preventDefault();
            });

            $popupTriggerClose.on('click', function(e){
                $.magnificPopup.close();
                e.preventDefault();
            });
        }
        else{
            console.log('Gallery magnific popup: Plugin "magnificPopup" is not loaded.');
        }
    });
})(jQuery);
