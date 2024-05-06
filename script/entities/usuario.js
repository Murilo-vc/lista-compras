export class Usuario {
    constructor(username, senha){
        this.username = username;
        this.senha = senha;
        this.listas = [];
    }

    static getByUsername(username){
        for (let index = 0; index < localStorage.length; index++) {
            var id = localStorage.key(index);
            var usuario = JSON.parse(localStorage.getItem(id));
            if(usuario.username === username){
                return usuario;
            }
        }
    }

    //funcao pra uso futuro para adicionar os ids das listas ao array
    adicionarLista(id){
        this.listas.push(id);
    }
}