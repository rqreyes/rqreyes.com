$(document).ready(function() {
	var $options = {};

	function selectedEffect() {
		var $effects = [  'blind',
											'bounce',
											'clip',
											'drop',
											'explode',
											'fade',
											'fold',
											'highlight',
											'puff',
											'pulsate',
											'scale',
											'shake',
											'size',
											'slide',
											'transfer' ];
		var $randomNum = Math.floor(Math.random() * 15);
		var $randomEffect = $effects[$randomNum]

		if ($randomEffect === 'scale') {
			$options = {percent: 200};
		} else if ($randomEffect === 'size') {
			$options = {width: 30, height: 30};
		} else if ($randomEffect === 'transfer') {
			$options = {to: 'section', className: 'ui-effects-transfer'};
		}

		return $randomEffect;
	}

	function callback() {
		$(this).removeAttr('style');
	}

	$('img').on('click', function() {
		$(this).effect(selectedEffect() , $options, 600, callback);
	});
});