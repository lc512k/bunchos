/** The theme settings **/

/* --- The countdown settings --- */

	// Formate of date: MOUNTH DAY, YEAR HOURS:MINUTES:SECONDS
	// date/time to count down to
	var end_date = 'June, 30 2014 00:00:00';
	
	// The timezone (hours or minutes from GMT) for the target times, 
	// or null for client local 
	// E.G. Target time in Moscow, Russia (GMT +4:00)
	var tm_zone = +1; 
	
	// A URL to load upon expiry, replacing the current page
	// [url OR null] e.g. "http://google.com";
	var expiry_goto = null;
	
	// Invert countdown: clockwise [false] or anticlockwise [true]
	// [true OR false]
	var countdownInvert = true;

/* --- The slider settings --- */
	
	// The list names of photos from folder "/img/slider/"
	var photos = [/*'sl-2.jpg', 'sl-1.jpg', 'sl-3.jpg', 'sl-4.jpg'*/'sl-0.jpg', 'sl-1.jpg'];
	
	// Type of animation in the slider
	// [slide OR fade]
	var animType = 'fade';
	
	// The speed of changing photos in the slider
	var animInterval = 10000;

/* --- Other settings --- */

	// Twitter
	var twitter = {
		// Turn on/off twitter widget
		enb: true,
		
		// username
		name: '_hiarn',
		
		// count of tweets
		count: 5
	}

	// Save page position
	// [true OR false]
	var save_page = false;

	// Color scheme
	var color = {
		// color of countdown
		countdown:  'rgba(255, 255, 255, 0.7)',
		
		// color of links
		links: 		'rgba(240, 0, 0, 0.6)',
		
		// color of hovered links
		linksHover:	'rgba(200, 0, 0, 1)'
	}
	
	// Turn on/off parallax
	var enb_parallax = true;
