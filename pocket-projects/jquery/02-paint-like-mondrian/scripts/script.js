$(document).ready(function() {
  var $paint = '#FFF';

  $('.palette div').on('click', function() {
    $paint = $(this).css('background-color');
  });
  $('.block').on('click', function() {
    $(this).css('background-color', $paint);
  });
});