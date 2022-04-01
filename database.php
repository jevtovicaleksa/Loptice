<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "igrica";

// kreiranje konekcije
$conn = new mysqli($servername, $username, $password, $dbname);

// provera konekcije
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}
// echo "Uspesna konekcija";