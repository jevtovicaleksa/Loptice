<!DOCTYPE html>
<html lang="en">

<?php include 'header.php'; ?>

<div class="container forma mt-5">

  <div class="form-group">
    <label for="imeIgraca">Ime igrača</label>
    <input type="text" class="form-control" id="ime" placeholder="Upišite ime">
    <small class="imeValidacija hidden form-text text-muted">Morate uneti ime</small>
  </div>
  <div class="form-group pt-3">
    <label for="prezimeIgraca">Prezime igrača</label>
    <input type="text" class="form-control prezimeValidacija hidden" id="prezime" placeholder="Upište prezime">
    <small class="prezimeValidacija hidden form-text text-muted">Morate uneti prezime</small>
  </div>
  <label class="pt-3" for="oblikFigure">Izaberite figuru</label>
  <div class="form-check">
    <input type="radio" class="form-check-input" id="krug" name="figura" value="krug">
    <label class="form-check-label" for="krug">Krug</label>
  </div>
  <div class="form-check">
    <input type="radio" class="form-check-input" id="kvadrat" name="figura" value="kvadrat">
    <label class="form-check-label" for="kvadrat">Kvadrat</label>
  </div>
  <div class="form-check pb-3">
    <input type="radio" class="form-check-input" id="pravougaonik" name="figura" value="pravougaonik">
    <label class="form-check-label" for="pravougaonik">Pravougaonik</label>
    <small class="figuraValidacija hidden form-text text-muted ">Morate uneti prezime</small>
  </div>
  <input type="submit" class="prijava btn btn-primary" value="Start" />
</div>

<div class="main hidden"></div>

<label class="naslovBoje hidden"></label>

<div class="trenutnaBoja hidden"></div>

</div>

<?php include 'footer.php'; ?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script src="forma.js"></script>
<script src="loptice.js"></script>

</body>

</html>