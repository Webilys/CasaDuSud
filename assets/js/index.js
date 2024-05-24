//------------MENU RESPONSIVE--------------

const menuIcons = document.getElementById("menuIcons");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const nav = document.querySelector("nav");
const slideGallery = document.querySelector(".slide-gallery");

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

//-------------PAGE LOGEMENT-----------------

function slide1() {
  window.open("slide.html", "_blank");
}

//-------------PAGE SLIDE-----------------

//fonction pour fermer le visualisateur

const iconCloseVisualisator = document.getElementById("iconCloseVisualisator");

function closeVisualisator() {
  window.history.back();
}

//Slide images
const divImage1 = document.getElementById("image1");
const divImage2 = document.getElementById("image2");
const divImage3 = document.getElementById("image3");
const divImage4 = document.getElementById("image4");
const divImage5 = document.getElementById("image5");
const divImage6 = document.getElementById("image6");
const imgGalery1 = document.getElementById("imgGalery1");
const imgGalery2 = document.getElementById("imgGalery2");
const imgGalery3 = document.getElementById("imgGalery3");
const imgGalery4 = document.getElementById("imgGalery4");
const imgGalery5 = document.getElementById("imgGalery5");
const imgGalery6 = document.getElementById("imgGalery6");
const img1 = "url(./assets/img/1.webp) center/cover";
const img2 = "url(./assets/img/2.webp) center/cover";
const img3 = "url(./assets/img/3.webp) center/cover";
const img4 = "url(./assets/img/4.webp) center/cover";
const img5 = "url(./assets/img/5.webp) center/cover";
const img6 = "url(./assets/img/6.webp) center/cover";

divImage1.style.display = "grid";
divImage2.style.display = "none";
divImage3.style.display = "none";
divImage4.style.display = "none";
divImage5.style.display = "none";
divImage6.style.display = "none";
imgGalery1.style.background = img1;

function precedent1() {
  imgGalery6.style.background = img6;
  divImage1.style.display = "none";
  divImage6.style.display = "grid";
}

function precedent2() {
  imgGalery1.style.background = img1;
  divImage2.style.display = "none";
  divImage1.style.display = "grid";
}

function precedent3() {
  imgGalery2.style.background = img2;
  divImage3.style.display = "none";
  divImage2.style.display = "grid";
}

function precedent4() {
  imgGalery3.style.background = img3;
  divImage4.style.display = "none";
  divImage3.style.display = "grid";
}

function precedent5() {
  imgGalery4.style.background = img4;
  divImage5.style.display = "none";
  divImage4.style.display = "grid";
}

function precedent6() {
  imgGalery5.style.background = img5;
  divImage6.style.display = "none";
  divImage5.style.display = "grid";
}

function suivant1() {
  imgGalery2.style.background = img2;
  divImage1.style.display = "none";
  divImage2.style.display = "grid";
}

function suivant2() {
  imgGalery3.style.background = img3;
  divImage2.style.display = "none";
  divImage3.style.display = "grid";
}

function suivant3() {
  imgGalery4.style.background = img4;
  divImage3.style.display = "none";
  divImage4.style.display = "grid";
}

function suivant4() {
  imgGalery5.style.background = img5;
  divImage4.style.display = "none";
  divImage5.style.display = "grid";
}

function suivant5() {
  imgGalery6.style.background = img6;
  divImage5.style.display = "none";
  divImage6.style.display = "grid";
}

function suivant6() {
  imgGalery1.style.background = img1;
  divImage6.style.display = "none";
  divImage1.style.display = "grid";
}
