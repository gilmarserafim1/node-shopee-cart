import products from "../db.js";
import Cart from "./models/cart.js";
import Item from "./models/item.js";
import createItem from "./models/item.js";
import { showQuantity, showProducts, showOptions } from "./services/printer.js";

const cart = new Cart();
let choose = 0;

while(choose !=  3){
    choose = await showOptions();
    switch(choose){
        case 0:
            const productToAdd = await showProducts();
            const quantity = await showQuantity();
            const item = new Item(productToAdd, quantity);
            await cart.add(item, quantity);
            break;
        case 1:
            cart.showCart();
            break;
        case 2:
            const productToRemove = await showProducts();
            cart.remove(productToRemove);
    }
}