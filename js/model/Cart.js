export default class Cart {

  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
  }

  addItem(item, qty) {
    this.items.push(item, qty);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  deleteItem(item, qty) {
    this.items.remove(item, qty);
    localStorage.deleteItem('cart', JSON.stringify(this.items));
  }

  getItems(item, qty) {
    this.items.get(item, qty);
    localStorage.getItem('cart', JSON.stringify(this.items));
  }


  clear(item) {
    localStorage.clear(item);
  };
}
