class Usuario {

    constructor(username, senha){

        this.username = username;
        this.senha = senha;
        this.listas = [];
    }
}

let button = document.getElementById("cadastro-button");
button.addEventListener('click', function () {
    
    console.log('Yes');

    var nome = document.getElementById("fuser").value;
    var senha = document.getElementById("fsenha").value;

    //Verifica se o nome ja esta em uso
    if(localStorage.getItem(JSON.stringify(nome))){

        console.log("Usuário já cadastrado");
        msgCadastro.removeAttribute("hidden");
        return;
    } else{

        const usuario1 = new Usuario(nome, senha);

        //armazena no local storage um cadastro novo
        localStorage.setItem(JSON.stringify(nome), JSON.stringify(usuario1));
        console.log('Cadastro efetuado!');
        window.location.replace('login.html');
    }
});