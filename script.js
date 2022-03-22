"use strict";
// Zadatak1
// const color = ["red", "blue", "yellow", "orange", "black"];
// document.querySelector(".btn-color").addEventListener("click", function () {
//   let random = Math.floor(Math.random() * color.length);
//   document.body.style.backgroundColor = color[random];
//   //   console.log(random);
// });

// Zadatak2
// let hexColor = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
// ];

// document.querySelector(".btn-color").addEventListener("click", function () {
//   let boja = "#";
//   for (let i = 0; i < 6; i++) {
//     let hex = Math.floor(Math.random() * hexColor.length);
//     let newHexColor = hexColor[hex];
//     boja += newHexColor;
//   }
//   document.body.style.backgroundColor = boja;
//   console.log(boja);
// });

// Zadatak3
let slike = document.querySelectorAll(".galerija");
let tasteri = document.querySelectorAll(".btn");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".clModal");
let poljeSlike = document.querySelector(".mestoZaSliku");

const filterSlika = function (x) {
  slike.forEach(function (slika) {
    // kliknuo sve slike
    if (x == "sve") {
      slika.classList.remove("hidden");
    } else {
      // izbarao odredjenu  kateogirju

      if (slika.dataset.kategorija === x) {
        slika.classList.remove("hidden");
      } else {
        slika.classList.add("hidden");
      }
    }
  });
};

// Izlistavanje svih kategorija
tasteri.forEach(function (taster) {
  taster.addEventListener("click", function (e) {
    filterSlika(e.target.dataset.kat);
  });
});

// F-ja za otvaranje modala
const openModal = function (slikaModal) {
  console.log(slikaModal);
  modal.classList.remove("hidden");
  const img = document.createElement("img");
  img.src = slikaModal.src;
  // console.log(img);
  poljeSlike.innerHTML = "";
  poljeSlike.append(img);
};
// F-ja za zatvaranje modala
const close = function () {
  modal.classList.add("hidden");
};

// Klikom na sliku otvara se modal
slike.forEach(function (slikaModal) {
  slikaModal.addEventListener("click", function () {
    openModal(slikaModal);
  });
});

// Zatvaranje modala
closeModal.addEventListener("click", function () {
  close();
});
