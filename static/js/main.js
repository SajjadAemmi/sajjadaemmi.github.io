var language, dict;

$(document).ready(function () {
    'use strict';

    //********** menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('nav');
        if ($(window).scrollTop() > 150) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });

    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    //*********** scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    //************ smooth scroll js

    $('a.smooth-menu,a.custom-btn,a.dadada').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });

    //*********** Animated headline js

    $('.animate-scale').animatedHeadline({
        animationType: 'clip'
    });

    //***** Skill bar js

    var skillbar = $(".skillbar");

    skillbar.waypoint(function () {
        skillbar.each(function () {
            $(this).find(".skillbar-child").animate({
                width: $(this).data("percent")
            }, 1000);
        });
    }, {
        offset: "80%"
    });

    //*************** Isotope filter

    var $Container = $('#img-filter');
    if ($Container.length > 0) {
        $Container.isotope({
            itemSelector: '.single-port',
            transitionDuration: '0.8s'
        });
        $(".img-filter").on("click", function (e) {
            $(".img-filter.active").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $Container.isotope({
                filter: selector
            });
            return false;
        });

        $(window).resize(function () {
            setTimeout(function () {
                $Container.isotope();
            }, 1000);
        }).trigger('resize');
    }

    $('.client-testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    //************* Brand Carousel

    $("#brand-carousel").owlCarousel({
        navigation: false,
        pagination: true,
        rtl: true,
        slideSpeed: 800,
        paginationSpeed: 800,
        smartSpeed: 500,
        autoplay: true,
        singleItem: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            680: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});

// navbar
document.addEventListener('click', function (event) {
    var isClickInside = document.getElementById('navbarSupportedContent').contains(event.target);

    if (!isClickInside) {
        // Close the Navbar when clicking outside
        var navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbarToggler.click();
        }
    }
});

document.getElementById("year").innerHTML = new Date().getFullYear();

function hbd() {
    party.confetti(document.body, {
        count: party.variation.range(60, 80),
    });
}

// infinte loop of confetti
// setInterval(hbd, 3000);