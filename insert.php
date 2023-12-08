<?php
//include the database connection
include ("dbcon.php");
//set the timezone
date_default_timezone_set('Europe/Dublin');
//select all records from the student table
$sql = "select * from student_info";

echo "<TABLE border='1'>";
//exucute the sql query and store the result in the result variable
$result = mysqli_query ($con, $sql);

while($row = mysqli_fetch_assoc($result)) {
    $fn= $row ['firstname'];
    $sn= $row ['surname'];
    $dob= $row ['dateofbirth'];
    $PPSN= $row ['PPSN'];
    $address= $row ['address'];
    $email= $row ['email'];

   echo "<tr><td>$fn</td><td>$sn</td><td>$dob</td><td>$PPSN</td><td>$address</td><td>$email</td></tr>";
}
echo "</TABLE>"; 

mysqli_close($con);

?>