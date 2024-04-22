

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
                
    console.log("form recebido");

    var user = document.getElementById("fuser").value;
    var senha = document.getElementById("fsenha").value;

        if(user != localStorage.getItem("user")){
            alert("Nome incorreto!");
            user = senha = "";
        } else if(user === localStorage.getItem("user") && senha != localStorage.getItem("senha")){

            alert("Senha incorreta!");
            user = senha = "";
        } else{
            window.location.href='index.html';
        }               
});