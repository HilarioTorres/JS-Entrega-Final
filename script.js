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

const juego2 = new Juego("Valorant", "Riot", 0, "Gratis", 2020);

const juego3 = new Juego("GTA 5", "Rockstar", 77, 850, 2013);

const juego4 = new Juego("Gang Beasts", "Boneloaf", 19, 224.99, 2017);

const juego5 = new Juego("Cuphead", "MDHR", 42, 224.99, 2017);

const juegos = [juego1, juego2, juego3, juego4, juego5];

const botonIniciar = document.getElementById("boton1");

const sectionIniciar1 = document.getElementById("textoSection1");

const sectionIniciar2 = document.getElementById("textoSection2");

const sectionIniciar3 = document.getElementById("textoSection3");

const sectionIniciar4 = document.getElementById("textoSection4");

const sectionIniciar5 = document.getElementById("textoSection5");

function Comenzar5() {
juegos.forEach(Juego => {
    sectionIniciar1.innerHTML = `
    <div class="card shadow e">
<img src="./pictures/1.JPG" alt="logo1">
        <p>Nombre: ${juego5.Nombre}</p>
        <p>Desarrollador: ${juego5.Desarrollador}</p>
        <p>Logros: ${juego5.Logros}</p>
        <p>Precio: ${juego5.Precio}</p>
        <p>Fecha de salida: ${juego5.FechaSalida}</p>
    </div>
`
    })
}

function Comenzar1() {
    juegos.forEach(Juego => {
        sectionIniciar2.innerHTML = `
        <div class="card shadow e">
    <img src="./pictures/4.jpg" alt="logo1">
            <p>Nombre: ${juego1.Nombre}</p>
            <p>Desarrollador: ${juego1.Desarrollador}</p>
            <p>Logros: ${juego1.Logros}</p>
            <p>Precio: ${juego1.Precio}</p>
            <p>Fecha de salida: ${juego1.FechaSalida}</p>
        </div>
    `
        })
    }

function Comenzar2() {
    juegos.forEach(Juego => {
        sectionIniciar3.innerHTML = `
        <div class="card shadow e">
    <img src="./pictures/5.jpg" alt="logo1">
            <p>Nombre: ${juego2.Nombre}</p>
            <p>Desarrollador: ${juego2.Desarrollador}</p>
            <p>Logros: ${juego2.Logros}</p>
            <p>Precio: ${juego2.Precio}</p>
            <p>Fecha de salida: ${juego2.FechaSalida}</p>
        </div>
    `
        })
    }

    function Comenzar3() {
        juegos.forEach(Juego => {
            sectionIniciar4.innerHTML = `
            <div class="card shadow e">
        <img src="./pictures/2.JPG" alt="logo1">
                <p>Nombre: ${juego3.Nombre}</p>
                <p>Desarrollador: ${juego3.Desarrollador}</p>
                <p>Logros: ${juego3.Logros}</p>
                <p>Precio: ${juego3.Precio}</p>
                <p>Fecha de salida: ${juego3.FechaSalida}</p>
            </div>
        `
            })
        }

        function Comenzar4() {
            juegos.forEach(Juego => {
                sectionIniciar5.innerHTML = `
                <div class="card shadow e">
            <img src="./pictures/3.jpg" alt="logo1">
                    <p>Nombre: ${juego4.Nombre}</p>
                    <p>Desarrollador: ${juego4.Desarrollador}</p>
                    <p>Logros: ${juego4.Logros}</p>
                    <p>Precio: ${juego4.Precio}</p>
                    <p>Fecha de salida: ${juego4.FechaSalida}</p>
                </div>
            `
                })
            }


    botonIniciar.addEventListener("click",()=>{
        Comenzar1();
    });
    botonIniciar.addEventListener("click",()=>{
        Comenzar2();
    });
    botonIniciar.addEventListener("click",()=>{
        Comenzar3();
    });
    botonIniciar.addEventListener("click",()=>{
        Comenzar4();
    });
    botonIniciar.addEventListener("click",()=>{
        Comenzar5();
    });
