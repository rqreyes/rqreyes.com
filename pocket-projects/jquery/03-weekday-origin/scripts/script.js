$(document).ready(function() {
  var today = new Date().getDay() + 1;

  $('li:nth-of-type(' + today + ')').addClass('todayname');
  $('p:nth-of-type(' + today + ')').attr('id', 'today');
});