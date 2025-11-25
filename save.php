<?php
$host = "localhost";
$user = "root";  // default in XAMPP
$pass = "";      // no password
$db = "internship_db";

$conn = new mysqli($host, $user, $pass, $db);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$age = $_POST['age'];
$education = $_POST['education'];
$skills = $_POST['skills']; // should be stringified JSON or comma-separated
$sector = $_POST['sector'];
$location = $_POST['location'];

$sql = "INSERT INTO candidates (name, age, education, skills, sector, location)
VALUES ('$name', '$age', '$education', '$skills', '$sector', '$location')";

if($conn->query($sql) === TRUE){
    echo "success";
} else {
    echo "error";
}
$conn->close();
?>
