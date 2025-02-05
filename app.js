// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

function nuevoAmigo() {
    let nombreAmigo = document.querySelector('#amigos').value;

    if (nombreAmigo) {
        amigos.push(nombreAmigo); // Añade el nuevo amigo a la lista
        mostrarAmigos(); // Actualiza la lista de amigos en el HTML
        limpiarCampo();        
    }

}

function limpiarCampo() {
    let caja = document.querySelector('#amigos');
    caja.value = "";
}


function mostrarAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista antes de actualizarla
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("La lista de amigos está vacía. Añade algunos amigos primero.");
        return;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        alert("El amigo sorteado es: " + amigoSorteado);
    }
   
}