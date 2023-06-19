<?php 
$uname=$_GET['name'];
$uemail=$_GET['email'];
$pwd=$_GET['pass'];
$dbcnx = mysqli_connect("localhost", "root", "","mobilestore");
if (!$dbcnx) {
echo( "<P>Unable to connect to the " .
"database server at this time.</P>" );
exit();
}
mysqli_select_db($dbcnx,"mobilestore");
$sql="select id from users";

$result=mysqli_query($dbcnx,$sql);
$row = mysqli_fetch_array($result,MYSQLI_BOTH) ;
$rowCount =mysqli_num_rows($result);

$id = $rowCount+1;
$sql2 = "INSERT INTO users (id, email, pass) VALUES ('$id', '$uemail', '$pwd')";
if (mysqli_query($dbcnx, $sql2)) {
    echo "New account created";
} else {
    echo "Error: " . $sql2 . "<br>" . mysqli_error($dbcnx);
}



?>