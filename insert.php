
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student_info";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $DOB = $_POST['DOB'];
    $PPSN = $_POST['PPSN'];
    $address = $_POST['address'];
    $email = $_POST['email'];

    $sql = "INSERT INTO students (name, DOB, PPSN, address, email,) VALUES ('$name','$DOB', '$PPSN','$address','$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Record inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
