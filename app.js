
let Amigos = []

function adicionarAmigo(amigos) {
    inputAmigo = document.getElementById('amigo').value;

if (inputAmigo != ""){
    Amigos.push(inputAmigo);
    document.getElementById("listaAmigos").innerHTML += `<li>${inputAmigo}</li>`;
}

else {
    alert("O campo não pode estar vazio!");
}}


function sortearAmigo() {
    numeroLimite = Amigos.length
    indiceSorteado = parseInt(Math.random() * numeroLimite); 
    amigoSorteado = Amigos[indiceSorteado];
    
    document.getElementById("resultado").innerHTML += `<li>${amigoSorteado}</li>`;
}

 