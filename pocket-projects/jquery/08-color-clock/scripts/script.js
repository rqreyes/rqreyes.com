$(document).ready(function() {
	function currentTime() {
		var $current = new Date();
		var $hours = $current.getHours();
		var $minutes = $current.getMinutes();
		var $seconds = $current.getSeconds();

		$hours = ($hours < 10 ? '0' : '') + $hours;
		$minutes = ($minutes < 10 ? '0' : '') + $minutes;
		$seconds = ($seconds < 10 ? '0' : '') + $seconds;

		// Time
		var $currentTime = $hours + ':' + $minutes + ':' + $seconds;
		$('.time').html($currentTime);

		// Color
		var red = Math.round(255 * ($hours / 23)).toString(16);
		var blue = Math.round(255 * ($minutes / 59)).toString(16);
		var green = Math.round(255 * ($seconds / 59)).toString(16);

		var $currentColor = (red + blue + green).toUpperCase();
		$('.color').html ($currentColor);

		$('body').css('background-color', '#' + $currentColor);
	}

	setInterval(function(){currentTime()}, 1000);
});