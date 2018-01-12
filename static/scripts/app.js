$(document).ready(function(){

  var $carousel_1 = $('header .Slider .main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: true,
    wrapAround: false,
    //  autoPlay:true,
    draggable:true,
    rightToLeft: false,
    freeScroll: false

  });

  var $carousel_2 = $('.home .forum .main-carousel_right , .forum-Class-- .Right_Width .main-carousel_right').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: true,
    wrapAround: false,
    //  autoPlay:true,
    draggable:true,
    rightToLeft: false,
    freeScroll: false,
    adaptiveHeight: true
  });

})
