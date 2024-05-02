export class Lista {
    constructor(nome, criacao){
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.criacao = criacao;
        this.itens = [];
    }
}