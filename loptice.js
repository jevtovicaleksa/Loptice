const brojLoptica = 24;
const main = document.querySelector(".main");
const boje = ["#0984e3", "#d63031", "#ffeaa7", "#00b894", "#a29bfe"];

// Prikazujemo loptice dinamicki kroz for petlju
for (let i = 0; i <= brojLoptica; i++) {
  const randomBroj = Math.floor(Math.random() * boje.length);
  const randomBoja = boje[randomBroj];
  let lopta = document.createElement("div");
  lopta.classList.add("container");
  lopta.innerHTML = `<div class="loptica" style="background-color: ${randomBoja}" data-color="${randomBoja}"></div>`;
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
const svaPolja = document.querySelectorAll(".loptica");
svaPolja.forEach(function (jednoPolje) {
  for (let i = 0; i < boje.length; i++) {
    if (jednoPolje.dataset.color === boje[i]) {
      kolicinaBoja[i]++;
    }
  }

  // Prelaskom misa preko loptice pozivamo f-ju koja brise tu lopticu.
  let pocetnoVreme = 5;
  let a = 5;
  jednoPolje.addEventListener("mouseover", function () {
    pomocnaSekunde++;
    obrisiLoptu(jednoPolje);
    prikazatiBoju();
    if (pomocnaSekunde === 1) {
      pocetnoVreme = new Date();
      // console.log(pocetnoVreme);
      a = 10;
    } else if (pomocnaSekunde === svaPolja.length) {
      console.log(pomocnaSekunde);
      console.log(pocetnoVreme);
      console.log();
    }
    // console.log(pocetnoVreme);
    // console.log(a);
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
