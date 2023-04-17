$(function() {
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 500,
        fade: true,
        responsive: [{
                breakpoint: 1180,
                settings: {
                    dots: false
                }
            },

        ]
    });

    $('.reveiws__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });

});