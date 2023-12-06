
<?php

include ("dbcon, php");

$sql = "select * from students";

echo "<TABLE border='1'>"

$result = mysqli_query ($con, $sql);

while($row = mysqli_fetch_assoc($result)) {
    $fn= $row ['firstname'];
    $sn= $row ['surname'];
    $dob= $row ['dateofbirth];
    $PPSN= $row ['PPSN'];
    $address= $row ['address'];
    $email= $row ['email'];

   echo <TR><TD>$fn/TD><TD>$sn/TD><TD>$dob</TD<TD>$PPSN</TD<TD>$address</TD<TD>$email";
}
echo "</TABLE>"; . 

mysqli_close(scon);

?>