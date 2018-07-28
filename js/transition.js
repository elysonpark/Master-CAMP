var div_btn = $('.btn button');
var box = $('.box');

div_btn.on('hover', function () {
  box.toggleClass('box-act');
});