import * as usuarioEntity from './entities/usuario.js'

document.addEventListener("DOMContentLoaded", verificarLogado)
function verificarLogado(){
    if(!!localStorage.getItem("LOGGED_USER") || !!sessionStorage.getItem("LOGGED_USER")){
        window.location.href = "/index.html"
    }
}

let msgCadastro = document.getElementById("msg-cadastro");
let button = document.getElementById("cadastro-button");
button.addEventListener('click', function () {
    var nome = document.getElementById("fuser").value;
    var senha = document.getElementById("fsenha").value;

    //Verifica se o nome ja esta em uso
    if(localStorage.getItem(nome)){
        console.log("Usuário já cadastrado");
        msgCadastro.removeAttribute("hidden");
        return;
    } else{

        const usuario1 = new usuarioEntity.Usuario(nome, senha);

        //armazena no local storage um cadastro novo
        localStorage.setItem(nome, JSON.stringify(usuario1));
        console.log('Cadastro efetuado!');
        window.location.replace('login.html');
    }
});