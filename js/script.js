$(document).ready(function () {
    $('.slider-block').slick({
        infinite: true,
        slidesToShow: 2,
        arrows: true,
        dots: true,
        pauseOnHover: false,
        autoplay: false,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                }
            }

        ]
    });
})


$(document).ready(function () {

    $('#slider-first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#slider-first-nav',
        touchThreshold: false,
    });
    $('#slider-first-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#slider-first',
        dots: false,
        focusOnSelect: true,
    });

});

$(document).ready(function () {

    $('#slider-second').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#slider-second-nav',
        touchThreshold: false,
    });
    $('#slider-second-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#slider-second',
        dots: false,
        focusOnSelect: true,
    });

});

$(document).ready(function () {

    $('#slider-third').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#slider-third-nav',
        touchThreshold: false,
    });
    $('#slider-third-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#slider-third',
        dots: false,
        focusOnSelect: true,
    });

});

/*===================zoom====================*/

$(document).ready(function () {
    $('#slider-first a').magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
});

$(document).ready(function () {
    $('#slider-second a').magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
});

$(document).ready(function () {
    $('#slider-third a').magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
});

/*============price===========*/

$(document).ready(function () {
    var input = $('.inp_radio');
    input.change(
        function () {
            var pr = $(this).parents('.table-block');
            var pris = pr.find($(this)).val();
            var pr_parent = $(this).parents('.christmas_tree-table');
            pr_parent.find('.price').text(pris)
        }
    );
});