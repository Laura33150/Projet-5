let ajoutPanier = document.getElementById("ajout-panier"); //Création de l'enventlistener pour chaque clique sur ajout panier
ajoutPanier.addEventListener("click", () => {
    //console.log("ajouté au panier");

let choixCouleur = document.getElementById("choix").value; //afin de faire l'avertissement si la valeur est null

if (choixCouleur === ""){
    alert ("Veuillez choisir une lentille !");
}
else{
    stockPanier(data);
}

})

function stockPanier(data) { //création de la fonction pour le localStorage
//console.log ("le produit choisie est ", data);
let idJson = localStorage.getItem (data._id); //Envois des information au localStorage d'après l'id
let qte = localStorage.getItem ("ProduitPanier"); //Envois au localStorage la quantité

//console.log(typeof produits);
// produits = parseInt(produits);
if (qte === null){
    localStorage.setItem("ProduitPanier" , 1 );
}
else {
    let i_qte = parseInt(qte);
    localStorage.setItem("ProduitPanier" , i_qte + 1);
}

if(idJson === null){ 
   data.qte = 1; //Création du nouvelle cas dans le tableau data : la quantité
   localStorage.setItem(data._id, JSON.stringify(data));
    
} 
else {
    let list = JSON.parse(idJson);
    let qteID = list.qte;
    let i_qteID = parseInt(qteID)+1;
    list.qte = i_qteID;
    localStorage.setItem(data._id, JSON.stringify(list));
}


}

else if (this.readyState == 4 && this.status == 400){
alert ("Erreur 404!");
}