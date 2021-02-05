const fs = require('fs')
const path = require('path');

// requerimos mercado pago

const mercadopago = require('mercadopago');
const bodyParser = require('body-parser')


// accesos mercado pago

mercadopago.configure({
    access_token: 'APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398',
    integrator_id: 'dev_24c65fb163bf11ea96500242ac130004'
})

/*let productos = fs.readFileSync(path.join(__dirname, '..', 'data', 'productos.json'), 'utf-8')
productos = JSON.parse(productos)

let usuarios = fs.readFileSync(path.join(__dirname, '..', 'data', 'usuarios.json'), 'utf-8')
usuarios = JSON.parse(usuarios) */

const db = require('../db/models')
const {validationResult}= require('express-validator')
const Sequelize = require('sequelize');
const { url } = require('inspector');
let Op= Sequelize.Op;

module.exports = {
    listado : function(req,res){
        db.Products.findAll({
           include: [
               {
               association: "categoria"
           },
           {
                association: "marca"
            }
            ]
       })
    .then(productos =>{
            res.render('productos',{
                title: 'Nuestros productos disponibles',
                css: 'productos.css',
                productos : productos,
                usuario: req.session.user
            })
        })

        
        
    },
    
detalle: function(req,res){
     
            db.Products.findOne({
            where : {
                id: req.params.id
            },
            include : [
                {
                    association: 'categoria'
                },
                {
                    association: 'marca'
                },
                {
                    association: 'talle'
                },
                {
                    association: 'color'
                }
            ]
        })
        
            .then(producto => {
                res.render('producto', {
                    title: 'Detalle del producto',
                    css: 'detalleProducto.css',
                    producto: producto,
                    usuario: req.session.user,
                    
                })
            })
},
    buscador: (req,res) =>{
        if (req.query.search == "") {
            res.redirect('/')
        }
        let busqueda = req.query.search;
    
        db.Products.findAll({
            where: {
                
                nombre: {[Op.like]: `%${busqueda}%`}
            },
            include : [
                {
                    association: 'categoria'
                },
                {
                    association: 'marca'
                }
            ]
        })
       
        .then(producto => {
            res.render('busqueda',{
                title: "Resultado de la busqueda",
                css:"productos.css",
                productos:producto,
                busqueda: busqueda,
                usuario: req.session.user
            })
        })
        .catch(error=>{
            res.send(error)
        })
},
vistaAgregar: (req,res) =>{
    //res.send('aca estoy')
    const categories = db.Categories.findAll()
    const marcas = db.Brand.findAll()
    const colores = db.Colors.findAll()
    const talle = db.Size.findAll()
    Promise.all([categories ,marcas, colores, talle])
    .then(([categories, marcas, colores, talle]) =>{
        
                res.render('CargaDeproducto', {
                    title: 'Agregar producto...',
                    css: 'cargaProducto.css',
                    categories: categories,
                    marca: marcas,
                    colores: colores,
                    talle: talle,
                    usuario: req.session.user,
                    script: 'agregarProductoValidator.js'
                })
            })
    },

    agregar: function (req, res) {
        db.Products.create({
                nombre: req.body.nombre,
                precio: Number(req.body.precio),
                id_categoria: req.body.categoria,
                id_marca: req.body.marca,
                id_colores: req.body.color,
                id_talles: req.body.talle,
                descripcion: req.body.descripcion,
                imagenes: req.files[0].filename
        })
            .then(product => {

                return res.redirect('/productos')
            })
            .catch(err => {
                res.send(err)
            })


},
    vistaEditar: (req, res) =>{

        db.Products.findOne({
            where : {
                id: req.params.id
            },
            include : [
                {
                    association: 'categoria'
                },
                {
                        association: 'marca'
                    },
                    {
                        association: 'talle'
                    },
                    {
                        association: 'color'
                    }
            ]
        })

         .then(producto =>{
            res.render('editarProducto',{
            title:'Editar producto',
            css:'editarProducto.css',
            producto: producto,
            usuario:req.session.user,
            script: 'EditarProductosValidator.js'
           })
          
    })
    },

    editar: (req, res) =>{
        db.Products.update({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            id_categoria: req.body.categoria,
        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(editaProducto => {
                nombre = req.body.nombre,
                precio = req.body.precio,
                descripcion = req.body.descripcion,
                id_categoria = req.body.categoria
                res.redirect('/usuarios/perfil')
            })

        res.redirect("/productos/detalle/" + req.params.id)
    },
    eliminar: function (req, res) {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/productos')
            })
            .catch(errores => {
                res.send(errores)
            })
    },

    carrito: (req,res) =>{

        db.Products.findOne({
            where : {
                id: req.params.id
            },
            include : [
                {
                    association: 'categoria'
                },
                {
                    association: 'marca'
                },
                {
                    association: 'talle'
                },
                {
                    association: 'color'
                }
            ]
        })
        
        .then(producto => {
        res.render('carrito', { 
            title: 'Carrito de compras',
            css: 'carrito.css',
            producto: producto,
            usuario: req.session.user
    
    })
})
},

callback: (req,res) =>{
    console.log(req.query);

    if(req.query.status.includes('success')){
       return res.render('success')
    }

    if(req.query.status.includes('pending')){
        return res.render('pending')
     }

     if(req.query.status.includes('failure')){
        return res.render('failure')
     }

     return res.status(404).end()
    
},

notifications: (req,res) =>{

    console.log('webhook', req.body);
    res.send(req.body)
    // le respondemos a MP que llego la informacion
    res.status(200).end('OK')

},

comprar: (req, res) => {

    const host = 'http://localhost:3000/productos/'

        const url = host + 'callback?status='
        

        let preference = {

             // datos del producto
        items: [
            {

            id: '1234',
            picture_url: 'https://mercadopago12345.heroku.com/images/products/jordan.jpg',
            title: req.body.title,
            unit_price: Number(req.body.price),
            quantity: 2
        }],


            // volver al sitio, dependiendo del status de la compra
            back_urls: {

                success:  url + 'success',

                pending: url + 'pending',

                failure: url + 'failure'
            },


        auto_return: 'approved',

        // informacion de pagador
        payer: {
            name: 'Ryan',
            surname: 'Dahl',
            email: 'test_user_63274575@testuser.com',

            phone: {
                area_code: '11',
                number: 55556666
            },

            address: {
                zip_code: '1234',
                street_name: 'Monroe',
                street_number: 860
            },
        },
        payment_methods: {
            // maximo 12 cuotas
            installments: 12,

            // excluimos visa
            excluded_payment_methods: [{
                id: 'visa'
            }],

            // excluimos atm
            excluded_payment_types: [{
                id: 'atm'
            }, ]
        },
       
        external_reference: 'facundocarbon2015@gmail.com'
    }

    mercadopago.preferences.create(preference)

        .then(response => {
            global.init_point = response.body.init_point;
            res.render('confirm')
        })
        .catch(error => {

            console.log(error)

            res.send('error')
        })
}

}