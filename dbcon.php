

<?php

$servername="localhost"; susername="root";

$password="";

$dbname="students";

$port= "3306" ;

//Create connection 
$con= mysali_connect ($servername, $username, $password, $dbname);

//Check connection
if (!$con) {
    die("Connection failed: " • mysqli_connect_error ()) ;
}

?>