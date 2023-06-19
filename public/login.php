<?php 
$uemail=$_GET['email'];
$pwd=$_GET['pass'];
$dbcnx = mysqli_connect("localhost", "root", "","mobilestore");
if (!$dbcnx) {
echo( "<P>Unable to connect to the " .
"database server at this time.</P>" );
exit();
}
mysqli_select_db($dbcnx,"mobilestore");
$sql="select * from users";
$result=mysqli_query($dbcnx,$sql);
$f=1;

while ( $row = mysqli_fetch_array($result,MYSQLI_BOTH) ) {
if(($row['email']==$uemail) && ($row['pass']==$pwd))
{
$f=0;
}
}

if($f==0)
{
    echo("<script>alert('Login successful')</script>");
    
}
else
{
    header('Location:login.html');
}

?>