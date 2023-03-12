<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("HTTP/1.1 200 OK");

// Create new file to see the receive value
$jsonString = json_decode(file_get_contents("php://input", ), true);
// $myFile = "Debug.txt";
// file_put_contents($myFile,$jsonString);
// echo ($jsonString['To']);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";

$mail = new PHPMailer(true);

//Enable SMTP debugging.
$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "sgp59.siteground.asia";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "sales@grand-dunman.com.sg";                 
$mail->Password = "-L#rM3Gg4b&s";                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to
$mail->Port = 2525;                                   

$mail->From = "sales@grand-dunman.com.sg";
$mail->FromName = "Dunman Residences";

$mail->addAddress($jsonString["From"], "");

$mail->isHTML(true);

$mail->Subject = $jsonString['Subject'];
$mail->Body = $jsonString['Body'];
// $mail->AltBody = "This is the plain text version of the email content";

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}

echo '{ "success": true }';