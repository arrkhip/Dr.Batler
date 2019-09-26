// mobile menu
$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('header__switch--open');
	$('.header__inner').toggleClass('header__inner--open');
	$('body').toggleClass('scroll-hidden');
});


$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('.header').addClass('fixed');
    }
    else {
        $('.header').removeClass('fixed');
    }
});


//scrool to block
$('a[href^="#"]').click(function(){
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top -160}, 500);
  return false;
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


// slider reviews
var swiper = new Swiper('.reviews__slider', {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  spaceBetween: 50,
  navigation: {
    nextEl: '.reviews__slider-btn-next'
  }
});



// yandex map
ymaps.ready(function(){
  var myMap = new ymaps.Map("map", {
    center: [55.756314, 37.511680],
    zoom: 14,
    controls: []
  });

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", 
      coordinates: [55.753387, 37.544306] 
    }
  });

  var myPlacemark = new ymaps.Placemark([55.753387, 37.544306], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/icons/i-map-logo.png',
    iconImageSize: [62, 62],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');

  $(window).resize(function() {
    if ($(window).width() < 768) {
     myMap.behaviors.disable('drag');
     myMap.setCenter([55.753387, 37.544306]);     
   }
 });

});