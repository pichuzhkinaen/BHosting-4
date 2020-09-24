import $ from 'jquery';
window.$ = window.jQuery = $;
import "jquery-ui";
import 'slick-carousel';

import '../css/bootstrap-grid.min.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../css/style.css';


document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //слайдер
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
});