

let button = document.getElementById("cadastro-button");
let msgCadastro = document.getElementById("msg-cadastro");
button.addEventListener('click', function () {

    var nome = document.getElementById("fuser").value;
    var senha = document.getElementById("fsenha").value;

    if(localStorage.getItem(JSON.stringify(nome))){

        console.log("Usuário já cadastrado");
        msgCadastro.removeAttribute("hidden");
        return;
    } else{

        localStorage.setItem(JSON.stringify(nome), JSON.stringify(senha));
        console.log('Cadastro efetuado!');
        window.location.replace('login.html');
    }

    //var jaCadastrado = false;

    //Pega a lista de usuario se ja houver, senão pega um array vazio
    /*
    var usuarios = JSON.parse(localStorage.getItem('users') || '[]');

    usuarios.forEach(usuario => {
        if(usuario.username == nome){
            
        }
    });

    if(!jaCadastrado){

        usuarios.push({
            username: nome,
            password: senha
        });

        const userData = JSON.stringify(usuarios);
        
        localStorage.setItem('users', userData);
        
        window.location.replace('login.html');
        console.log("Cadastro efetuado!");
        return;
    }*/
});