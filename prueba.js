const base = require('./db/models/')

const productos = base.Products.findAll()

.then(producto => {

        if(producto.nombre){
                console.log(producto.nombre)
        }
    })