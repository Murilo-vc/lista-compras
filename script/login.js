import { Usuario } from "./entities/usuario.js";

document.addEventListener("DOMContentLoaded", verificarLogado)
function verificarLogado(){
    if(!!localStorage.getItem("LOGGED_USER") || !!sessionStorage.getItem("LOGGED_USER")){
        window.location.href = "/index.html"
    }
}

let msgAutenticao = document.getElementById("msg-autenticacao");
let botaoLogin = document.getElementById("login-button");
botaoLogin.addEventListener('click', (e) => {
    e.preventDefault();

    var nome = document.getElementById("fuser").value;
    var senha = document.getElementById("fsenha").value;

    //verifica se existe um usuario com esse nome
    if(!localStorage.getItem(nome)){

        console.log('Usuário não encontrado!');
        msgAutenticao.removeAttribute("hidden");
        document.getElementById("fsenha").value = '';
        return;
    }

    //instancia um objeto usuario com as informações do local storage
    //se tirar o stringify(nome) o codigo para de funfa
    const usuario1 = Usuario.getByUsername(nome);

    //verifica se a senha confere a do storage, se for igual leva o usuario pra home page
    if(usuario1.senha == senha){
        console.log(fpconectado);
        if(fpconectado.checked){
            localStorage.setItem("LOGGED_USER", JSON.stringify(usuario1.username));
        } else {
            sessionStorage.setItem("LOGGED_USER", JSON.stringify(usuario1.username));
        }
        window.location.replace('../index.html');
    }
     else{
        console.log('Senha Incorreta!');
        document.getElementById("fsenha").value = '';
    }
});