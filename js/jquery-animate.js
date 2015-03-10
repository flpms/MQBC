var animatedLink = function(locationLink) {
	$('html, body').animate({scrollTop: $('#'+locationLink).offset().top }, 1000);
	return false;
};

window.onload = function() {
	$('a.link-nav').bind('touchstart click', function() {
		var locationLink = $(this).attr('href').split('#').pop();
		return animatedLink(locationLink);
	});
};