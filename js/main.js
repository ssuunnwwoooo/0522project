$(function () {
    $('.main_slide').slick({
        // arrows: ture,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    });

    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });


    $('.full_slide').slick({
        //dots: true,
        // dots: true,
        // customPaging: function (slider, i) {
        //     var thumb = $(slider.$slides[i]).data();
        //     if (i == '0') {
        //         i = "2023 CAR DESIGN AWARD";
        //     } else if (i == '1') {
        //         i = "2023 RED DOT DESIGN AWARD";
        //     }
        //     else if (i == '2') {
        //         i = "2023 MOTORTREND CAR OF THE YEAR®";
        //     }
        //     else if (i == '3') {
        //         i = "2022 RED DOT AWARDS";
        //     }
        //     else if (i == '4') {
        //         i = "J.D. POWER 2022 U.S. INITIAL QUALITY STUDY";
        //     }
        //     else if (i == '5') {
        //         i = "2022 IIHS Top Safety Pick+";
        //     }
        //     return '<a class="dot">' + i + '</a>';
        // },

        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });


    $('.full_dots li').on('click', function () {
        let idx = $(this).index();
        $('.full_slide').slick('slickGoTo', idx);

        $(this).addClass('on').siblings().removeClass('on');
    })



})