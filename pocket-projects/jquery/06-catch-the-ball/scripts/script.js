$(document).ready(function() {
  var $duration = 2000;
  var $level = 1;
  var $messages = [ 'Easy peasy lemon squeezy, that just was a warm up',
                    'Heating up! You are making microwaves jealous',
                    'Somebody call 911! This person is on FIRE',
                    'You are now the reason for global warming',
                    'The eminating heat is expanding to the solar system',
                    'The aliens are angry and declare war on the human race',
                    'You are so hot, the heat melts the aliens! Victory!',
                    'The eminating heat takes over the heavens',
                    'The Gods are furious and decide to end the human race',
                    'A deal has been made: Beat the game and the humans will be spared',
                    'Last level! The fate of the world is in your hands']
  
  function bounce() {
    $('.ball').animate({left: '800px'}, $duration, 'linear').animate({left: '0'}, $duration, 'linear', bounce);
  }

  bounce();

  $('.ball').on('click', function() {
    $level += 1;
    $duration /= 1.25;

    if ($level > 12) {
      $('.info').html('Congratulations! You saved the world!!').after('<img src="images/earth.png" alt="happy earth" width="500" height="500">');
      $('.level').html('<a href="#" onclick="location.reload(true); return false;"><strong>Play again?</strong></a>');
      $('section').remove();
    } else {
      $('.info').html($messages[$level - 2]);
      $('.level-number').html($level);
      $(this).hide().fadeIn(1);

      bounce();
    }
  });
});