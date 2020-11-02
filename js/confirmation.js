
let merci = document.getElementById("remerciement");

const strRequete = window.location.search;
const searchparams = new URLSearchParams(strRequete);

let id = searchparams.get('id')


let html = "<p>Votre commande <em>n° \"" + id + "</em> à bien été pris en compte </p>";


merci.innerHTML = html;

