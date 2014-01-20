<?php
	
/* -----------------------------------------------------------------------------
 * Warning: Script must return TRUE (if allright) or FALSE (if something wrong)
 * -----------------------------------------------------------------------------
 */
 
 	require_once "conf.php";
		
	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		echo 0;
		exit;
	}
	
	$from = "From: {$_POST['email']}\r\n";
	$subject = $_POST['subject'];
	$message = $_POST['mess'];
	
	ob_start();
	$r = mail(MY_EMAIL, SUBJECT, $message, $from);
	ob_end_clean();
		
	echo ($r) ? 1 : 0;