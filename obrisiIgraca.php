<?php 

include 'database.php';
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