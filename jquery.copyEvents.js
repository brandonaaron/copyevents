/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.4
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
   $.fn.extend({
        copyEvents: function(from) {
            $.event.copy($(from), this);
            return this;
        },

        copyEventsTo: function(to) {
            $.event.copy(this, $(to));
            return this;
        }
    });

    $.event.copy = function(from, to) {
        // $._data: 1.8 branch
        // $.data wasn't introduced until the 1.2 branch
        // 1.1 branch stored event data on the element using "$events" expando
        // 1.0 branch stored event data on the element using "events" expando
        var fromEl = from[0],
            events = fromEl && (($._data && $._data(fromEl, 'events')) || ($.data && $.data(fromEl, 'events')) || fromEl.$events || fromEl.events) || {};

        to.each(function() {
            var elem = this;
            for (var type in events) {
                // in jQuery 1.4.2+ event handlers are stored in an array, previous versions it is an object
                $.each(events[type], function(index, handler) {
                    // in jQuery 1.4.2+ handler is an object with a handle property
                    // in previous versions it is the actual handler with the properties tacked on
                    var namespaces = handler.namespace !== undefined && handler.namespace || handler.type || '';
                    namespaces = namespaces.length ? (namespaces.indexOf('.') === 0 ? '' : '.') + namespaces : '';
                    $.event.add(elem, type + namespaces, handler.handler || handler, handler.data);
                });
            }
        });
    };
}));
