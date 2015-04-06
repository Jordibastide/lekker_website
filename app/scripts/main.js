$(document).ready(function(){
	'use strict';
	$('#loader').removeClass('logo-big');

	$('.navbar-toggle').click(function(){
		$(this).toggleClass('is-opened');
	});
	$('.popup').click(function() {
		var width  = 575,
		    height = 400,
		    left   = ($(window).width()  - width)  / 2,
		    top    = ($(window).height() - height) / 2,
		    url    = this.href,
		    opts   = 'status=1' +
		             ',width='  + width  +
		             ',height=' + height +
		             ',top='    + top    +
		             ',left='   + left;

		window.open(url, 'twitter', opts);
		return false;
	});
});