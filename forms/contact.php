<?php
// Simple anti-spam check
if (!empty($_POST['first_name'])) {
  http_response_code(403);
  exit('Spam detected.');
}

// Validate input
if (!isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'])) {
  http_response_code(400);
  exit('Missing required fields.');
}

// Sanitize input
$name = htmlspecialchars(strip_tags($_POST['name']));
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(strip_tags($_POST['subject']));
$message = htmlspecialchars(strip_tags($_POST['message']));

// Receiver email
$to = 'contact@gigodeliveryservices.com';  // 🔁 Replace with your email

// Email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Full message
$body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";

// Send mail
if (mail($to, $subject, $body, $headers)) {
  echo "OK";
} else {
  http_response_code(500);
  echo "Failed to send email.";
}
?>
