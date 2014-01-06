function newY(pos, inertia) {
	// Parallax of <img> in slider
	return (-pos * inertia);
}

// Fix problems in different browsers
function bagfix() {
	 if (jQuery.browser.mozilla) {
		 // Firefox
		 $('#about .photos > .item.third.nopic > span').css({backgroundPosition: '50% 20px'});
	 }
	
	if($.support.opacity && !jQuery.browser.opera) {
		// All new browsers
		$('#about .photos > .nopic > span').css({'background-image': 'url(img/about/nopic.svg)'});
	}
	
	// Fix placeholder
	$('textarea[placeholder], input[placeholder]').placeholder();
}

function str_tweet_date(tweet_d) {
	//  Localize the date (Twitter widget)
	var n = 1000;
	var o = n*60;
	var p = o*60;
	var s = p*24;
	var m = s*7;
	
	var u = new Date() - new Date(tweet_d);	
	
	if (isNaN(u) || u<0) return "";
	if (u<n*2) return"right now";
	if (u<o) return Math.floor(u/n) + " seconds ago";
	if (u<o*2) return "about 1 minute ago";
	if (u<p) return Math.floor(u/o) + " minutes ago";
	if (u<p*2) return "about 1 hour ago";
	if (u<s) return Math.floor(u/p) + " hours ago";
	if (u>s && u<s*2) return "yesterday";
	if (u<s*365) { return Math.floor(u/s) + " days ago" } else { return "over a year ago" }
}

function set_color() {
	// Set the color scheme
	$('a').css('color', color.links).hover(function(){
		$(this).css('color', color.linksHover)
	}, function() { $(this).css('color', color.links) });
	
	$('#contacts .social > ul.twitter a').hover(function() {
		$(this).css({
			'color': 'white', 
			'background': color.linksHover
		});
	}, function() { 
		$(this).css({
			'color': color.links, 
			'background': 'none'
		}) 
	});
}

function isEmail(email) {
	//  Check up email
	var reg = /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i;
	return reg.test(email);
}