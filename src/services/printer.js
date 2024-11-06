import products from "../../db.js";
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from "node:process";

export const showOptions = async () => {
    console.log('\n');
    console.log('[0] - Adicionar produto');
    console.log('[1] - Ver carrinho');
    console.log('[2] - Excluir item');
    console.log('[3] - Finalizar');
    const rl = readline.createInterface({input, output});
    const question = (query) => new Promise((resolve) => rl.question(query, resolve));
    const answer = await question('\nSelecione opção: ');
    rl.close();
    return parseInt(answer);
}

export const showProducts = async () => {
    for(let i in products){
        console.log(`[${i}] - ${products[i].name} - R$${products[i].price}`);
    }
    const rl = readline.createInterface({input, output});
    const question = (query) => new Promise((resolve) => rl.question(query, resolve));
    const answer = await question('\nSelecione produto: ');
    rl.close();
    return parseInt(answer);
}

export const showQuantity = async () => {
    const rl = readline.createInterface({input, output});
    const question = (query) => new Promise((resolve) => rl.question(query, resolve));
    const answer = await question('\nSelecione quantidade: ');
    rl.close();
    return parseInt(answer);
}