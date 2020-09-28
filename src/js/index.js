import $ from 'jquery';
window.$ = window.jQuery = $;
import "jquery-ui";
import 'slick-carousel';

import '../css/bootstrap-grid.min.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../iconFonts/style.css';
import '../css/style.css';


document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //слайдер первого скролла
    $('.carousel-inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-keyboard_arrow_left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-keyboard_arrow_right"></span></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    centerMode: true,
                    variableWidth: true,
                    autoplay: false
                }
            }
        ]
    });

    //слайдер выбора пакета
    $('.package-slide').slick({
            speed: 1200,
            prevArrow: '<button type="button" class="slick-package-prev"><span class="icon-long-arrow-left"></span></button>',
            nextArrow: '<button type="button" class="slick-package-next"><span class="icon-long-arrow-right"></span></button>',
            // dots: true,
            dotsClass: 'slick-dots package-slide__dots',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: true,
                        centerMode: true,
                        variableWidth: true,
                        autoplay: false
                    }
                }
            ]
        });

    //изменение стиля чекбокса поиска при клике на него
    let checkBox = document.querySelectorAll('.checkbox__custom');

    for (let i = 0; i < checkBox.length; i++) {
        // console.log(checkBox[i]);
        checkBox[i].addEventListener('click', function() {

            if (checkBox[i].classList.contains('checkbox__custom_active')) {
                checkBox[i].classList.remove('checkbox__custom_active');
            } else {
                checkBox[i].classList.add('checkbox__custom_active');
            }
        });
    }

});