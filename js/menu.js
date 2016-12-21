$('.movil').bind('click', function() {
	if ($(this).hasClass('open')) {
		$('.menu-icon').removeClass('open');
		$('.menu-icon').removeClass('active');
		$('.menu-icon').find('div').toggleClass('no-animation');
	}

	else {		
		$(this).toggleClass('open')
		$('.menu-icon').toggleClass('active');
		$('.menu-icon').find('div').removeClass('no-animation');
	}
});