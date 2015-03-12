window.onload = function() {
	$('a.link-nav').bind('touchstart click', function() {
		var locationLink = $(this).attr('href').split('#').pop();
		$('html, body').animate({scrollTop: $('#'+locationLink).offset().top }, 1000);
	});
};