import { Item } from "./entities/item.js";

document.addEventListener("DOMContentLoaded", verificarLogado)
function verificarLogado(){
    if(!localStorage.getItem("LOGGED_USER") && !sessionStorage.getItem("LOGGED_USER")){
        window.location.href = "/index.html"
    }
}


function exibirItens(lista){

    var tbodyref = document.getElementById("lista-itens").getElementsByTagName("tbody")[0]

    lista.itens.forEach(item => {
        
        //insere uma nova linha na tabela
        var newRow = tbodyref.insertRow();
    
        //cria uma celula para o nome do item
        var nomeCell = newRow.insertCell();

        //cria um bloco de texto com o nome do item
        // var newText = document.createTextNode(item.nome);
        var newText = document.createElement("input")
        newText.value = item.nome
        newText.readOnly = true;
        newText.className = 'nome-item'
        

        //atribui o nome do produto a sua celula
        nomeCell.appendChild(newText)

        var editarItem = document.createElement("button")
        editarItem.innerText = 'Editar'

        editarItem.onclick = function () {
            const index = lista.itens.indexOf(item)
            if(index > -1){
                if(editarItem.innerText == 'Editar'){
                    newText.readOnly = false
                    newText.focus()
                    editarItem.innerText = 'Salvar'
                } else if(editarItem.innerText == 'Salvar'){
                    newText.readOnly = true
                    editarItem.innerText = 'Editar'
                    if(newText.value == ''){
                        alert('O nome não pode ser vazio')   
                    } else {
                        lista.itens[index].nome = newText.value
                        localStorage.setItem(lista.id, JSON.stringify(lista))
                    }
                }
            }
        }

        //cria um bottao para remover o item
        var removerItem = document.createElement("button")

        //atribui um texto ao botao e a funcao on click do mesmo
        removerItem.innerText = 'Remover'
        removerItem.onclick = function () {

            const index = lista.itens.indexOf(item)
            if(index > -1){
                lista.itens.splice(index, 1)
                localStorage.setItem(lista.id, JSON.stringify(lista))
                location.reload()
            }
        }

        //atribui o botao a ultima celula da linha
        newRow.insertCell().appendChild(editarItem)
        newRow.insertCell().appendChild(removerItem)
    });
}

let botaoVolta = document.getElementById("volta");
botaoVolta.addEventListener('click', () => {
    window.location.replace('/index.html');
});

var idLista = sessionStorage.getItem('SELECTED_LIST')
var lista = JSON.parse(localStorage.getItem(idLista))
const button = document.getElementById('cadastra-itens')

var titulo = document.getElementById('title')
titulo.innerText = `Produtos da lista: ${lista.nome}`

exibirItens(lista)

button.addEventListener('click', function () {

    var nomeItem = document.getElementById('nome-item').value

    if (!nomeItem) {
        alert("Insira o nome de um produto");
        return;
    }

    var item = new Item(nomeItem)

    lista.itens.push(item)

    localStorage.setItem(idLista, JSON.stringify(lista))

    location.reload()
})