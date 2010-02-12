// should work with all versions of jQuery
test("copyEvents() (1.0.4+)", function() {
    var clickCount = mouseoverCount = mouseoutCount = 0;
    
    // Create event handlers for A tag
    $('#main a.from')
        .bind('click', function() { 
            clickCount++; 
        })
        .bind('mouseover', function() {
            mouseoverCount++;
        })
        .bind('mouseout', function() {
            mouseoutCount++;
        }); 
        
    // clone events from a to 'from' li tags
    $('#main li.from')
        .copyEvents('#main a.from')
        // fire events
        .trigger('click')
        .trigger('mouseover')
        .trigger('mouseout');
    
    // check counts
    ok( clickCount == 2, 'Testing click count' );
    ok( mouseoverCount == 2, 'Testing mouseover count' );
    ok( mouseoutCount == 2, 'Testing mouseout count' );
    
    // just making sure there are no errors when copying to or from an empty set or from elements with no events
    $('#does_not_exist').copyEvents('#also_does_not_exist');
    $('<div />').copyEvents('#does_not_exist');
});

// should work with all versions of jQuery
test("copyEventsTo() (1.0.4+)", function() {
    var clickCount = mouseoverCount = mouseoutCount = 0;
    
    // Create event handlers for A tag
    $('#main a.to')
        .bind('click', function() { 
            clickCount++; 
        })
        .bind('mouseover', function() {
            mouseoverCount++;
        })
        .bind('mouseout', function() {
            mouseoutCount++;
        }); 
    
    // clone events from a to 'from' li tags
    $('#main a.to')
        .copyEventsTo('#main li.to');
        
    $('#main li.to')
        // fire events
        .trigger('click')
        .trigger('mouseover')
        .trigger('mouseout');
    
    // check counts
    ok( clickCount == 2, 'Testing click count' );
    ok( mouseoverCount == 2, 'Testing mouseover count' );
    ok( mouseoutCount == 2, 'Testing mouseout count' );
});

// should work since 1.1.x when data was introduced
test("copyEvents() with data (1.1.4+)", function() {
    var clickCount = mouseoverCount = mouseoutCount = dataCount = 0;
    
    // Create event handlers for A tag
    $('#main a.from')
        .bind('click', { test: true }, function(event) { 
            if (event.data.test) dataCount++;
            clickCount++; 
        })
        .bind('mouseover', { test: true }, function(event) {
            if (event.data.test) dataCount++;
            mouseoverCount++;
        })
        .bind('mouseout', { test: true }, function(event) {
            if (event.data.test) dataCount++;
            mouseoutCount++;
        });
        
    // clone events from a to 'from' li tags
    $('#main li.from')
        .copyEvents('#main a.from')
        // fire events
        .trigger('click')
        .trigger('mouseover')
        .trigger('mouseout');
    
    // check counts
    ok( clickCount == 2, 'Testing click count' );
    ok( mouseoverCount == 2, 'Testing mouseover count' );
    ok( mouseoutCount == 2, 'Testing mouseout count' );
    ok( dataCount == 6, 'Testing data was copied' );
});

// should work since 1.1.x when data was introduced
test("copyEvents() with data (1.1.4+)", function() {
    var clickCount = mouseoverCount = mouseoutCount = dataCount = 0;
    
    // Create event handlers for A tag
    $('#main a.to')
        .bind('click', { test: true }, function(event) { 
            if (event.data.test) dataCount++;
            clickCount++; 
        })
        .bind('mouseover', { test: true }, function(event) {
            if (event.data.test) dataCount++;
            mouseoverCount++;
        })
        .bind('mouseout', { test: true }, function(event) {
            if (event.data.test) dataCount++;
            mouseoutCount++;
        });
        
    // clone events from a to 'from' li tags
    $('#main a.to')
        .copyEventsTo('#main li.to');
        
    $('#main li.to')
        // fire events
        .trigger('click')
        .trigger('mouseover')
        .trigger('mouseout');
    
    // check counts
    ok( clickCount == 2, 'Testing click count' );
    ok( mouseoverCount == 2, 'Testing mouseover count' );
    ok( mouseoutCount == 2, 'Testing mouseout count' );
    ok( dataCount == 6, 'Testing data was copied' );
});

// should work since 1.2.x when namespaced events were introduced
test("copyEvents() with data (1.2.6+)", function() {
    var clickCount = mouseoverCount = mouseoutCount = dataCount = 0;
    
    // Create event handlers for A tag
    $('#main a.from')
        .bind('click.yay.query', { test: true }, function(event) { 
            if (event.data.test) dataCount++;
            clickCount++; 
        })
        .bind('mouseover.yay.query', { test: true }, function(event) {
            if (event.data.test) dataCount++;
            mouseoverCount++;
        })
        .bind('mouseout.yay.query', { test: true }, function(event) {
            if (event.data.test) dataCount++;
            mouseoutCount++;
        });
        
    // clone events from a to 'from' li tags
    $('#main li.from')
        .copyEvents('#main a.from')
        // fire events
        .trigger('click.yay.query')
        .trigger('mouseover.yay.query')
        .trigger('mouseout.yay.query');
    
    // check counts
    ok( clickCount == 2, 'Testing click count' );
    ok( mouseoverCount == 2, 'Testing mouseover count' );
    ok( mouseoutCount == 2, 'Testing mouseout count' );
    ok( dataCount == 6, 'Testing data was copied' );
});

// should work since 1.2.x when namespaced events were introduced
test("copyEvents() with data (1.2.6+)", function() {
    var clickCount = mouseoverCount = mouseoutCount = dataCount = 0;
    
    // Create event handlers for A tag
    $('#main a.to')
        .bind('click.yay.query', { test: true }, function(event) { 
            if (event.data.test) dataCount++;
            clickCount++; 
        })
        .bind('mouseover.yay.query', { test: true }, function(event) {
            if (event.data.test) dataCount++;
            mouseoverCount++;
        })
        .bind('mouseout.yay.query', { test: true }, function(event) {
            if (event.data.test) dataCount++;
            mouseoutCount++;
        });
        
    // clone events from a to 'from' li tags
    $('#main a.to')
        .copyEventsTo('#main li.to');
        
    $('#main li.to')
        // fire events
        .trigger('click.yay.query')
        .trigger('mouseover.yay.query')
        .trigger('mouseout.yay.query');
    
    // check counts
    ok( clickCount == 2, 'Testing click count' );
    ok( mouseoverCount == 2, 'Testing mouseover count' );
    ok( mouseoutCount == 2, 'Testing mouseout count' );
    ok( dataCount == 6, 'Testing data was copied' );
});