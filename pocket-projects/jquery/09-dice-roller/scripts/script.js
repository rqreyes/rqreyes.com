$(document).ready(function() {
	function randomNum() {
		return Math.floor((Math.random() * 6) + 1);
	}

	$('.container-dice').on('click', roll);

	function roll() {
		$('.dice').fadeOut('slow');
		setTimeout(function() {
			$('.dice').remove();
		}, 800);
		$('.hand-closed').fadeIn('slow').effect('shake').fadeOut('slow');
		$('.hand-open').delay(1000).fadeIn('slow').fadeOut('slow');
		setTimeout(function() {
			for (i = 0; i < 2; i++) {
				$('.container-dice').hide().append('<img class="dice" src="images/dice-' + randomNum() + '.png" width="140" height="160">').fadeIn('slow');
			}
		}, 1000);
	};
});