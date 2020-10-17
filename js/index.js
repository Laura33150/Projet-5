import {apiGetAllCamerasInfos} from  './api.js';
import Camera from './model/Camera.js';
import CameraInterface from './interface/CameraInterface.js';

let produit = document.getElementById("Produits"); //Création de la variable produit sur l'id 'Produits'

apiGetAllCamerasInfos().then(data => {
    let cameras = [];
    for (let i = 0; i < data.length; i++) { // création de la boucle pour demander TOUS les produits
        let cameraData = data[i];
        cameras.push(new Camera(cameraData));
    }
    produit.appendChild(CameraInterface.getCamerasSummaryListElt(cameras))
});

    