$(document).ready(function() {
  $('.shadow').on('click', function() {
    var $shadow = $(this).css('text-shadow');
    var $shadowArray = $shadow.split(' ');
    var $hShadow = parseInt($shadowArray[4]) + 4;

    $(this).css('text-shadow', '0 ' + $hShadow + 'px 0 #999');
  });
});