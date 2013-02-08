# copyEvents

A jQuery plugin that provides methods for copying events (including the namespaces and data) from one element to another.

There are two methods, `copyEvents` and `copyEventTo`. They both take a selector, jQuery collection, or just an element reference. 

    // Copies events to the main selection from the elements passed to .copyEvents
    $('#copy_events_to_me').copyEvents('#from_me');
    
    // Copies events from the main selection to the elements passed to .copyEventsTo
    $('#copy_events_from_me').copyEventsTo('#to_me');

This plugin is tested against 1.0.4, 1.1.4, 1.2.6, 1.3.2, 1.4.4, 1.5.2, 1.6.4, 1.7.2, 1.8.2, and 1.9.1

## License

The copyEvents plugin is licensed under the MIT License (LICENSE.txt).

Copyright (c) 2013 [Brandon Aaron](http://brandonaaron.net)
