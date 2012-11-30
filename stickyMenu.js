(function($) {
	$.fn.stickyMenu = function(cn) {
		var pinned;
		var menu  = this;
		var start = this.offset().top;
		var id = menu.attr('id');

		if (!cn)
			var cn = "sticky";

		$(window).bind('scroll.stickymenu-' + id, function() {
			if (!pinned && (menu.offset().top - $(this).scrollTop() < 0)) {
				menu.css({
					'top' : 0,
					'position' : 'fixed'
				}).toggleClass(cn);
				pinned = true;
			} else if (pinned && $(this).scrollTop() <= start) {
				menu.css({
					'position' : 'absolute',
					'top' : start + 'px'
				}).toggleClass(cn);
				pinned = false;
			}
		});

		return this;
	};
})(jQuery); 