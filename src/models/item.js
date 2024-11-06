import products from "../../db.js";

class Item {

    constructor(product, quantity) {
        this.info = products[product];
        this.quantity = quantity;
        this.subtotal = () => this.quantity * this.info.price;
    }

    showItem(){
        console.log(`ID: ${this.info.id}`);
        console.log(`Nome: ${this.info.name}`);
        console.log(`Preço: ${this.info.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`Subtotal: ${this.subtotal()}`);
    }

}

export default Item;