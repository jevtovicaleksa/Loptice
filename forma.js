
// Prikupljanje podataka iz forme i smestanje u localStorage
document.querySelector(".prijava").addEventListener("click", function () {

  if (validacijaForme() === true) {

    tipFigure();

    // Postavljanje pocetnog vremena.
    pocetnoVreme = new Date();

    // Kada klikom odemo na 'prijavi se' uklanja nam se forma.
    forma.classList.add("hidden");
    main.classList.remove("hidden");
    treBoja.classList.remove("hidden");
    naslovBoje.classList.remove("hidden");

    const ime = document.getElementById("ime").value;
    const prezime = document.getElementById("prezime").value;
    const oblikFigure = document.querySelector(
      'input[name="figura"]:checked'
    ).value;

    // Prikupljamo podatke iz LocalStorage-a i smestamo u promenljivu ls
    let ls = localStorage.getItem('korisnici');

    // Podatke iz forme smestamo u korisnika
    let korisnik = {
      "ime": ime,
      "prezime": prezime,
      "oblik": oblikFigure
    }

    //ako posotji item u storage-u prikupljamo te podatke i na te podatke smestamo nove koji dolaze iz forme
    if (ls != null) {

      let korisnici = JSON.parse(ls);
      korisnici.push(korisnik);
      localStorage.setItem('korisnici', JSON.stringify(korisnici));

    } else {

      // prvi put koristimo formu(aplikaciju) na ovom kompu. Pravimo niz u koji smestamo podatke iz forme a onda iz niza stavljamo u storage
      let korisnici = [];
      korisnici.push(korisnik);
      localStorage.setItem('korisnici', JSON.stringify(korisnici));

    }
  }

});

// F-ja za proveru forme.
const validacijaForme = function () {

  // Prikupljamo iz html elemente(polja) kako bi proverili da li su popunjena
  const ime = document.getElementById("ime").value;
  const prezime = document.getElementById("prezime").value;
  const figura = document.querySelector('input[name="figura"]:checked');

  // Ukoliko polja nisu popunjena prikazujemo preko labele poruku. Uklanjamo joj klasu hidden kako bi bila vidljiva.
  if (ime.trim().length === 0) {
    document.querySelector('.imeValidacija').classList.remove("hidden");
  } else if (prezime.trim().length === 0) {
    document.querySelector(".prezimeValidacija").classList.remove("hidden");
  } else if (figura === null) {
    document.querySelector(".figuraValidacija").classList.remove("hidden");
  }

  // Ukoliko prodjemo formu (sva polja budu popunjena f-ja nam vraca true). 
  if (ime.trim().length != 0 && prezime.trim().length != 0 && figura != null) {
    alert('Vase vreme krece sada');
    return true;
  } else {
    return false;
  }
}

// Oblik figure u zavisnosti od selektovanog polja
const tipFigure = function () {
  let figura = document.querySelector('input[name="figura"]:checked');
  let novioblik = figura.value;

  document.querySelectorAll('.' + oblik).forEach(function (stariOblik) {
    stariOblik.classList.remove(oblik);
    stariOblik.classList.add(novioblik);
  })
}

//Slanje podataka preko AXIOS-a
const kreiranjeIgraca = function (ukupnoVreme) {
  let data = {
    ime: document.getElementById("ime").value,
    prezime: document.getElementById("prezime").value,
    figura: document.querySelector('input[name="figura"]:checked').value,
    vreme: ukupnoVreme
  }

  axios.post('http://localhost/js-vezbanje/dodajigraca.php', data)
    .then(res => {
      console.log(res);
    })
    .catch(error => { console.error(error) });
}