import { Item } from "./item";

export class Lista {
    constructor(nome, criacao){
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.criacao = criacao;
        this.itens = [];
    }

    adicionarItem(nomeItem){
        var item = new Item(nomeItem);
        this.itens.push(item);
    }

    removeItem(nomeItem){
        const index = itens.indexOf(nomeItem);
        if (index > -1) { 
            itens.splice(index, 1);
        }
    }

    alteraNomeItem(nomeItem, novoNome){
        const index = itens.indexOf(nomeItem);
        if (index > -1) { 
           var item = this.itens.findIndex(index);
           item.alteraNomeItem(novoNome);
        }
    }
}