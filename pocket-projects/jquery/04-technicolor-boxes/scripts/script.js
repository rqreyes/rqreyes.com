$(document).ready(function() {
  function randomColor() {
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  }
  $('.box').on('mouseenter', function() {
    $(this).css('background-color', randomColor());
    $(this).css('box-shadow', '0 0 20px #FFF');
    $(this).css('z-index', '2');
  });
  $('.box').on('mouseleave', function() {
    $(this).css('box-shadow', 'none');
    $(this).css('z-index', '1');
  });
});