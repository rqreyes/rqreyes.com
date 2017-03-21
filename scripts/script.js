$(document).ready(function () {
	// Foundation
	$(document).foundation();

	// Animate On Scroll
	AOS.init({
		easing: 'ease-out-back',
		duration: 1000
	});

	// Smooth Scroll
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);

				return false;
			}
		}
	});

	// Update Class On Scroll
	var homeY = $('body').offset();
	var projectsY = $('.projects').offset();
	var testimonialsY = $('.testimonials').offset();
	var aboutY = $('.about').offset();
	var contactY = $('form').offset();

	console.log(homeY);
	console.log(projectsY);
	console.log(testimonialsY);
	console.log(aboutY);
	console.log(contactY);

	$(window).scroll(function() {
		var scrollY = $(window).scrollTop();
		console.log(scrollY);

		if (scrollY >= homeY.top) {
			$('a[href="#home"]').addClass('active');
			$('a:not(a[href="#home"])').removeClass('active');
		}

		if (scrollY >= projectsY.top) {
			$('a[href="#projects"]').addClass('active');
			$('a:not(a[href="#projects"])').removeClass('active');
		}

		if (scrollY >= testimonialsY.top) {
			$('a[href="#testimonials"]').addClass('active');
			$('a:not(a[href="#testimonials"])').removeClass('active');
		}

		if (scrollY >= aboutY.top) {
			$('a[href="#about"]').addClass('active');
			$('a:not(a[href="#about"])').removeClass('active');
		}

		if (scrollY >= contactY.top) {
			$('a[href="#contact"]').addClass('active');
			$('a:not(a[href="#contact"])').removeClass('active');
		}
	});

	$(window).scroll();
	$('a[href="#home"], a[href="#projects"], a[href="#testimonials"], a[href="#about"], a[href="#contact"]').on('click', function() { $(window).scroll(); });

	// Scroll To Top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 600);

		return false;
	});
});