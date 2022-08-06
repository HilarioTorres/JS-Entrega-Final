class Juego {

    constructor(Nombre, Desarrollador, Logros, Precio, FechaSalida) {

        this.Nombre = Nombre;
        this.Desarrollador = Desarrollador;
        this.Logros = Logros;
        this.Precio = Precio;
        this.FechaSalida = FechaSalida;

    }

}

const juego1 = new Juego("Counter-Strike", "Valve", 167, 129.99, 2000);

const juego2 = new Juego("Valorant", "Riot Games", 0, "Gratis", 2020);

const juego3 = new Juego("Grand thef auto V", "Rockstar Games", 77, 850, 2013);

const juego4 = new Juego("Gang Beasts", "Boneloaf", 19, 224.99, 2017);

const juego5 = new Juego("Cuphead", "Studio MDHR", 42, 224.99, 2017);

const juegos = [juego1, juego2, juego3, juego4, juego5];



let bienvenida;


function iniciar() {

    do {
        bienvenida = parseFloat(prompt("Le damos la bienvenida a nuestra tienda de juegos, seleccione una opción\n\n 1- Ver nuestro catalogo \n 2-Ver Nuestros Precios \n 3-Salir"));
    } while (isNaN(bienvenida));

}

iniciar();

const mostrarJuegos = juegos.map(juegosArray => juegosArray.Nombre);
const mostrarPrecios = juegos.map(juegosArray => juegosArray.Precio);
let preguntavolver;
let preguntaImpuesto;

if (bienvenida === 1) {
    console.log(`Nuestros Juegos son ${mostrarJuegos}`);
    do {
        preguntavolver = parseFloat(prompt("¿Quiere volver al menú anterior?\n\n 1- ¿Quiere ver mas datos de nuestros juegos? \n 2-Deseo irme"))
    } while (isNaN(preguntavolver));

}
if (bienvenida === 2) {
    console.log(`Nuestros precios son ${mostrarPrecios}`);
    do {
        preguntaImpuesto = parseFloat(prompt("¿Quiere previsualizar cuál es el precio final?\n\n 1- Si \n 2-Deseo irme"))
    } while (isNaN(preguntaImpuesto));
}
if (bienvenida === 3) {
    alert("Muchas Gracias por usar nuestro servicio, vuelva cuando quiera \n\n :D");
}
if (bienvenida > 3) {
    console.log("Ingrese un valor valido");
}

const lanzamiento = juegos.map(juegosArray => juegosArray.FechaSalida);
const desarroladorJuego = juegos.map(juegosArray => juegosArray.Desarrollador);
const logrosJuego = juegos.map(juegosArray => juegosArray.Logros);
const datosJuegos = [mostrarJuegos, desarroladorJuego, lanzamiento, logrosJuego];

if (preguntavolver === 1) {
    console.table(datosJuegos)

}
if (preguntavolver === 2) {
    alert("Muchas Gracias por usar nuestro servicio, vuelva cuando quiera \n\n :D");
}
if (preguntavolver > 2)
// No sabia como solucionar una cosa, cuando ponia un numero que no era 1 o 2 se iba el prompt y si ponia un else no me lo tomaba, me saltaba el console.log("Ingrese un valor valido") en cualquier cosa diferente a 1 o 2 (la solucion que enocontre fue un mayor que dos pero me gustaria encontrar otra)
{
    console.log("Ingrese un valor valido");
}

let ingresePrecio;

function realizarImpuesto() {

    for (let i = ingresePrecio; i = i * 75 / 100 + i;) {
        alert(`El resulado con impuesto es ${i} \n Gracias por utilizarnos`)
        if (i != ingresePrecio) {
            break
        }
    }
}

let seleccioneJuego;



if (preguntaImpuesto === 1) {

    do {
        seleccioneJuego = parseFloat(prompt("¿Que juego desea aplicarle el impuesto?\n\n 1-Counter-Strike\n 2-Valorant\n 3-Grand thef auto V\n 4-Gang Beasts\n 5-Cuphead"))
    } while (isNaN(seleccioneJuego));
    if (seleccioneJuego === 1) {
        ingresePrecio = 129.99 //Trate de poner el precio mediante el objeto, pero la verdad que no pude (Osea que se mantenga actualizado si cambio el precio en el objeto)
        realizarImpuesto()
    }
    if (seleccioneJuego === 2) {
        alert("El juego es gratis")
    }
    if (seleccioneJuego === 3) {
        ingresePrecio = 850
        realizarImpuesto()
    }
    if (seleccioneJuego === 4) {
        ingresePrecio = 224.99
        realizarImpuesto()
    }
    if (seleccioneJuego === 5) {
        ingresePrecio = 224.99
        realizarImpuesto()
    }
    if (seleccioneJuego > 5) {
        console.log("Ingrese un valor valido");
    }

}
if (preguntaImpuesto === 2) {
    alert("Muchas Gracias por usar nuestro servicio, vuelva cuando quiera \n\n :D");
}
if (preguntaImpuesto > 2) {
    console.log("Ingrese un valor valido");
}


//asdasdasdasd