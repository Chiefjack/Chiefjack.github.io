<?php
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $email = $_POST['email_address'];
  $category = $_POST['category'];
  $message = $_POST['subject'];

  $email_from = 'chiefjackgdbusiness@gmail.com';

  $email_subject = "[OFFICIAL] Creator School Contact Us Response";

  $email_body = "User's Name: $first_name\n".
                "User's Surname: $last_name\n".
                "User's Email: $email\n".
                "Message Category: $category\n".
                "User's Message: $message\n";

  $to = "jackygems2003@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $email \r\n";

  $headers .= MIME-Version: 1.0 \r\n";

  $headers .= "Content-type: text/html; charset-utf-8";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: contact_us.html");
?>
