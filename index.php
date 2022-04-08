<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pocetna</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>

<body>
    <div id="aplikacija">
        <!-- NAVBAR -->

        <?php include 'header.php'; ?>
        <h1 class="text-center mt-5">APLIKACIJA LOPTICE</h1>
        <div class="container text-center">
            <p class="mt-5">Aplikacija je podeljena u dva dela. Backend isporučuje RESTFULL API servise dok je Frontend
                pisan pomoću JavaScript-a. API (engl. Application Programming Interface) predstavlja interfejs
                programskog dela aplikacije. API je softverski posrednik koji omogućava dvema aplikacijama da razmenjuje
                informacije. </p><br>
            <p> Izaberite "Igra" iz navigacionog menija kako bi otpočeli igru. Srećno.</p>
        </div>
    </div>

    <!-- FOOTER -->
    <?php include 'footer.php'; ?>

</html>