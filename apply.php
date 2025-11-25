<?php
// Database connection
$host = "localhost";
$user = "root";       // default XAMPP user
$pass = "";           // default XAMPP password is empty
$db   = "pm_internships";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from POST request
$name            = $_POST['name'] ?? '';
$age             = $_POST['age'] ?? null;
$education       = $_POST['education'] ?? '';
$skills          = $_POST['skills'] ?? '';
$sectors         = $_POST['sectors'] ?? '';
$location        = $_POST['location'] ?? '';
$internship_id   = $_POST['internship_id'] ?? null;
$internship_title= $_POST['internship_title'] ?? '';
$company         = $_POST['company'] ?? '';

// Basic validation
if ($name === '' || $age === null || $education === '' || $location === '' || $internship_id === null) {
    echo "error";
    exit;
}

// Insert into DB using prepared statement (safer)
$stmt = $conn->prepare("
    INSERT INTO applications 
    (name, age, education, skills, sectors, location, internship_id, internship_title, company)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
");

$stmt->bind_param(
    "sissssiss",
    $name,
    $age,
    $education,
    $skills,
    $sectors,
    $location,
    $internship_id,
    $internship_title,
    $company
);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "error";
}

$stmt->close();
$conn->close();
?>
