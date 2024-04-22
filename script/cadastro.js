
let button = document.getElementById("cadastro-button");
button.addEventListener('click', function () {
    
    console.log('Yes');

    var nome = document.getElementById("fuser").value;
    var senha = document.getElementById("fsenha").value;

    //Pega a lista de usuario se ja houver, senão pega um array vazio
    var usuarios = JSON.parse(localStorage.getItem('users') || '[]');

    usuarios.push({
        username: nome,
        password: senha
    });


    const userData = JSON.stringify(usuarios);

    localStorage.setItem('users', userData);

    console.log("Cadastro efetuado!");
});