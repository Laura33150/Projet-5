import CartInterface from './interface/CartInterface.js';
import Cart from './model/Cart.js';

const cart = new Cart();

function validation(){ 

    
    if(lastName.value.length <2 || lastName.value.length>30){
        alert ("Veuillez remplir correctement le champ Nom!");
        return false;
    }   
    if(firstName.value.length <2 || firstName.value.length>30){
        alert( "Veuillez remplir correctement le champ Prénom!");
        return false;
    }
    if(address.value.length <5 || address.value.length>250){
        alert( "Veuillez remplir correctement le champ adresse!");
        return false;
    }
    if(city.value.length <2 || city.value.length>70){
        alert( "Veuillez remplir correctement le champ ville!");
        return false;
    }
    if(email.value.indexOf("@") == -1 || email.value.length <5 || email.value.indexOf(".") ==-1 || email.length >250){
        alert( "Veuillez remplir correctement le champ email!");
        return false;
    }
    return true;
};


let total = 0;
let table = document.querySelector(".cart-interface");
table.appendChild(CartInterface.getAllItemsTDs(cart));
let totalOrder  = document.getElementById("Total");
totalOrder.appendChild(Cart.totalOrder);
let lastName = document.getElementById("nom");
let firstName = document.getElementById("prenom");
let address = document.getElementById("adresse");
let city = document.getElementById("ville");
let email = document.getElementById("email");
let submit = document.getElementById("commande");
submit.addEventListener("click", () => {


    if(validation() == true){ 

        Contact["lastName"] = lastName.value;
        Contact["firstName"] = firstName.value;
        Contact["address"] = address.value;
        Contact["city"] = city.value;
        Contact["email"] = email.value;


        data["contact"] = Contact;
        data["products"] = products;

        let contact = JSON.stringify(data);
apiSendOrder(contact).then(data =>{

})}})

let clearcart= document.getElementById("vider"); 
    clearcart.addEventListener("click" , () => {
        localStorage.clear();
        location.reload();
    })
