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
imgGalery.style.background = img1;

// imgBg = imgGalery.style.background;

function precedent() {
  if ((imgGalery.style.background = img1)) {
    imgGalery.style.background = img6;
  } else {
    if ((imgGalery.style.background = img2)) {
      imgGalery.style.background = img1;
    }
    if ((imgGalery.style.background = img3)) {
      imgGalery.style.background = img2;
    }
    if ((imgGalery.style.background = img4)) {
      imgGalery.style.background = img3;
    }
    if ((imgGalery.style.background = img5)) {
      imgGalery.style.background = img4;
    }
    if ((imgGalery.style.background = img6)) {
      imgGalery.style.background = img5;
    }
  }
}
