const tekst = document.querySelector(".unesiPolje");
const dugme = document.querySelector(".potvrdi");
const lista = document.querySelector(".liste");

let niz = [];
let pozicijaElementa = 0;
let tipDugmeta = 1;

// Na dugme "potvrdi" pozovi mi f-ju potvrdi formu
document.querySelector("#forma").addEventListener("submit", function (e) {
  e.preventDefault();

  // ovde ide provera ako je tipDugmeta == 1 onda radi novo dodavanje, ako je == 0 onda staro dodavanje
  if (tipDugmeta === 1) {
    potvrdiFormu();
  } else {
    izmeni();
  }
});

// F-ja koja upisuje nove liste
const potvrdiFormu = function () {
  let vrednost = tekst.value;
  niz.push(vrednost);
  let li = document.createElement("li"); // kreiramo element li
  li.innerHTML = `<div class="prvaLista" style="display: flex">
        <div class="vrednost">${vrednost}</div>
        <div class="xVrednost" style="margin-left: 10px">X</div>
    </div>`;
  console.log(li);
  lista.append(li);
  tekst.value = "";
};

// Klikom na listu brisem dinamicki dodate redove u listi pozivanjem funkcije
document.querySelector(".liste").addEventListener("click", function (e) {
  tipDugmeta = 1;

  obrisiElemen(e);
});

// Funkcija koja brise element
const obrisiElemen = function (e) {
  if (e.target.className === "xVrednost") {
    // vraca mi ceo niz
    let parentLi = e.target.parentElement.parentElement;
    let newValue = e.target.parentElement.children[0].textContent;

    // trazim poziciju u nizu za klinkutu vrednsot
    const findIndexOfList = function (i) {
      return i === newValue;
    };
    const indexListe = niz.findIndex(findIndexOfList);

    //brisemo taj element iz niza
    niz.splice(indexListe, 1);
    parentLi.remove();
  }
};

// Pokupljanje vec kreirane vrednosti iz liste
document.querySelector(".liste").addEventListener("click", function (e) {
  tipDugmeta = 0;
  if (e.target.className === "vrednost") {
    let newValue = e.target.parentElement.children[0].textContent;
    tekst.value = newValue;
    pozicijaElementa = niz.indexOf(tekst.value);
    console.log(pozicijaElementa);
  }
  console.log(niz);
});

// F-ja koja menja vrednost
const izmeni = function () {
  // const pozicijaElementa = niz.indexOf(tekst.value);
  console.log(pozicijaElementa);
  niz[pozicijaElementa] = tekst.value;

  let sveVrednosti = document.querySelectorAll(".vrednost");
  sveVrednosti[pozicijaElementa].textContent = tekst.value;
  tipDugmeta = 1;
};
