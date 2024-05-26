//-------------PAGE SLIDE-----------------

function windowLoadSlide() {
  const params = new URLSearchParams(window.location.search);
  const img = params.get("img");

  // Hide all images initially
  const allDivImages = [
    divImage1,
    divImage2,
    divImage3,
    divImage4,
    divImage5,
    divImage6,
  ];
  allDivImages.forEach((div) => (div.style.display = "none"));

  // Display the correct image based on the query parameter
  switch (img) {
    case "img1":
      divImage1.style.display = "grid";
      break;
    case "img2":
      divImage2.style.display = "grid";
      break;
    case "img3":
      divImage3.style.display = "grid";
      break;
    case "img4":
      divImage4.style.display = "grid";
      break;
    case "img5":
      divImage5.style.display = "grid";
      break;
    case "img6":
      divImage6.style.display = "grid";
      break;
    default:
      divImage1.style.display = "grid"; // Default to image 1 if no query parameter is found
  }
}

const iconCloseVisualisator = document.getElementById("iconCloseVisualisator");
const slideGallery = document.getElementById("slide-gallery");
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

// Fonction pour fermer le visualisateur
function closeVisualisator() {
  window.history.back();
}

// Initialise l'affichage des images
divImage1.style.display = "grid";
divImage2.style.display = "none";
divImage3.style.display = "none";
divImage4.style.display = "none";
divImage5.style.display = "none";
divImage6.style.display = "none";

// Applique les arrière-plans aux galeries
imgGalery1.style.background = img1;
imgGalery2.style.background = img2;
imgGalery3.style.background = img3;
imgGalery4.style.background = img4;
imgGalery5.style.background = img5;
imgGalery6.style.background = img6;

function precedent(index) {
  const images = [
    divImage1,
    divImage2,
    divImage3,
    divImage4,
    divImage5,
    divImage6,
  ];
  images.forEach((div) => (div.style.display = "none"));
  const prevIndex = (index - 1 + images.length) % images.length;
  images[prevIndex].style.display = "grid";
}

function suivant(index) {
  const images = [
    divImage1,
    divImage2,
    divImage3,
    divImage4,
    divImage5,
    divImage6,
  ];
  images.forEach((div) => (div.style.display = "none"));
  const nextIndex = (index + 1) % images.length;
  images[nextIndex].style.display = "grid";
}

function precedent1() {
  precedent(1);
}
function precedent2() {
  precedent(2);
}
function precedent3() {
  precedent(3);
}
function precedent4() {
  precedent(4);
}
function precedent5() {
  precedent(5);
}
function precedent6() {
  precedent(6);
}

function suivant1() {
  suivant(1);
}
function suivant2() {
  suivant(2);
}
function suivant3() {
  suivant(3);
}
function suivant4() {
  suivant(4);
}
function suivant5() {
  suivant(5);
}
function suivant6() {
  suivant(6);
}

window.onload = windowLoadSlide;
