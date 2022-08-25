const PrimerProducto = document.getElementById("figura1")

fetch("./json-productos/productos.json")
.then(reponse => response.json())
.then(productos =>{
    productos.forEach(img=> {
        PrimerProducto.innerHTML = `
        <a href="https://www.mercadolibre.com.ar"><img src="${productos.img}" alt="silla version uno"></a>
        
        `
    });
})

//La idea para proyecto final es pasar todos los productos a objetos y hacer un carrito con eso.
//El problema es que me salta error con el json, no se solucionarlo y trate pero no le encontre forma, asi que lo entrego con el error y con la correccion espero poder terminarlo