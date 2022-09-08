const PrimerProducto = document.getElementById("figura1")

fetch("/json-productos/comedor.json")
    .then(response => response.json())
    .then(productos => {
        productos.forEach((producto, indice) => {
            PrimerProducto.innerHTML += `
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
    })
