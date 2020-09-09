const strRequete = window.location.search; // pour trouver et ouvrir la bonne page id
//console.log(strRequete);
const urlParam = new URLSearchParams(strRequete);
//console.log(urlParam);

let produitsP = document.getElementById ("ProduitP"); // appel de l'id ProduitP
let achat = document.getElementById ("achat");
let choix = document.getElementById("choix");

let ol = document.createElement("option");
    ol.textContent = "";
choix.appendChild(ol);