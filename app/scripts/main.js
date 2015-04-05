$(document).ready(function(){
	'use strict';
	$('#loader').removeClass('logo-big');

	$('.navbar-toggle').click(function(){
		$(this).toggleClass('is-opened');
	});
});