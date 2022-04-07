<?php

include 'database.php';

$sql = "SELECT * FROM igrac ORDER BY vreme";
$result = $conn->query($sql); // rezultati upita

$nizSkorova = array(); // pravimo niz
while ($r = mysqli_fetch_assoc($result)) {
    $nizSkorova[] = $r;
}

echo json_encode($nizSkorova); // Pretvaramo u json kako bi poslali podatke na frontend
$conn->close();
