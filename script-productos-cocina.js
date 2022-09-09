    const SegundoProducto = document.getElementById("figura2")
    const carrodecompras = JSON.parse(localStorage.getItem("carrodecompras"))?? []

    fetch("/json-productos/cocina.json")
        .then(response => response.json())
        .then(productos => {
            productos.forEach((producto, indice) => {
                SegundoProducto.innerHTML += `
            <div class="card border-dark mb-3" id= "producto${indice}" style="width: 18rem;">
                <img src="../img/${producto.img}" class="card-img-top" alt="silla version uno">
                <div class="card-body ${producto.claseGrid}">
                    <h3 class="card-title card-header">${producto.nombre}</h3>
                    <p class="card-text">Stock:${producto.stock}</p>
                    <h4 class="card-title">Precio:$${producto.precio}</h4>
                    <button type="button" class="btn btn-outline-warning">Añadir al carrito</button>
                </div>
            </div>
            `
            });

            productos.forEach((producto, indice) =>{
                const idProductoCocina = document.getElementById(`producto${indice}`)

                idProductoCocina.children[1].children[3].addEventListener("click", () =>{
                    if (carrodecompras.find(productoExiste  => productoExiste.id == producto.id)) {
                        carrodecompras[indice].cantidad++
                    } else {
                        const productoCarrito = {
                            id: producto.id, cantidad:1
                        }
                        carrodecompras.push(productoCarrito);
                    }

                    
                    localStorage.setItem("carrodecompras", JSON.stringify(carrodecompras));
                })
            })

        })
    