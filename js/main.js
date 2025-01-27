$(function () {

    "use strict";


    $('.select_2').select2({
        placeholder: 'Select an option'
    });


    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    $(".right_serch").on("click", function (event) {
        $(".search_form_area").toggleClass("show_list");
        event.stopPropagation();
    });


    // menu js
    if ($(window).scrollTop() > 1) {
        if ($('.main_menu').offset() != undefined) {
            $('.main_menu').addClass('menu_fix');
        }
    } else {
        if ($('.main_menu').offset() != undefined) {
            $('.main_menu').removeClass('menu_fix');
        }
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {

            if ($('.main_menu').offset() != undefined) {
                // check if menu_if class is already added
                if (!$('.main_menu').hasClass("menu_fix")) {
                    $('.main_menu').addClass("menu_fix");
                }
            }
        }
        else {
            if ($('.main_menu').offset() != undefined) {
                $('.main_menu').removeClass("menu_fix");
            }
        }
    });


    //====== testimonial slider ======
    $('.testi_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    //====== brand slider ======
    $('.brand_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ]
    });

    //  animation js
    new WOW().init();



    // Range Slider
    $('.basic').alRangeSlider();
    const options = {
        range: { min: 10, max: 1000, step: 1 },
        initialSelectedValues: { from: 200, to: 800 },
        grid: { minTicksStep: 1, marksStep: 5 },
        theme: "dark",
    };

    $('.range_slider').alRangeSlider(options);
    const options2 = {
        orientation: "vertical"
    };




    // listing details slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        autoplay: true,
        dots: false,
        arrows: false,
        centerMode: false,
    });

    //=====venobox js=====
    $('.venobox').venobox();

    // ======star retting=============
    const stars = document.querySelectorAll(".select_rating i");

    stars.forEach((star, index1) => {
        star.addEventListener("click", () => {
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });
        });
    });



    //=======counter up=========   
    $('.counter').countUp();



    //=======SMALL DEVICE MENU ICON======
    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
    });


    /*==============NICE SELECT==================*/
    $('#select_js').niceSelect();









});
