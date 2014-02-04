<!DOCTYPE html>
<?php 
	$context = 'dev'; // switch to 'dev' or 'prod';

	if($context == 'dev'){
		$url = null;
	}else if($context == 'prod'){
		$url = 'dist/';
	}
?>
<!--[if IE 7]><html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8]><html class="no-js ie8" lang="en"> <![endif]-->
<!--[if IE 9]><html class="no-js ie9" lang="en"> <![endif]-->

<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge" /><![endif]-->

	<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">

	<title>Your Project</title>

	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	
	<script src="js/libs/modernizr-2.6.2.min.js"></script>
	
	<link rel="stylesheet" href="<?php echo $url ?>css/reset.css" />
	<link rel="stylesheet" href="<?php echo $url ?>css/style.css" />
</head>

