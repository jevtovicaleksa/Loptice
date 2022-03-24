const brojLoptica = 24;
const main = document.querySelector(".main");
const forma = document.querySelector(".forma");
const naslovBoje = document.getElementById("naslovBoje");
const boje = ["#0984e3", "#d63031", "#ffeaa7", "#00b894", "#a29bfe"];
const naizmenicneBoje = boje.sort((a, b) => 0.5 - Math.random());
let oblik = "oblikPravougaonik";


// Prikazujemo loptice dinamicki kroz for petlju
for (let i = 0; i <= brojLoptica; i++) {
  const randomBroj = Math.floor(Math.random() * boje.length);
  const randomBoja = boje[randomBroj];
  let lopta = document.createElement("div");
  lopta.classList.add("container");
  lopta.innerHTML = `<div class="${oblik}" style="background-color: ${randomBoja}" data-color="${randomBoja}"></div>`;
  main.append(lopta);
}

let pomocnaBoja = 0;
let pomocnaSekunde = 0;

// Kreiramo prazan niz u koji smestamo onoliko elemenata koliko ima boja
let kolicinaBoja = [];
for (let i = 0; i < boje.length; i++) {
  kolicinaBoja.push(0);
}

// Prolazimo kroz sve loptice. Za svaku lopticu proverimo da li se boje poklapaju. Ukoliko se poklapaju povecamo odredjenu boju za jedan
const svaPolja = document.querySelectorAll(`.${oblik}`);
svaPolja.forEach(function (jednoPolje) {
  for (let i = 0; i < boje.length; i++) {
    if (jednoPolje.dataset.color === boje[i]) {
      kolicinaBoja[i]++;
    }
  }
  // Prelaskom misa preko loptice pozivamo f-ju koja brise tu lopticu.
  jednoPolje.addEventListener("mouseover", function () {
    obrisiLoptu(jednoPolje);
    prikazatiBoju();
  });
});

// Funkcija za brisanje loptice. Ukoliko se boja loptice poklapa sa redosledom boje iz niza obrisace se loptica.
const obrisiLoptu = function (loptica) {
  if (loptica.dataset.color === boje[pomocnaBoja]) {
    loptica.remove();
    kolicinaBoja[pomocnaBoja]--;
    if (kolicinaBoja[pomocnaBoja] === 0) {
      pomocnaBoja++;
      if (pomocnaBoja >= boje.length) {
        alert("Svaka cast");
        // window.location.reload();
      }
    }
  } else {
    alert("Boja nije odgovarajuca");
    window.location.reload(); // restartuje mi stranicu
  }
};

// Trenutna boja. Funkcija koja se poziva prilikom prelaska misa preko nekog elementa
const prikazatiBoju = function () {
  const trenutnaBoja = document.querySelector(".trenutnaBoja");
  let trBoja = document.createElement("div");
  trBoja.classList.add("trBoja");
  trBoja.style.backgroundColor = `${boje[pomocnaBoja]}`;
  //ukoliko postoje child elementi u divu pod klasom trenutna boja ukloni mi prvi element
  if (trenutnaBoja.hasChildNodes()) {
    trenutnaBoja.removeChild(trenutnaBoja.children[0]);
  }
  trenutnaBoja.append(trBoja);
};

// Prikazuje mi prvu boju koju treba da uklonim
const trenutnaBoja = document.querySelector(".trenutnaBoja");
trenutnaBoja.style.backgroundColor = `${boje[pomocnaBoja]}`;


// Prikupljanje podataka iz forme i smestanje u localStorage
document.querySelector(".prijava").addEventListener("click", function () {
  if(validacijaForme() === true){
    forma.classList.add("hidden");
    main.classList.remove("hidden");
    naslovBoje.classList.remove("hidden");
  
    const ime = document.getElementById("ime").value;
    const prezime = document.getElementById("prezime").value;
    const oblikFigure = document.querySelector(
      'input[name="figura"]:checked'
    ).value;
  
    // Smestanje podataka u localStorage
    let podaciLocalStorage = [];
    let korisnik = {
      "ime" : ime,
      "prezime" : prezime,
      "oblik" : oblikFigure
    }
  
    podaciLocalStorage.push(korisnik);
    // let korisnici = localStorage.setItem('korisnici', JSON.stringify(podaciLocalStorage));
  }
});

// F-ja za proveru forme.
const validacijaForme = function() {
  // Prikupljamo iz html elemente(polja) kako bi proverili da li su popunjena
  const ime = document.getElementById("ime").value;
  const prezime = document.getElementById("prezime").value;
  const figura = document.querySelector('input[name="figura"]:checked');
// Ukoliko polja nisu popunjena prikazujemo preko labele poruku. Uklanjamo joj klasu hidden kako bi bila vidljiva.
  if(ime.trim().length === 0){
    document.querySelector('.imeValidacija').classList.remove("hidden");
    console.log('1');
  }else if(prezime.trim().length === 0){
    document.querySelector(".prezimeValidacija").classList.remove("hidden");
    console.log(2);
  }else if(figura === null){
    document.querySelector(".figuraValidacija").classList.remove("hidden");
    console.log(3);
  }

// Ukoliko prodjemo formu (sva polja budu popunjena f-ja nam vraca true). 
  if(ime.trim().length != 0 && prezime.trim().length != 0 && figura != null ){
    return true;
  }else{
    return false;
  }
}