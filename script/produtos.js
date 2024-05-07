import { Item } from "./entities/item.js";

function exibirItens(lista){

    var tbodyref = document.getElementById("lista-itens").getElementsByTagName("tbody")[0]

    lista.itens.forEach(item => {
        
        var newRow = tbodyref.insertRow();
    
        var nomeCell = newRow.insertCell();

        var newText = document.createTextNode(item.nome);

        nomeCell.appendChild(newText)
    });
}

var idLista = sessionStorage.getItem('SELECTED_LIST')
var lista = JSON.parse(localStorage.getItem(idLista))
const button = document.getElementById('cadastra-itens')

exibirItens(lista)

button.addEventListener('click', function () {

    var nomeItem = document.getElementById('nome-item').value

    var item = new Item(nomeItem)

    lista.itens.push(item)

    localStorage.setItem(idLista, JSON.stringify(lista))

    location.reload()
})