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
            dots: true,
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

    //табы в секции выбора лучшей хостинговой компании (section choice)

    // let choiceBtn = document.querySelectorAll('.choice__tab'),
    //     tabContent = document.querySelectorAll('.tabcontent');

    // // for (let i = 0; i < choiceBtn.length; i++) {
    // //     choiceBtn[0].classList.add('choice__tab_active');

    // //     choiceBtn[i].addEventListener('click', function() {
    // //         if (choiceBtn[i].classList.contains('choice__tab_active')) {
    // //             choiceBtn[i].classList.remove('choice__tab_active');
    // //         } else {
    // //             choiceBtn[i].classList.add('choice__tab_active');
    // //         }

    // //     });
    // // }

    // choiceBtn[0].classList.add('choice__tab_active');

    // for (let i = 0; i < choiceBtn.length; i++) {

    //     choiceBtn[i].addEventListener('click', function() {
    //         // if (choiceBtn[i].classList.contains('choice__tab_active')) {
    //         //     choiceBtn[i].classList.remove('choice__tab_active');
    //         // } else {
    //         //     choiceBtn[i].classList.add('choice__tab_active');
    //         // }

    //     });
    // }

    // function hideTabContent() {
        
    // }

    let tab = document.querySelectorAll('.choice__tab'),
        menuTab = document.querySelector('.choice__menu'),
        tabContent = document.querySelectorAll('.tabcontent');

    tab[0].classList.add('choice__tab_active');
    tabContent[0].classList.add('tabcontent_show');


    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('tabcontent_hide');
            tab[i].classList.remove('choice__tab_active');
        }
    }
    hideTabContent(1);


    function showTabContent(b) {
        if (tabContent[b].classList.contains('tabcontent_hide')) {
            tabContent[b].classList.remove('tabcontent_hide');
            tabContent[b].classList.add('show');
            tab[b].classList.add('choice__tab_active');
        }
    }


    menuTab.addEventListener('click', function(event) {
        let target = event.target;

        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    });


    //точки в секции о сотрудниках
    let dot = document.querySelectorAll('.dots__item');

    for (let i = 0; i < dot.length; i++) {
        dot[1].classList.add('dots__item_active');
    }


});