<?php 

/* -----------------------------------------------------------------------------
 * Warning: Script must return TRUE (if allright) or FALSE (if e-mail not valid)
 * -----------------------------------------------------------------------------
 *
 * The script can work in two modes: CSV and Email
 * CSV [default]: The script saves emails to the file "emails.csv" in .csv format
 * Email: The script sends emails on your email address
 */
 
	require_once "conf.php";
 
	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		echo 0;
		exit;
	}
	
	switch (_mode) {
		case 'email':
			$message = $_POST['email'];
			
			ob_start();
			$r = mail(MY_EMAIL, SUBJECT, $message, FROM);
			ob_end_clean();
			
			echo ($r) ? 1 : 0;
			break;
		
		default: 
			$fp = fopen('emails.csv', 'a');
		
			if ($fp) {
				$emails = file('emails.csv');	
				
				$in_list = false;
				foreach($emails as $k => $v) {	
					$email = explode(',', $v);
					if ($_POST['email'] == $email[0]) {
						$in_list = true;
						break;
					}
				}
					
				if (!$in_list) {
					$lang = explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']);
					$w = fputcsv($fp, array($_POST['email'], $_SERVER['REMOTE_ADDR'], $lang[0]));
					
					if ($w) {
						echo 1;
						exit;
					}
				}
			}
			
			echo 0;
	}