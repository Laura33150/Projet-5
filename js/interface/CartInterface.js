import Cart from "../model/Cart.js";

export default class CartInterface {



    static getCameraCustomizeSelector(camera) {
        // Creation du menu déroulant
        let container = document.createElement('div');

        let qtySelectElt = this.getCameraQtySelector();
        container.appendChild(qtySelectElt);

        let selectElt = document.createElement('select');
        let lenses = camera.lenses;
        for (let i = 0; i < lenses.length; i++) { // création de la boucle pour demander TOUS les produits
            let el = document.createElement('option');
            let option = lenses[i];
            el.textContent = option;
            el.value = option;
            selectElt.appendChild(el);
        }
        container.appendChild(selectElt);




        // Affichage du prix
        let titleElt = document.createElement('h6');
        titleElt.innerText = camera.price / 100 + " €";
        container.appendChild(titleElt);

        // Ajout du bouton d'ajout
        let buttonElt = document.createElement('button');
        buttonElt.dataset.id = camera.id;
        buttonElt.dataset.name = camera.name;
        buttonElt.dataset.price = camera.price / 100;
        buttonElt.className = "btn bg-primary";
        buttonElt.innerText = "Ajoutez au panier";
        container.appendChild(buttonElt)

        buttonElt.addEventListener('click', e => {
            let cart = new Cart();
            cart.addItem({
                ...camera,
                choice: selectElt.value
            }, qtySelectElt.value);
            console.log(cart)
        });

        return container;
    }
    static getCameraQtySelector() {
        //Creation du menu déroulant
        let selectElt = document.createElement('select');
        let qty = 10;
        for (let i = 0; i < qty; i++) { // création de la boucle pour choisir jusqu'à 10 produits
            let el = document.createElement('option');
            let option = i + 1;
            el.textContent = option;
            el.value = option;
            selectElt.appendChild(el);
        }
        return selectElt;
    };


    static getAllItemsTDs(cart){
        let containerElt = document.createElement('tbody');
        cart.getItems().forEach(item => {
            containerElt.appendChild(this.getCartTD(item));
        });

        return containerElt;
    }

    static getCartTD(item){
        let trElt = document.createElement('tr');


        let tdElt = document.createElement('td');
        tdElt.innerText = item.item.name;
        trElt.appendChild(tdElt);

        tdElt = document.createElement('td');
        tdElt.innerText = item.item.price / 100;
        trElt.appendChild(tdElt);

        tdElt = document.createElement('td');
        tdElt.innerText = item.qty;
        trElt.appendChild(tdElt);

        tdElt = document.createElement('td');
        tdElt.innerText = item.item.price / 100 *item.qty;
        trElt.appendChild(tdElt);


        return trElt;

    }


}


