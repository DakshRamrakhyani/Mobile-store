<?php 
$name=$_GET['name'];
$sub=$_GET['subject'];
$message=$_GET['message'];
$dbcnx = mysqli_connect("localhost", "root", "","mobilestore");
if (!$dbcnx) {
echo( "<P>Unable to connect to the " .
"database server at this time.</P>" );
exit();
}
mysqli_select_db($dbcnx,"mobilestore");

$sql = "INSERT INTO feedback (name,subject,feedback) VALUES ('$name', '$sub', '$message')";
if (mysqli_query($dbcnx, $sql)) {
    echo "Feedback succesfully sent";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($dbcnx);
}



?>