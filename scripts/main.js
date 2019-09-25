// mobile menu
$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('header__switch--open');
	$('.header__menu').toggleClass('header__menu--open');
	$('body').toggleClass('scroll-hidden');
});


//header example 
$('.js-header__authorization').click(function() {
	$('.header__authorization-inner').slideToggle(300);
});

$('.js-header__cart').click(function() {
	$('.header__cart-inner').slideToggle(300);
});

$('.js-header__searche').click(function() {
	$('.header__searche-inner').slideToggle(300);
});

$('.js-header-btn').click(function() {
  $(this).not(this).parent().find('.js-header-btn').removeClass('active');
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    }else{
      $(this).addClass('active');
    }
});



// video player
var overlay = document.getElementById('overlay');
var vid = document.getElementById('video');

if(overlay.addEventListener){
		overlay.addEventListener("click", play, false)
	}else if(overlay.attachEvent){
		overlay.attachEvent("onclick", play)
	}

function play() { 
    if (vid.paused){
        vid.play(); 
        overlay.classList.add("test");
    }else {
        vid.pause(); 
        overlay.classList.remove("test");
    }
} 
