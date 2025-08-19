// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicializamos un arreglo para almacenar los nombres de mis amigos

let nombresDeAmigos = [];

function agregarAmigo(){
    //Hacemos un push al arreglo del elemento introducido en el cuadro de texto
    let input;
    input = document.querySelector('#amigo');

    if(input.value==='')
        alert('El cuadro de texto está vacío');
    else{
        nombresDeAmigos.push(input.value.trim());//Usé trim para eliminar espacios en blanco, al inicio y final de la cadena, que el usuario pueda ingresar
    }

    input.focus(); // Para que el cursor ya esté en el cuadro de texto, creo que lo  hará más cómodo
    limpiarCuadro();
    console.log(nombresDeAmigos); // ando viendo si sirve
    mostrarListaHTML();
}

function limpiarCuadro() {
    document.querySelector('#amigo').value = '';
}

function mostrarListaHTML(){
    let lista = document.querySelector('#listaAmigos');

    lista.innerHTML = ""; //limpia la lista, esto evita que se repitan nombres

    for (let i = 0; i < nombresDeAmigos.length; i++) {
        const li = document.createElement('li'); // crea <li> en el html
        li.textContent = nombresDeAmigos[i];     // mete el texto al <li>
        lista.appendChild(li);                   // mete el li<> a la lista
    }
}