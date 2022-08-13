const botonDark = document.getElementById("Dark");
const botonLight = document.getElementById("Light");

botonDark.addEventListener("click",() =>{
    document.body.classList.add("color-Dark");
    fondoNegro = dark;
})

botonLight.addEventListener("click",() =>{
    document.body.classList.remove("color-Dark");
    fondoNegro = light;
})

let fondoNegro

if (localStorage.getItem("fondoNegro")){
    fondoNegro = localStorage.getItem("fondoNegro");
} else{
    localStorage.setItem("fondoNegro", Light);
}

if(fondoNegro == "dark"){
    document.body.classList.add("fondoNegro");
}