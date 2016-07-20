$(function() {

  var s1 = $('#slider').sliderRotate({displayItems:5});
  var s2 = $('#slider-2').sliderRotate({ autoSlide:true});

  s2.destroy();
  s2 = $('#slider-2').sliderRotate();
});
