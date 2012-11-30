/**
 * Sticky Menu is a super lightweight jQuery plugin to make a menu sticky/dockable/pinable.
 * @author Rory Hardy [GneatGeek]
 * @param {Object} $ - jQuery
 * @param {Object} window
 */

(function($, window) {
	/**
	 * @namespace fn.stickyMenu
	 * @method stickyMenu
	 * @param {Object} cname - Class name to append to the object
	 * @return {Object} this - Maintains Chainability
	 */
	$.fn.stickyMenu = function(cname) {
		var pinned; // Boolean Value to increase efficiency due to window.scroll's frequent execution
		var menu  = this; // The value of this will change inside the bind function so we have to store it.
		var start = menu.offset().top; // Initial position of your menu
		var id    = 'scroll.stickymenu-' + menu.attr('id'); // We need to namespace all functions.

		if (!cname) // Default CSS class to sticky if the user didn't specify their own
			var cname = "sticky";

		$(window).bind(id, function() {
			// Test to see if it is not yet pinned and if it meets our positioning requirements to pin.
			if (!pinned && (menu.offset().top - $(this).scrollTop() < 0)) {
				menu.css({
					'top' : 0,
					'position' : 'fixed'
				}).toggleClass(cname);
				pinned = true;
			} else if (pinned && $(this).scrollTop() <= start) {
				menu.css({
					'position' : 'absolute',
					'top' : start + 'px'
				}).toggleClass(cname);
				pinned = false;
			}
		});

		return this;
	};
})(jQuery, window);
