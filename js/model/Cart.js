export default class Cart {

  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
  }

  addItem(item, qty) {
    let index = this.items.findIndex(elt => {
       return (elt.item.name === item.name) && (elt.item.custom === item.custom);
     });
     if(index > -1){
       this.items[index].qty = Number(this.items[index].qty) + Number(qty);
     }else{
     
     this.items.push({item: item, qty:qty});      
     }
     
     localStorage.setItem('cart', JSON.stringify(this.items));
   }
  deleteItem(item) {
    let index = this.items.findIndex(elt => {
      return (elt.item.name === item.name) && (elt.item.custom === item.custom);
    });
    if(index !== -1){
      this.items.splice(index,1);
    }    
    
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  totalOrder(totalOrder){
    let container = document.createElement('div');
    let calculationTotalOrder = 0;
    for (let item in addItem) {
        calculationTotalOrder += addItem[item].price * addItem[item].quantity;
    }
    priceCalculation(calculationTotalOrder, totalOrder);
    container.appendChild(totalOrder);
    return container;
  }
  

  clear() {
    this.items = [];
    localStorage.clear('clear');
  }
}