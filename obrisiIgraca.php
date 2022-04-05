<?php 

include 'database.php';

$stmt = $conn->prepare("DELETE FROM igrac WHERE lozinka != 'admin'");
$stmt->execute();

$stmt->close();
$conn->close();
// var_dump($_POST);
// if($_SERVER['REQUEST_METHOD'] === 'POST'){
//     $request_body = file_get_contents('php://input');
//     $data = json_decode($request_body, true);

//     print $data;

// }else{
//     echo 'nee';
// }
// // $stmt = $conn->prepare("DELETE FROM igrac WHERE id = ")