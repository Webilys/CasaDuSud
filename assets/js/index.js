//------------MENU RESPONSIVE--------------

const menuIcons = document.getElementById("menuIcons");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const nav = document.querySelector("nav");

//Le menu reste fermé au chargement de la page

function windowLoad() {
  if ((window.width = 1250)) {
    nav.style.display = none;
  }
}

//fonction ouvre le menu

function openNav() {
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  nav.style.display = "block";
}

//fonction ferme le menu

function closeNav() {
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
  nav.style.display = "none";
}

//-------------PAGE LE LOGEMENT-----------------

//Slide images
const imgGalery = document.getElementById("imgGalery");

const img1 = "url(./assets/img/1.webp) center/cover";
const img2 = "url(./assets/img/2.webp) center/cover";
const img3 = "url(./assets/img/3.webp) center/cover";
const img4 = "url(./assets/img/4.webp) center/cover";
const img5 = "url(./assets/img/5.webp) center/cover";
const img6 = "url(./assets/img/6.webp) center/cover";

let number = 1;
let numberImg = "img" + number;
imgGalery.style.background = img1;

function afficheBg() {
  imgGalery.style.background = numberImg;
}

function precedent() {
  number - 1;
  afficheBg();
  console.log(numberImg);
}

function suivant() {
  number + 1;
  afficheBg();
}
