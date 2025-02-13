
let listaAmigos = []

function adicionarAmigo(amigos) {

    amigos = document.getElementById('amigo').value;

if (amigos != null){
    listaAmigos.push(amigos);
    console.log(listaAmigos);
}
else {
    alert("It cant be null");
}}

function sortearAmigo() {

}

