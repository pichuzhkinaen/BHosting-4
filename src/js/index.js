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
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-keyboard_arrow_left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-keyboard_arrow_right"></span></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    autoplay: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
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


    //слайдер логотипов перед футером
    $('.logos-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="logos-slider__btn logos-slider__btn_left"><span class="icon-keyboard_arrow_left"></span></button>',
        nextArrow: '<button type="button" class="logos-slider__btn logos-slider__btn_right"><span class="icon-keyboard_arrow_right"></span></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
    });


    //карусель с сотрудниками
    let avatarDiv = document.querySelectorAll('.semicircle-on__avatar'),
        avatarImg = document.querySelectorAll('.semicircle-on__img'),
        arrowLeft = document.querySelector('.semicircle-btn_left'),
        arrowRight = document.querySelector('.semicircle-btn_right'),
        dots = document.querySelectorAll('.dots__item'),
        worker = document.querySelectorAll('.semicircle-inner__worker'),
        avatarImgArrow = [];

        // console.log(avatarDiv);
    dots[2].classList.add('dots__item_active');
    worker[2].classList.add('semicircle-inner__worker_active');

    for (let i = 0; i < avatarImg.length; i++) {
        avatarImgArrow.push(avatarImg[i]); //Добавляет элемент в конец массива
    }

    arrowLeft.addEventListener('click', scrollLeft);
    arrowRight.addEventListener('click', scrollRight);

    function scrollLeft() {

        let tmp = avatarImgArrow.shift(); //Удаляет из массива первый элемент и возвращает его (удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым)

        // console.log(tmp);
        avatarImgArrow.push(tmp); //Добавляет элемент в конец массива

        // console.log(avatarImgArrow);

        for (let j = 0; j < dots.length; j++) {
            if (dots[j].classList.contains('dots__item_active') && worker[j].classList.contains('semicircle-inner__worker_active')) {
                dots[j].classList.remove('dots__item_active');
                worker[j].classList.remove('semicircle-inner__worker_active');
                if (j - 1 >= 0) {
                    j = j - 1;
                } else {
                    j = 4;
                }
                dots[j].classList.add('dots__item_active');
                worker[j].classList.add('semicircle-inner__worker_active');
            }
        }

        refreshAvatars();
    }

    function scrollRight() {

        let tmp = avatarImgArrow.pop(); //удаляет последний элемент

        // console.log(tmp);
        avatarImgArrow.unshift(tmp); //Добавляет элемент в начало массива

        // console.log(avatarImgArrow);
        for (let j = 0; j < dots.length; j++) {
            if (dots[j].classList.contains('dots__item_active') && worker[j].classList.contains('semicircle-inner__worker_active')) {
                dots[j].classList.remove('dots__item_active');
                worker[j].classList.remove('semicircle-inner__worker_active');
                if (j + 1 <= 4) {
                    j = j + 1;
                } else {
                    j = 0;
                }
                dots[j].classList.add('dots__item_active');
                worker[j].classList.add('semicircle-inner__worker_active');
            }
        }

        refreshAvatars();
    }

    function refreshAvatars() {
        for (let i = 0; i < avatarDiv.length; i++) {
            // console.log(i);
            // console.log(avatarDiv[i]);
            // console.log(avatarImgArrow[i]);
            avatarDiv[i].appendChild(avatarImgArrow[i]);
        }
    }

    //изменение внешнего вида секции с сотрудниками на мобильных устройствах
    let mq = window.matchMedia('(max-width: 991px)');
    myFunction(mq); // Вызов функции прослушивателя во время выполнения
    mq.addEventListener('change', myFunction); // Присоединить функцию прослушивателя при изменении состояния

    function myFunction(mq) {
        if (mq.matches) { // Если медиа запрос совпадает
            for (let j = 0; j < avatarDiv.length; j++) {
                if (dots[j].classList.contains('dots__item_active')) {
                    avatarDiv[j].style.display = 'block';
                } else {
                    avatarDiv[j].style.display = 'none';
                }                  
            }
        }
        else {
            for (let j = 0; j < avatarDiv.length; j++) {
                avatarDiv[j].style.display = 'block';
            }                  
        }
    }



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


    //раскрытие плюсов в секции с вопросами
    let detailsBtn = document.querySelectorAll('.button__details');

    for (let i = 0; i < detailsBtn.length; i++) {
        detailsBtn[i].addEventListener('click', function() {
            if (detailsBtn[i].classList.contains('button__details_active')) {
                detailsBtn[i].classList.remove('button__details_active');
            } else {
                detailsBtn[i].classList.add('button__details_active');
            }


        });
    }


    //открытие окна pop-up при клике на кнопку "Need Help?"
    let btnOpenPopUp = document.querySelector('.call-btn'),
        ModalPopUp = document.querySelector('.call-modal'),
        closePopUp = document.querySelector('.call__close');

    btnOpenPopUp.addEventListener('click', function(){
        ModalPopUp.style.display = 'block';
        btnOpenPopUp.style.display = 'none';
    });

    closePopUp.addEventListener('click', function(){
        ModalPopUp.style.display = 'none';
        btnOpenPopUp.style.display = 'flex';
    });

        //гамбургер-меню
    const menu = document.querySelector('.menu-main'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu-main_active');
    });

});