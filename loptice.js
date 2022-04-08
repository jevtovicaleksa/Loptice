const brojLoptica = 24;
const main = document.querySelector(".main");
const forma = document.querySelector(".forma");
const naslovBoje = document.querySelector(".naslovBoje");
const treBoja = document.querySelector(".trenutnaBoja");
const boje = ["#0984e3", "#d63031", "#ffeaa7", "#00b894", "#a29bfe"];
const naizmenicneBoje = boje.sort((a, b) => 0.5 - Math.random());

let oblik = "pravougaonik";

// Setujemo promenljive koje koristimo za izracunavanje vremena. Prosledjujemo ih funkciji
let pocetnoVreme = 0;
let krajnjeVreme = 0;

// Setujemo promenljivu koju koristimo za promenu boje
let pomocnaBoja = 0;

// Prikazujemo loptice dinamicki kroz for petlju
for (let i = 0; i <= brojLoptica; i++) {
  const randomBroj = Math.floor(Math.random() * boje.length);
  const randomBoja = boje[randomBroj];
  let lopta = document.createElement("div");
  lopta.classList.add("container");
  lopta.innerHTML = `<div class="${oblik}" style="background-color: ${randomBoja}" data-color="${randomBoja}"></div>`;
  main.append(lopta);
}

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
    obrisiLoptu(jednoPolje, pocetnoVreme);
    prikazatiBoju();
  });
});
// Funkcija za brisanje loptice. Ukoliko se boja loptice poklapa sa redosledom boje iz niza obrisace se loptica.
const obrisiLoptu = function (loptica, pocetak) {
  if (loptica.dataset.color === boje[pomocnaBoja]) {
    loptica.remove();
    kolicinaBoja[pomocnaBoja]--;
    if (kolicinaBoja[pomocnaBoja] === 0) {
      pomocnaBoja++;
      if (pomocnaBoja >= boje.length) {
        krajnjeVreme = new Date();
        let ukupnoVreme = Math.abs((krajnjeVreme - pocetak) / 1000);

        // Dopunjavanje u localstorage vreme za svakog korisnika.
        // Prikuoljamo podatke koji se vec nalaze u ls, prilikom popunjavanja forme
        let lStorage = JSON.parse(localStorage.getItem("korisnici"));

        // Poslednjem korisniku dodajemo vreme za koje je preso igricu
        lStorage[lStorage.length - 1]["vreme"] = ukupnoVreme;
        localStorage.setItem("korisnici", JSON.stringify(lStorage));
        alert(`Vase vreme je ${ukupnoVreme} sekundi`);
        kreiranjeIgraca(ukupnoVreme);
        window.location.href = "indexSkor.php";
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