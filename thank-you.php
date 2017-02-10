<?php

if (isset($_POST['userCopy']) && $_POST['userCopy'] == 'copy')
{
  $userFirstName = $_POST['userFirstName'];
  $userLastName = $_POST['userLastName'];
  $userEmail = $_POST['userEmail'];
  $userPhone = $_POST['userPhone'];
  $userMessage = $_POST['userMessage'];

  $to = $userEmail;
  $subject = 'rqreyes.com Contact Form Submission';
  $message =
    'First Name: '.$userFirstName.'<br/>
    Last Name: '.$userLastName.'<br/>
    Email Address: '.$userEmail.'<br/>
    Phone Number: '.$userPhone.'<br/>
    <br/>
    Questions / Comments: '.$userMessage.'<br/>';

  mail($to, $subject, $message, "Content-type:text/html");
}

$submit = $_POST['userSubmit'];

if ($submit == 'Submit'){
  $userFirstName = $_POST['userFirstName'];
  $userLastName = $_POST['userLastName'];
  $userEmail = $_POST['userEmail'];
  $userPhone = $_POST['userPhone'];
  $userMessage = $_POST['userMessage'];

  $to = 'rqreyes@gmail.com';
  $subject = 'rqreyes.com Contact Form Submission';
  $message =
    'First Name: '.$userFirstName.'<br/>
    Last Name: '.$userLastName.'<br/>
    Email Address: '.$userEmail.'<br/>
    Phone Number: '.$userPhone.'<br/>
    <br/>
    Questions / Comments: '.$userMessage.'<br/>';

  mail($to, $subject, $message, "Content-type:text/html");
}

?>

<!doctype html>
<html class='no-js' lang='en'>
	<head>
		<title>Randy Q Reyes | Thank You</title>
		<meta name="robots" content="noindex, nofollow">
<?php include 'includes/header.php' ?>
				<h1>Thank You</h1>
				<p class='subtitle'>I'll get in touch shortly</p>
<?php include 'includes/body-footer.php' ?>