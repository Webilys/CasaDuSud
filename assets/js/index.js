//------------MENU RESPONSIVE--------------

const menuIcons = document.getElementById("menuIcons");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const nav = document.querySelector("nav");

//Le menu reste fermé au chargement de la page

function windowLoad() {
  if ((window.width = 1250)) {
    nav.style.display = "none";
    infoCuisineList.style.display = "none";
    infoLingeMaisonList.style.display = "none";
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
