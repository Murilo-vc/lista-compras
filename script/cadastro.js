
let button = document.getElementById("cadastro-button");
let msgCadastro = document.getElementById("msg-cadastro");
button.addEventListener('click', function () {
    
    console.log('Yes');

    var nome = document.getElementById("fuser").value;
    var senha = document.getElementById("fsenha").value;
    var jaCadastrado = false;

    //Pega a lista de usuario se ja houver, senão pega um array vazio
    var usuarios = JSON.parse(localStorage.getItem('users') || '[]');

    usuarios.forEach(usuario => {
        if(usuario.username == nome){
            console.log("Usuário já cadastrado");
            msgCadastro.removeAttribute("hidden"); 
            jaCadastrado = true;
            return;
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
    }
});