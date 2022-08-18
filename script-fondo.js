const botonDark = document.getElementById("Dark");
const botonLight = document.getElementById("Light");

let fondoNegro

localStorage.getItem("fondoNegro") ? fondoNegro = localStorage.getItem("fondoNegro") : localStorage.setItem("fondoNegro", "light")

fondoNegro == "dark" ? document.body.classList.add("color-Dark") : document.body.classList.remove("color-Dark")

botonDark.addEventListener("click",() =>{
    document.body.classList.add("color-Dark");
    localStorage.setItem("fondoNegro", "dark");
    EjecutadoCorrecto();
})

botonLight.addEventListener("click",() =>{
    document.body.classList.remove("color-Dark");
    localStorage.setItem("fondoNegro", "light");
    EjecutadoCorrecto();
})

function EjecutadoCorrecto() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Guardado Correctamente'
      })
}
