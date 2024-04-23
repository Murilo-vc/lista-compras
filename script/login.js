class Usuario {

    constructor(json){
        Object.assign(this, json);
    }

    //funcao pra uso futuro para adicionar os ids das listas ao array
    adicionarLista(id){

        this.listas.push(id);
    }
}


let botaoLogin = document.getElementById("login-button");
botaoLogin.addEventListener('click', (e) => {
    e.preventDefault();

    var nome = document.getElementById("fuser").value;
    var senha = document.getElementById("fsenha").value;

    //verifica se existe um usuario com esse nome
    if(!localStorage.getItem(JSON.stringify(nome))){

        console.log('Usuário não encontrado!');
        document.getElementById("fsenha").value = '';
        return;
    }

    //instancia um objeto usuario com as informações do local storage
    //se tirar o stringify(nome) o codigo para de funfa
    const usuario1 = new Usuario(JSON.parse(localStorage.getItem(JSON.stringify(nome))));

    //verifica se a senha confere a do storage, se for igual leva o usuario pra home page
    if(usuario1.senha == senha){

        console.log('Senha bate');
        window.location.replace('../index.html');
        
    } else{
        console.log('Senha Incorreta!');
        document.getElementById("fsenha").value = '';
    }
});