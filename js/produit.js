import {apiGetCameraInfo} from  './api.js';
import Camera from './model/Camera.js';
import CameraInterface from './interface/CameraInterface.js';
import CartInterface from './interface/CartInterface.js';
import Cart from './model/Cart.js';


const strRequete = window.location.search; // pour trouver et ouvrir la bonne page id
//console.log(strRequete);
const urlParam = new URLSearchParams(strRequete);
//console.log(urlParam);

let produitsP = document.getElementById("ProduitP"); // appel de l'id ProduitP
let achat = document.getElementById("achat");
let qty = document.getElementById("qty");
/**
* @returns [Camera]
*/

apiGetCameraInfo(urlParam.get('id')).then(data =>{
    
    let camera = new Camera(data);
    console.log(camera);
    let elt = CameraInterface.getFullCameraDetailsElt(camera);
    produitsP.appendChild(elt);
    achat.appendChild(CartInterface.getCameraCustomizeSelector(camera));
    qty.appendChild(CartInterface.getCameraQtySelector());

});
