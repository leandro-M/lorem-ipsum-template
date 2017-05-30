$(document).ready(function(){
  $('.slider-header').bxSlider({
    controls: false
  });

  $('.slider-projects').bxSlider({
    slideWidth: 300,
    minSlides: 3,
    maxSlides: 3,
    slideMargin: 10,
    pager: false,
    nextText: '>',
    prevText: '<'
  });

  $('.slider-store-window').bxSlider({
    slideWidth: 128,
    minSlides: 4,
    maxSlides: 4,
    slideMargin: 10,
    pager: false,
    nextText: '>',
    prevText: '<'
  });

  
});