<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$subject=$_POST['subject'];
$message= $_POST['message'];

$to = "vamshiladdu418@gmail.com";
$subject = "Mail From My Profile website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n  Subject = " . $subject .  "\r\n Message =" . $message;

$headers = "From: $email" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>
