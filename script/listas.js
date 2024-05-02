import * as listaEntity from "./entities/lista.js"

function exibirListas(listas){

    //pega o elemento tbody do index
    var tbodyref = document.getElementById("lista-compras").getElementsByTagName("tbody")[0]

    
    listas.forEach(idLista => {
        
        //utiliza o id da lista para pegar a mesma no localstorage
        var lista = JSON.parse(localStorage.getItem(idLista));

        //Cria uma nova linha na tabela
        var newRow = tbodyref.insertRow();

        //cria as celulas para cada elemento da lista
        var idCell = newRow.insertCell();
        var nomeCell = newRow.insertCell();
        var criacaoCell = newRow.insertCell();
    
        //insere o id da lista na celula ID
        var newText = document.createTextNode(JSON.stringify(lista.id));
        idCell.appendChild(newText);
    
        //Insere o nome da lista na celula Nome
        newText = document.createTextNode(lista.nome);
        nomeCell.appendChild(newText);
    
        //Insere a data de criacao na celula criacao
        newText = document.createTextNode(JSON.stringify(lista.criacao));
        criacaoCell.appendChild(newText);
    });

}

if(localStorage.getItem("LOGGED_USER")){
    var logged_user = localStorage.getItem("LOGGED_USER")
} else {
    var logged_user = sessionStorage.getItem("LOGGED_USER")
}

var usuario = JSON.parse(localStorage.getItem(logged_user));

//exibe as listas ja atribuidas ao usuario
exibirListas(usuario.listas);

let button = document.getElementById("cadastra-lista");
button.addEventListener('click', function(){
    var nomeLista = document.getElementById('nome-lista').value;

    //cria objeto Date
    var today = new Date();

    //pega dia, mes e ano
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    //atribui dia/mes/ano a variavel
    today = dd + '/' + mm + '/' + yyyy;

    //cria uma lista nova
    var lista = new listaEntity.Lista(nomeLista, today);

    //atribui o id da lista ao array listas do usuario
    usuario.listas.push(lista.id);

    //sobscreve o usuario no localStorage e cria um registro com a lista
    localStorage.setItem(logged_user, JSON.stringify(usuario));
    localStorage.setItem(lista.id, JSON.stringify(lista));

    //recarrega a pagina para exibir a lista nova criada
    location.reload();
});