
let merci = document.getElementById("remerciement");

const strRequete = window.location.search;
const searchparams = new URLSearchParams(strRequete);

let id = searchparams.get('id');
let firstName = searchparams.get('firstName');
let lastName = searchparams.get('lastName');
let total = searchparams.get('total');


let html = "<p>Orinoco vous remercie <em>" + lastName + " " + firstName + "</em> de votre achat sur leur site </p>";
    html += "<p>Votre commande <em>n° \"" + id + "\"</em> d'un montant totale de <em>" + total + " €</em> à bien été pris en compte </p>";
    html += "<h5>Nous espérons vous revoir bientôt!</h5>";


merci.innerHTML = html;

