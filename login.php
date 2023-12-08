<?php
session_start();

// Include the database connection
include("dbcon.php");

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get username and password from the form
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    // Query to check if the user exists in the database
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = mysqli_query($con, $sql);

    if ($result) {
        // Check if a user with the given username exists
        if (mysqli_num_rows($result) == 1) {
            $row = mysqli_fetch_assoc($result);
            $hashedPassword = $row['password'];

            // Verify the password
            if (password_verify($password, $hashedPassword)) {
                // Successful login
                $_SESSION['username'] = $username;
                header("Location: dashboard.php"); // Redirect to a dashboard page
                exit();
            } else {
                // Invalid password
                echo "Invalid username or password";
            }
        } else {
            // Invalid username
            echo "Invalid username or password";
        }
    } else {
        // Query execution error
        echo "Error: " . mysqli_error($con);
    }

    // Close the database connection
    mysqli_close($con);
}
?>
