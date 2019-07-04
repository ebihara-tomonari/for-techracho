<?php
$to      = 'nobody@example.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: webmaster@example.com';

mail($to, $subject, $message, $headers);
?>
<h1>送信できたかな……</h1>
