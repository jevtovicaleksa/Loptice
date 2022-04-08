<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skor igraca</title>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="sweetalert2.all.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <link rel="stylesheet" href="style.css">

</head>

<body style="background-color: aliceblue;">
  <div id="aplikacija">



    <?php include 'header.php'; ?>

    <!-- TABELA -->
    <div class="container mt-5">
      <table class="table text-center">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID igrača</th>
            <th scope="col">Ime igrača</th>
            <th scope="col">Prezime igrača</th>
            <th scope="col">Oblik figure</th>
            <th scope="col">Skor igrača</th>
          </tr>
        </thead>
        <tbody id="vrednostIgraca">
        </tbody>
      </table>
      <div class="v-100 text-center mt-5">
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Obrisi</button>
      </div>
    </div>

    <!-- Modal za lozinku -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Brisanje igraca</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <label for="lozinka">Unesite lozinku</label>
            <input type="password" id="lozinka">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="brisanjePoljaLozinke();">Zatvori</button>
            <button type="button" class="btn btn-danger obrisiSkor">Obriši</button>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- Footer -->
  <div class="footer-basic">
    <footer>
      <p class="social">ZAVRŠNI RAD - INTERNET TEHNOLOGIJE</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="index.php">Početna</a></li>
        <li class="list-inline-item"><a href="indexLoptice.php">Igra</a></li>
        <li class="list-inline-item"><a href="indexSkor.php">Skor tabela</a></li>
      </ul>
      <p class="copyright">Jevtović Aleksa Ser 21/16</p>
    </footer>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <script src="skor.js"></script>
</body>

</html>