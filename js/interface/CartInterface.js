export default class CartInterface {



    static getCameraCustomizeSelector(camera) {
        // Creation du menu déroulant
        let container = document.createElement('div');
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
            // Cart.addProduct(data,choice, qty)
        });

        return container;
    }
        static getCameraQtySelector() {
            //Creation du menu déroulant
            let container = document.createElement('div');
            let selectElt = document.createElement('select');
            let qty = 10;
            for (let i = 0; i < qty; i++) { // création de la boucle pour choisir jusqu'à 10 produits
                let el = document.createElement('option');
                let option = qty[i];
                el.textContent = option;
                el.value = option;
                selectElt.appendChild(el);
            }
            container.appendChild(selectElt);
        };
    }