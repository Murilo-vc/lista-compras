class Lista {
    constructor(nome){
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.criacao = Date.now();
    }
}

if(localStorage.getItem("LOGGED_USER")){
    var logged_user = localStorage.getItem("LOGGED_USER")
} else {
    var logged_user = sessionStorage.getItem("LOGGED_USER")
}

var usuario = JSON.parse(localStorage.getItem(logged_user));

let button = document.getElementById("cadastra-lista");
button.addEventListener('click', function(){
    var nomeLista = document.getElementById('nome-lista').value;
    var lista = new Lista(nomeLista);
    usuario.listas.push(lista.id);
    localStorage.setItem(logged_user, JSON.stringify(usuario));
    localStorage.setItem(lista.id, JSON.stringify(lista));
});
