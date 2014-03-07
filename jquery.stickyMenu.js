/**
 * Sticky Menu is a super small jQuery plugin to make a menu sticky/dockable/pinable.
 *
 * @author Rory Hardy [GneatGeek]
 * @param {Object} $ - jQuery
 * @param {Object} window
 */

(function($, window) {

    /**
     * @namespace fn.stickyMenu
     * @method stickyMenu
     * @param  {Object} cname - Class name to append to the object
     * @return {Object} this - Maintains Chainability
     * @param {Object} toggleelem - Element for toggle effects
     * @param {Bool} togglevisible - Toggle visibility on effects trigger
     */

    $.fn.stickyMenu = function(cname,toggleelem, togglevisible) {
        var pinned,
            menu  = this;
//        if ( !toggleelem )
        var start = toggleelem.offset().top;
//        else
//            var start = this.offset().top;

        if ( !cname )
            cname = 'sticky';

        $(window).bind('scroll.stickymenu-' + menu.attr('id'), function() {

            //console.log($(this).scrollTop(), start);

            if ( pinned ) {
                if ( $(this).scrollTop() <= start || $(this).scrollTop() == start) {
                    menu.toggleClass(cname);
                    if ( togglevisible ) menu.hide();
                    pinned = false;
                }
            } else if ( $(this).scrollTop() > start ) {
                menu.toggleClass(cname);
                if (togglevisible) menu.show();
                pinned = true;
            }
        });

        return this;
    };
})(jQuery, window);
