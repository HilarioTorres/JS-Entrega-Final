const TercerProducto = document.getElementById("figura3")
const carrodecompras = JSON.parse(localStorage.getItem("carrodecompras"))?? []
const carrito = document.getElementsByClassName("botonCarrito")

fetch("/json-productos/living.json")
    .then(response => response.json())
    .then(productos => {
        productos.forEach((producto, indice) => {
            TercerProducto.innerHTML += `
        <div class="card border-dark mb-3" id= "producto${indice}" style="width: 18rem;">
            <img src="../img/${producto.img}" class="card-img-top" alt="silla version uno">
            <div class="card-body ${producto.claseGrid}">
                <h3 class="card-title card-header">${producto.nombre}</h3>
                <p class="card-text ">Stock:${producto.stock}</p>
                <h4 class="card-title">Precio:$${producto.precio}</h4>
                <button type="button" class="btn btn-outline-warning">Añadir al carrito</button>
            </div>
        </div>
        `
        });

        productos.forEach((producto, indice) =>{
            const idProductoCocina = document.getElementById(`producto${indice}`)
            idProductoCocina.children[1].children[3].addEventListener("click", () =>{
                if (carrodecompras.find(prod=> prod.id == producto.id)) {
                    let indiceCarrito = carrodecompras.findIndex((prod => prod.id == producto.id))
                    if(carrodecompras[indiceCarrito].cantidad < producto.stock){
                        carrodecompras[indiceCarrito].cantidad ++
                        
                    }if(productoCarrito == 10 ){
                        sinStock()
                    }
                } else {
                    const productoCarrito = {id: producto.id, cantidad:1}
                    carrodecompras.push(productoCarrito);
                }
                
                localStorage.setItem("carrodecompras", JSON.stringify(carrodecompras));
            })
        })
    })

    carrito.addEventListener("click", ()=>{
        const productoComprado = JSON.parse(localStorage.getItem("carrodecompras"))

        if (productoComprado.length == 0) {
            errorCarroVacio()
        } else {
            productoComprado.forEach((producto) => {

            })
        }
    })

function errorCarroVacio() {
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
        icon: 'error',
        title: 'Carrito Vacio'
    })
}

function sinStock() {
    Swal.fire('Sin Stock')
}