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
/** ready/load/resize document **/

$(document).ready(function () {
	dropNavigation();
	placeholderInit();
});
$(window).load(function () {
	$('body').addClass('load-ready');
});
$(window).on("debouncedresize", function (event) {
	clearDropNavigation();
});