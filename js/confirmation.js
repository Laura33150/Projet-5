
let merci = document.getElementById("remerciement");

const strRequete = window.location.search;
const searchparams = new URLSearchParams(strRequete);

let id = searchparams.get('id');

let html = "<p>Votre commande <em>n° \</p>" + id + "<p> à bien été prise en compte </p>";



merci.innerHTML = html;

