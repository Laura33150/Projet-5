class CameraInterface {

    /**
     * 
     * @param Camera camera 
     */
    static getCameraSummaryElt(camera){
        let cardElt = document.createElement("div");
        cardElt.className = "card"; // création d'une div ou les éléménts (nom, image et id) seront présents
        let html = "<h5 class='name card-title'>Voici " + camera.name + "</h5>";
        html += "<img class='images card-img-top' src=" + camera.image + " alt= " + camera.name + ">";
        html += "<a href='./pages_annexes/produit.html?id=" + camera.id + "'><button type='button' id=" + camera.id + " class='btn bg-primary'> Voir produit </button> </a>"; //création variable html pour avoir les infos afficher sur le site

        cardElt.innerHTML = html;
        return cardElt;
    }

    /**
     * 
     * @param [Camera] cameras 
     */
    static getCamerasSummaryListElt(cameras) {
        let container = document.createElement('div');
        container.classList.add('cameras-list');
        for (let i = 0; i < cameras.length; i++) { // création de la boucle pour demander TOUS les produits
            let camera = cameras[i];
            let cardElt = CameraInterface.getCameraSummaryElt(camera);
            container.appendChild(cardElt);
        }
        return container;
    }

    
    
    //  static getFullCameraDetailsElt(camera){
// creation du conteneur parent
// creatie de la partie description + image

//creation de la partie menu deroulant
// CameraInterface.getCameraCustomizeSelector(camera)
 //     }  

   //     static getCameraCustomizeSelector(caemra)
}