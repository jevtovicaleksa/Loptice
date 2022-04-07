<?php

include 'database.php';


if ($_SERVER["REQUEST_METHOD"] == "POST" && empty($_POST)) {

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);


    if (!empty($data)) {

        if (isset($data['ime']) && isset($data['prezime']) && isset($data['figura']) && isset($data['vreme'])) {

            if (!empty($data['ime']) && !empty($data['prezime']) && !empty($data['figura']) && !empty($data['vreme'])) {

                $ime = $data['ime'];
                $prezime = $data['prezime'];
                $figura = $data['figura'];
                $vreme = $data['vreme'];

                $stmt = $conn->prepare("INSERT INTO igrac (ime, prezime, figura, vreme) VALUES (?, ? ,?, ?)");
                $stmt->bind_param("ssss", $ime, $prezime, $figura, $vreme);

                $stmt->execute();

                $stmt->close();
                $conn->close();


                return json_encode(array("data" => "uspesno dodat igrac"));
            } else {

                return 'Polja su prazna';
            }
        } else {

            return json_encode(array("data" => "neuspesno dodat igrac"));
        }
    } else {

        return 'nije post';
    }
}
