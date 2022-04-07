<?php

include 'database.php';
$lozinka = 'admin';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);

    if (isset($data['Lozinka'])) {

        if ($data['Lozinka'] == $lozinka) {

            $stmt = $conn->prepare("DELETE FROM igrac");
            $stmt->execute();

            $stmt->close();
            $conn->close();
            $arr = array('message' => 'Uspesno ste obrisali igrace');
            header('HTTP/1.1 201 Created');
            echo json_encode($arr);
        } else {

            $arr = array('message' => 'Uneli ste pogresnu lozinku');
            header('HTTP/1.1 201 Created');
            echo json_encode($arr);
        }
    } else {

        $arr = array('message' => 'Niste uneli lozinku');
        header('HTTP/1.1 201 Created');
        echo json_encode($arr);
    }
} else {

    $arr = array('message' => 'Pogresan metod');
    header('HTTP/1.1 201 Created');
    echo json_encode($arr);
}
