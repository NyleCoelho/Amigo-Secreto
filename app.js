let Amigos = []
numeroLimite = Amigos.length;

function adicionarAmigo(amigos) {
    inputAmigo = document.getElementById('amigo').value;

//Condição que verifica se o campo inserido pelo usuário é válido
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
    indiceSorteado = parseInt(Math.random() * numeroLimite); 
    amigoSorteado = Amigos[indiceSorteado];
    listaSorteados = [];

    if (listaSorteados.includes(amigoSorteado)) {
        return sortearAmigo();
    }
    else {
        document.getElementById("resultado").innerHTML = `<li>Seu amigo sorteado é ${amigoSorteado}!</li>`;
        listaSorteados.push(amigoSorteado);
        return amigoSorteado;
        
    }
}
