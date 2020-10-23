export default class Cart {

  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
  }

  addItem(item, qty) {

    //Chercher dans ton tableau, si tu trouves pas item, tu push sinon tu augmente la qty
    let index = this.items.findIndex(elt => {
      return (elt.item.name === item.name) && (elt.item.custom === item.custom);
    });
    if(index !== -1){
      this.items.splice(index,1);
    } 
    if(index == this.item){

    } 
    this.items.push({item: item, qty:qty});
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


  clear() {
    this.items = [];
    localStorage.clear('clear');
  }
}