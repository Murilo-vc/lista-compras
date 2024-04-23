
let botaoLogin = document.getElementById("login-button");
let msgAutenticao = document.getElementById("msg-autenticacao");

botaoLogin.addEventListener('click', (e) => {
    e.preventDefault();
                
    console.log("form recebido");

    var user = document.getElementById("fuser").value;
    var senha = document.getElementById("fsenha").value;
    var users = JSON.parse(localStorage.getItem('users'));

    users.forEach(usuario => {
        
        if(usuario.username == user && usuario.password != senha){

            console.log("Senha incorreta!");
            return;
        } else if (usuario.username == user && usuario.password == senha){

            window.location.replace('../index.html');
            return;
        }
    });
    
    console.log("Usuario não encontrado!");
    msgAutenticao.removeAttribute("hidden"); 
});