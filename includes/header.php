<!doctype html>
<html class='no-js' lang='en'>
	<head>
		<?php if (isset($robots)) { echo $robots; } ?>

		<title><?php echo $pageTitle ?></title>
		<meta name='description' content='I’m a front-end web warrior by day, b-boy (breakdancer) by night, and this is my website portfolio. I live in San Diego, enjoy puzzles, and have a weakness for ramen.'>
		<meta charset='utf-8'>
		<meta http-equiv='x-ua-compatible' content='ie=edge'>
		<meta name='viewport' content='width=device-width, initial-scale=1'>
		<link rel='shortcut icon' href='images/favicon.ico' type='image/x-icon'>
		<link rel='icon' href='images/favicon.ico' type='image/x-icon'>
		<link rel='stylesheet' href='https://necolas.github.io/normalize.css/5.0.0/normalize.css'>

		<!-- Foundation -->
		<link rel='stylesheet' href='https://cdn.jsdelivr.net/foundation/6.2.0/foundation.min.css'>
		<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/motion-ui/1.1.1/motion-ui.css'>
		<link rel='stylesheet' href='http://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css'>

		<!-- Animate On Scroll -->
		<link rel='stylesheet' href='scripts/animate-on-scroll/aos.css'>

		<link rel='stylesheet' href='styles/style.css'>
	</head>
	<body>
		<div class='title-bar' data-responsive-toggle='main-menu' data-hide-for='medium'>
			<button class='menu-icon' type='button' data-toggle></button>
			<div class='title-bar-title'>Menu</div>
		</div>

		<div class='container-top-bar'>
			<div class='top-bar' id='main-menu'>
				<div class='top-bar-left'>
					<a href='#home'>Randy Q Reyes | Web Developer</a>
				</div>
				<div class='top-bar-right'>
					<ul class='menu vertical medium-horizontal' data-responsive-menu='accordion medium-dropdown'>
						<li><a href='#projects'>Projects</a></li>
						<li><a href='#testimonials'>Testimonials</a></li>
						<li><a href='#about'>About</a></li>
						<li><a href='#contact'>Contact</a></li>
					</ul>
				</div>
			</div>
		</div>

		<span class='anchor' id='home'></span>
		<header>
			<div class='row columns text-center'>
				<img src='images/logo.png' alt='randy q reyes logo' width='180' height='209' data-aos='zoom-out' data-aos-delay='1000'>
				<h1><?php echo $h1 ?></h1>
				<p class='subtitle'><?php echo $subtitle ?></p>