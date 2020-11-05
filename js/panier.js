import CartInterface from './interface/CartInterface.js';
import Cart from './model/Cart.js';

import {apiSendOrder} from './api.js';

const cart = new Cart();

function validation() {
    const errors = [];

    if (lastName.value.length < 1 || lastName.value.length > 30) {
        errors.push("Veuillez remplir correctement le champ Nom!\n");
    }
    if (firstName.value.length < 1 || firstName.value.length > 30) {
        errors.push("Veuillez remplir correctement le champ Prénom!\n");
    }
    if (address.value.length < 5 || address.value.length > 250) {
        errors.push("Veuillez remplir correctement le champ adresse!\n");
    }
    if (city.value.length < 2 || city.value.length > 70) {
        errors.push("Veuillez remplir correctement le champ ville!\n");
    }
    if (email.value.indexOf("@") == -1 || email.value.length < 5 || email.value.indexOf(".") == -1 || email.length > 250) {
        errors.push("Veuillez remplir correctement le champ email!\n");
    }
    return errors;
};

let table = document.querySelector(".cart-interface");
table.appendChild(CartInterface.getAllItemsTDs(cart));
let totalOrder = document.getElementById("Total");
totalOrder.innerText = cart.totalOrder();
let lastName = document.getElementById("nom");
let firstName = document.getElementById("prenom");
let address = document.getElementById("adresse");
let city = document.getElementById("ville");
let email = document.getElementById("email");
let form = document.getElementById("monformulaire");
form.addEventListener("submit", (e) => {


    e.preventDefault();
    
    let errors = validation()
    if (errors.length === 0) {
        let data = {};
        data.contact = {};
        data.contact.lastName = lastName.value;
        data.contact.firstName = firstName.value;
        data.contact.address = address.value;
        data.contact.city = city.value;
        data.contact.email = email.value;

        data.products = cart.getProductsIds();
        

         apiSendOrder(data).then(result => {
            let orderId = result.orderId;
            window.location.href = "../pages_annexes/confirmation.html?id="+orderId;
            cart.clear();
        });
    }else{
        alert(errors);
    }
});

let clearcart = document.getElementById("vider");
clearcart.addEventListener("click", () => {
    cart.clear();
    location.reload();
})

