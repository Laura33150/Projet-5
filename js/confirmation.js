let merci = document.getElementById("remerciement");
let button = document.getElementById("Accueil");

let contact = localStorage.key(0); //récupération des informations dans le localStorage
let total = localStorage.key(1);
let orderId = localStorage.key(2);

//console.log(orderId);
//console.log(contact);
//console.log(total);

let nomPrenom = JSON.parse(localStorage.getItem(contact));
let prix = JSON.parse(localStorage.getItem(total));
let id = localStorage.getItem(orderId);

//console.log(nomPrenom);
//console.log(id);
//console.log(prix);

let html = "<p>Orinoco vous remercie <em>" + nomPrenom.firstName + " " + nomPrenom.lastName + "</em> de votre achat sur leur site </p>";
    html += "<p>Votre commande <em>n° \"" + id + "\"</em> d'un montant totale de <em>" + prix + " €</em> à bien été pris en compte </p>";
    html += "<h5>Nous espérons vous revoir bientôt!</h5>";

merci.innerHTML = html;

localStorage.clear(); //suppression des infos dans le localStorage