export class Usuario {
    constructor(username, senha){
        this.username = username;
        this.senha = senha;
        this.listas = [];
    }

    static getByUsername(username){
        var usuario = JSON.parse(localStorage.getItem(username));
        if(usuario.username === username){
            return usuario;
        }
    }

    //funcao pra uso futuro para adicionar os ids das listas ao array
    adicionarLista(id){
        this.listas.push(id);
    }
}