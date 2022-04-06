<?php 

include 'database.php';
<<<<<<< HEAD

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
=======
// echo 'AAA';
$lozinka = 'admin';


if($_SERVER['REQUEST_METHOD'] === 'POST'){

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
//     print_r($data);
//    print_r($data['Lozinka']);

   if(isset($data['Lozinka'])){
        if($data['Lozinka'] == $lozinka){
            $stmt = $conn->prepare("DELETE FROM igrac");
            $stmt->execute();

            $stmt->close();
            $conn->close();
        }else{
            // echo 'NEE';
           $arr = array('message' => 'Uneli ste pogresnu lozinku');
           header('HTTP/1.1 201 Created');
           echo json_encode($arr);
        }
   }else{
       echo 'Niste uneli lozinku';
   }

}else{
    echo 'Pogresan metod';
}
>>>>>>> 33e1f7977d931783a7190543c3893dcc7503b6a1
