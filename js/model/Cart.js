export default class Cart {

    constructor() {
      this.items = JSON.parse(localStorage.getItem('cart')) ||  [];
    }

    addItem(item,qty){  

        this.items.push("toto");
        localStorage.setItem('cart', JSON.stringify(this.items))
    }

    deleteItem(item){   }

    getItems(){}


    clear(){

    }
}