let merci = document.getElementById("remerciement");
let button = document.getElementById("Accueil");

let contact = localStorage.key(0); 
let total = localStorage.key(1);
let orderId = localStorage.key(2);


let nomPrenom = JSON.parse(localStorage.getItem(contact));
let prix = JSON.parse(localStorage.getItem(total));
let id = localStorage.getItem(orderId);


let html = "<p>L'équipe d'Orinoco vous remercie <em>" + nomPrenom.firstName + " " + nomPrenom.lastName + "</em> de votre achat sur notre site </p>";
    html += "<p>Votre commande <em>n° \"" + id + "\"</em> d'un montant total de <em>" + prix + " €</em> à bien été pris en compte </p>";
    html += "<h5>Nous espérons vous revoir bientôt!</h5>";

merci.innerHTML = html;

localStorage.clear(); 