const strRequete = window.location.search; // pour trouver et ouvrir la bonne page id
//console.log(strRequete);
const urlParam = new URLSearchParams(strRequete);
//console.log(urlParam);

let produitsP = document.getElementById("ProduitP"); // appel de l'id ProduitP
let achat = document.getElementById("achat");
let ol = document.createElement("option");
    ol.textContent = "";
choix.appendChild(ol);
/**
* @returns [Camera]
*/

apiGetCameraInfo(urlParam.get('id')).then(data =>{
    console.log(data);
    let camera = new Camera(data.id,data.name,data.imageUrl,data.description,data.price,data.lenses);
    let elt =CameraInterface.getFullCameraDetailsElt(camera);
    produitsP.appendChild(elt);
});



