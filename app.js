
let listaAmigos = []

function adicionarAmigo(amigos) {
    amigos = document.getElementById('amigo').value;

if (amigos != ""){
    listaAmigos.push(amigos);
    document.getElementById(listaAmigos).innerHTML += amigos;
}

else {
    alert("It cant be null");
}}


function sortearAmigo() {

}

