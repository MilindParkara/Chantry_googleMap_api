<?php 
	include ('config.php');

	$mysqli = new mysqli($config['mysql_server'], $config['mysql_user'], $config['mysql_password'], $config['mysql_db']);
	if ($mysqli->connect_errno) {
		printf("Connection failed: %s \n", $mysqli->connect_error);
		exit();
	}

	//$mysqli->set_charset("utf8");

	//$pokemon = $_GET["critter"];

	$myQuery = "SELECT image_id FROM tb_galleryImage";

	$result = mysqli_query($mysqli, $myQuery);
	return $result;
	var_dump(mysqli_query($mysqli,$myQuery));
?>