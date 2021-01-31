var express = require('express');
var router = express.Router();


const productosController = require('../controllers/productosController');

/// Requerimos lo que necesitamos
var cargaImagenes = require('../middleware/multerMd')

var validarSiLogeo = require('../middleware/validarLogeo') // Middleware si el usuario esta logeado o no

var administradores = require('../middleware/administradores') // Middleware si es administrador o no

var cookie = require('../middleware/localsUserCheck')

var productosMD = require('../middleware/productosMD')



/* GET home page. */
router.get('/'  ,productosController.listado);

// Detalle del producto /productos/detalle/:id
router.get('/detalle/:id',validarSiLogeo ,productosController.detalle);

// Buscador interno
router.get('/buscar' ,productosController.buscador);

// Vista agregar producto /productos/agregarProducto
router.get('/agregarProducto',validarSiLogeo, administradores, productosController.vistaAgregar)
// Agregar producto
router.post('/agregarProducto',cargaImagenes.any(), productosMD , productosController.agregar)

// Vista editar producto
router.get('/editarProducto/:id', validarSiLogeo ,productosController.vistaEditar)
//Editar producto /productos/editarProducto/:id
router.put('/editarProducto/:id', productosMD ,productosController.editar)

// Eliminar producto
router.delete('/eliminar/:id',validarSiLogeo ,productosController.eliminar)

// Carrito de compras /productos/carrito
router.get('/carrito/:id', validarSiLogeo ,productosController.carrito);


module.exports = router;