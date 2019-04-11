1
<?php
if(isset($_POST['submit'])){
$mailFrom = $_POST['mail'];
$message = $_POST['message'];

$mailTo = "piyush.sharma1078@gmail.com";
$headers = "From: ".$mailFrom;
$txt = "You have recieved an email from ".$name.".\n\n".$message;

mail($mailto, $txt, $headers);
header("Location: index.php?mailsend")

}
?>



