function preencherTabela() {
    var selectedListId = sessionStorage.getItem('SELECTED_LIST');

    if (selectedListId) {
        var lista = JSON.parse(localStorage.getItem(selectedListId));

        if (lista) {
            var tbody = document.querySelector("#lista-compras tbody");

            var newRow = tbody.insertRow();

            var idCell = newRow.insertCell();
            var nomeCell = newRow.insertCell();
            var criacaoCell = newRow.insertCell();
            var acoesCell = newRow.insertCell();

            idCell.textContent = lista.id;
            nomeCell.textContent = lista.nome;
            criacaoCell.textContent = lista.criacao;
        } else {
            console.log("Lista não encontrada no localStorage.");
        }
    } else {
        console.log("ID da lista não encontrado na sessionStorage.");
    }
}

window.onload = preencherTabela;
