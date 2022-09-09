class user {
    constructor(nombre, apellido, email, texto) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.texto = texto
    } 
} // Creacion de objeto

let inviarInfoInput = document.getElementById("enviarInfo");
const users = [];

inviarInfoInput.addEventListener("click", (event) => {
    event.preventDefault();
    let nombreUsuario = document.getElementById("nombreInput");
    let apellidoUsuario = document.getElementById("apellidoInput");
    let emailUsuario = document.getElementById("emailInput");
    let textoUsuario = document.getElementById("textoInput");

    const usuario = new user(nombreUsuario, apellidoUsuario, emailUsuario, textoUsuario);
    users.push(usuario);
    console.log(users);
})

//Se crea un array de objetos con los datos ingresados en los imputs del form de contacto