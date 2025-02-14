let Amigos = []

function adicionarAmigo(amigos) {
    inputAmigo = document.getElementById('amigo').value;

if (inputAmigo != ""){
    Amigos.push(inputAmigo);
    document.getElementById("listaAmigos").innerHTML += `<li>${inputAmigo}</li>`;
    document.getElementById("amigo").value = '';
}
else {
    alert("Insira um campo válido!");
    }
}

function sortearAmigo() {
    numeroLimite = Amigos.length
    indiceSorteado = parseInt(Math.random() * numeroLimite); 
    amigoSorteado = Amigos[indiceSorteado];
    
    document.getElementById("resultado").innerHTML = `<li>Seu amigo sorteado é ${amigoSorteado}!</li>`;
}

 