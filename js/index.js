let produit = document.getElementById ("Produits"); //Création de la variable produit sur l'id 'Produits'

async function getAllCamerasinfos (){    

   response = await fetch('http://localhost:3000/api/cameras');
   let data = await response.json();
   return data;
    };

function createCameraListing (allCamerasData){
    let container = document.createElement('div');
    container.classList.add('cameras-list');
    for ( let i=0; i < allCamerasData.length; i++ ) { // création de la boucle pour demander TOUS les produits
        let cameraData = allCamerasData[i];
        let cardElt = createCameraCard(cameraData); 
        container.appendChild(cardElt);
    }
    return container;
}

function createCameraCard (cameraData){
    let cardElt = document.createElement("div");
    cardElt.className = "card"; // création d'une div ou les éléménts (nom, image et id) seront présents
    let html = "<h5 class='Nom card-title'>Voici " + cameraData.name + "</h5>";
    html += "<img class='Images card-img-top' src=" + cameraData.imageUrl + " alt= " + cameraData.name + ">"; 
    html += "<a href='./pages_annexes/produit.html?id=" + cameraData._id +"'><button type='button' id=" + cameraData._id + " class='btn bg-primary'> Voir produit </button> </a>"; //création variable html pour avoir les infos afficher sur le site

    cardElt.innerHTML = html;
    return cardElt; //fonction affichée
};

getAllCamerasinfos().then( data => produit.appendChild(createCameraListing(data)));