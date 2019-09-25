// mobile menu
$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('header__switch--open');
	$('.header__menu').toggleClass('header__menu--open');
	$('body').toggleClass('scroll-hidden');
});

// slider 
var swiper = new Swiper('.about__slider', {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  pagination: {
    el: '.about__slider-pagination',
    clickable: true,
  },
});