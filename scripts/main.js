// mobile menu
$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('header__switch--open');
	$('.header__menu').toggleClass('header__menu--open');
	$('body').toggleClass('scroll-hidden');
});


// slider about
var swiper = new Swiper('.about__slider', {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  pagination: {
    el: '.about__slider-pagination',
    clickable: true,
  },
});


// slider doctors
var swiper = new Swiper('.doctors__slider', {
  slidesPerView: 3,
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.doctors__slider-btn-next',
    prevEl: '.doctors__slider-btn-prev',
  },
  breakpoints: {
    992: {
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  }
});