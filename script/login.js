

let botaoLogin = document.getElementById("login-button");
let msgAutenticao = document.getElementById("msg-autenticacao");

botaoLogin.addEventListener('click', (e) => {
    e.preventDefault();
                
    console.log("form recebido");

    var user = document.getElementById("fuser").value;
    var senha = document.getElementById("fsenha").value;
    

    
    
    console.log("Usuario não encontrado!");
    msgAutenticao.removeAttribute("hidden"); 
});