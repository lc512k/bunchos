<?php
	
	session_start();
	require_once 'twitter-auth.php';
	
	$user  = $_GET['screen_name'];
	$count = $_GET['count'];
	$rts   = $_GET['include_rts'];

	$consumer_key 	 	  = "YOUR CONSUMER KEY";
	$consumer_secret 	  = "YOUR CONSUMER SECRET";

	$access_token 		  = "YOUR ACCESS TOKEN";
	$access_token_secret  = "YOUR ACCESS TOKEN SECRET";
	 
	function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
	  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
	  return $connection;
	}
	 
	$connection = getConnectionWithAccessToken($consumer_key, $consumer_secret, $access_token, $access_token_secret);
	 
	$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" . $user . "&count=" . $count . "&include_rts=".$rts);
	 
	echo json_encode($tweets);
?>