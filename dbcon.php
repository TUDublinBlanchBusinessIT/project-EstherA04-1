<?php

$servername="localhost";

$username="root";

$password="";

$dbname="student_info";

$port= "3306" ;
// set the timezone
date_default_timezone_set('Europe/Dublin');
//Create connection 
$con= mysqli_connect ($servername, $username, $password, $dbname);

//Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error ()) ;
}

?>