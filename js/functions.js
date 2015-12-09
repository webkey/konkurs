		/*placeholder*/
function placeholderInit() {
	$('[placeholder]').placeholder();
}
/*placeholder end*/

/*drop navigation*/
function dropNavigation() {
	$('.header').on('click', '.btn-menu', function (e) {
		var btn = $(this);
		btn.closest('.header')
			.find('.header-options')
			.stop()
			.slideToggle(function () {
				if ($(this).is(':visible')) {
					btn.addClass('active')
						.closest('.wrapper')
						.addClass('menu-expanded');
				} else {
					btn.removeClass('active')
						.closest('.wrapper')
						.removeClass('menu-expanded');
				}
			});

		e.preventDefault();
	});
}
function clearDropNavigation() {
	var dropNav = $('.header-options'),
		btnMenu = $('.btn-menu');

	if (dropNav.is(':visible') && btnMenu.is(':visible')) {
		dropNav.slideUp(function () {
			$('.wrapper').removeClass('menu-expanded');
			btnMenu.removeClass('active');
		});
	}

	if (dropNav.attr('style') && btnMenu.is(':hidden')) {
		dropNav.attr('style', '');
		btnMenu.removeClass('active');
	}
}
/*drop navigation end*/
/*scroll to section*/
function scrollToSection() {
	$('.nav-list').on('click', 'a[href^="#"]', function(){
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
		}
		return false;
	});
}
/*scroll to section end*/
/** ready/load/resize document **/

$(document).ready(function () {
	dropNavigation();
	placeholderInit();
	scrollToSection();
});
$(window).load(function () {
	$('body').addClass('load-ready');
});
$(window).on("debouncedresize", function (event) {
	clearDropNavigation();
});