<?php

	/* ------------------
	 * Configuration file
	 * ------------------
	 * 	[subscribe.php]
	 * 	[feedback.php]
	 */

	# Your e-mail address
	define('MY_EMAIL', 'your_email@domain.com');
	
	
	/* --- SUBSCRIBE.PHP --- */

		# Select the mode (csv or email)
		define('_mode', 'csv');
	
		# Additional info for e-mail (only in email mode)
		define('FROM', "From: Your name <any_email@{$_SERVER['HTTP_HOST']}>\r\n");
		define('SUBJECT', 'Any subject');		