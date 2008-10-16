/* Copyright (c) 2008 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.1.1-pre
 */

(function($) {

$.fn.extend({
	copyEvents: function(from) {
		$.event.copy( $(from), this );
		return this;
	},
	
	copyEventsTo: function(to) {
		$.event.copy( this, $(to) );
		return this;
	}
});

$.event.copy = function(from, to) {
	var events = $.data(from[0], 'events');
	if ( !from.size() || !events || !to.size() ) return;

	to.each(function() {
		for (var type in events)
			for (var handler in events[type])
				$.event.add(this, type, events[type][handler], events[type][handler].data);
	});
};

})(jQuery);