class Cart {
    constructor(){
        this.items = [];
    }

    total(){
        return this.items.reduce((sum, cartItem) => sum + cartItem.subtotal(), 0);
    }

    showCart(){
        console.log('\n---------------------------');
        console.log('Seu carrinho:');
        console.log('---------------------------\n');
        for(let item in this.items){
            this.items[item].showItem();
            console.log('---------------------------');
        }
        console.log('---------------------------');
        console.log(`Total: ${this.total()}`);
    }

    add(item){
        
        if(this.isInCart(item) !== -1){
            this.items[item.info.id].quantity += item.quantity;
        }else{
            this.items.push(item);        
        }
    }

    remove(id) {
        const index = this.items.findIndex(cartItem => cartItem.info.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log('Excluído!')
        } else {
            console.log('ID incorreto');
        }
    }

    isInCart(item){
        return this.items.findIndex(cartItem => cartItem.info.id === item.info.id);
    }
}

export default Cart;