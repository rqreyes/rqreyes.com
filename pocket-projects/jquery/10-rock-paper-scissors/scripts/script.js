$(document).ready(function() {
	var $userMove, $compMove;
	
	$('.move').on('click', start);

	function start() {
		$('.result').remove();
		$('.countdown').remove();

		if($('.hand').length != 2) {
			$('<img class="hand" src="images/comp-hand.png" alt="comp hand" width="300" height="271">').insertAfter('.comp h2');
			$('<img class="hand" src="images/user-hand.png" alt="user hand" width="300" height="271">').insertAfter('.user h2');
		}

		var $compMoves = ['rock', 'paper', 'scissors'];

		$compMove = $compMoves[Math.floor(Math.random() * 3)];
		$('.user-move').fadeOut('slow');
		$userMove = $(this).attr('id');

		goodLuck();
	}

	function goodLuck() {
		var $countDown = '<p class="countdown">3</p>';

		$('.message h2').html('Good luck');
		$('.message img').remove();
		$('.message').append($countDown)
		
		var $myVar = setInterval(countDown, 1000);

		function countDown() {
			var $number = $('.countdown').html();

			if($number != 1) {
				$number--;
				$('.countdown').html($number);
			} else {
				clearInterval($myVar)
			}
		}

		$('.hand').effect('bounce', 5000);

		setTimeout(results, 3000);
	}

	function results() {
		$('.message h2').html('Play again?');
		$('.user-move').fadeIn('slow');
		$('.hand, .ui-effects-placeholder').remove();
		$('.comp').append('<img class="result" src="images/comp-' + $compMove + '.png" alt="comp result" width="300" height="300">')
		$('<img class="result" src="images/user-' + $userMove + '.png" alt="user result" width="300" height="300">').insertAfter('.user h2')

		if($compMove === $userMove) {
			$('.countdown').html('It\'s a tie!');
		} else if (($compMove === 'rock' && $userMove === 'scissors') || ($compMove === 'paper' && $userMove === 'rock') || ($compMove === 'scissors' && $userMove === 'paper')) {
			$('.countdown').html('Randy wins!');
			var $score = parseInt($('.comp-score').html());
			$score += 1;
			$('.comp-score').html($score)
		} else {
			$('.countdown').html('You win!');
			var $score = parseInt($('.user-score').html());
			$score += 1;
			$('.user-score').html($score)
		}
	}

});