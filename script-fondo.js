const botonDark = document.getElementById("Dark");
const botonLight = document.getElementById("Light");

let fondoNegro

localStorage.getItem("fondoNegro") ? fondoNegro = localStorage.getItem("fondoNegro") : localStorage.setItem("fondoNegro", "light")

fondoNegro == "dark" ? document.body.classList.add("color-Dark") : document.body.classList.remove("color-Dark")

botonDark.addEventListener("click",() =>{
    document.body.classList.add("color-Dark");
    localStorage.setItem("fondoNegro", "dark");
})

botonLight.addEventListener("click",() =>{
    document.body.classList.remove("color-Dark");
    localStorage.setItem("fondoNegro", "light");
})

//Pude solucionar lo del local storage, ahora queda guardado, pero el problema es que cada html es independiente y no se como hacer que el cambio de uno se quede guardado en otro

