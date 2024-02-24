<?php
  $name =$_POST['name'];
  $mail =$_POST['mail'];
  $massage =$_POST['message'];
  $email_from =$_POST['email_from'];
  $email_subject ="New Form Submission";
  $email_body = "User Name:$name.\n".
                "User Email:$email.\n".
                "User Message: $message.\n";
$to = "wincoder9@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email_from \r\n";
 mail($to,$email_subject,$email_body,$headers);
 header("location:index.php");              

?>