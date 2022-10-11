$(document).ready(function() {
  $('.button').on('mouseenter', function() {
    $('.button').fadeTo('fast', 1);
  });
  $('.button').on('mouseleave', function() {
    $('.button').fadeTo('slow', 0.5);
  });

  function randomColor() {
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  }
  $('.button').on('click', function() {
    event.preventDefault();
    $('body').css('background-color', randomColor());
  });
});