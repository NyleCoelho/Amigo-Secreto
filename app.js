let Amigos = [];
let ultimoSorteado = null;

function adicionarAmigo(amigos) {
    let inputAmigo = document.getElementById('amigo').value;

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

    if (Amigos.length === 0) {
        alert("Não há amigos para sortear!")
    }
    else {

    let numeroLimite = Amigos.length;
    let indiceSorteado = parseInt(Math.random() * numeroLimite); 
    let amigoSorteado = Amigos[indiceSorteado];

//Condição que evita a repetição consecultiva de um mesmo amigo
    if (amigoSorteado === ultimoSorteado) {
        return sortearAmigo()
    }
    else {
        ultimoSorteado = amigoSorteado
        document.getElementById("resultado").innerHTML = `<li>Seu amigo sorteado é ${amigoSorteado}!</li>`;
    }
    }


}        