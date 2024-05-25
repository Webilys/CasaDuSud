//-------------PAGE LOGEMENT-----------------

const moreLink = document.querySelector(".more-link");
const infoCuisine = document.getElementById("infoCuisine");
const infoLingeMaison = document.getElementById("infoLingeMaison");
const infoCuisineList = document.getElementById("infoCuisineList");
const infoLingeMaisonList = document.getElementById("infoLingeMaisonList");

// Fonction pour ouvrir le slide en cliquant sur les images
function slide() {
  window.location.href = "./slide.html";
}

//Description longue
moreLink.addEventListener("click", function () {
  var moreContent = document.querySelector(".more-content");
  var dots = document.querySelector(".dots");
  if (moreContent.style.display === "none") {
    moreContent.style.display = "inline";
    dots.style.display = "none";
    this.textContent = "Lire moins";
  } else {
    moreContent.style.display = "none";
    dots.style.display = "inline";
    this.textContent = "Lire plus";
  }
});

//Bulle infos

infoCuisine.addEventListener("click", () => {
  infoCuisineList.style.display = "block";
  setInterval(() => {
    infoCuisineList.style.display = "none";
  }, 5000);
});

infoLingeMaison.addEventListener("click", () => {
  infoLingeMaisonList.style.display = "block";
  setInterval(() => {
    infoLingeMaisonList.style.display = "none";
  }, 5000);
});
