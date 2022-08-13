class user {
    constructor(nombre, apellido, email, texto) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.texto = texto
    }
}

// let nombreUsuario = document.getElementById("nombreInput");
// let apellidoUsuario = document.getElementById("apellidoInput");
// let emailUsuario = document.getElementById("emailInput");
// let textoUsuario = document.getElementById("textoInput");

let inviarInfoInput = document.getElementById("enviarInfo");
const users = [];

inviarInfoInput.addEventListener("click", (event) => {
    event.preventDefault();
    let nombreUsuario = document.getElementById("nombreInput"); //No me deja poner el .value, no logro encontrar el error 
    let apellidoUsuario = document.getElementById("apellidoInput");
    let emailUsuario = document.getElementById("emailInput");
    let textoUsuario = document.getElementById("textoInput");

    const usuario = new user(nombreUsuario, apellidoUsuario, emailUsuario, textoUsuario);
    users.push(usuario);
    console.log(users);
    //inviarInfoInput.reset() No se porque no me sale tampoco el reser, no encuentro el error
})

