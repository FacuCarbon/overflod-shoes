var express = require('express');
var router = express.Router();

var validacionRegistro = require('../middleware/validarDatosRegistro') // Validaciones para el registro
var validacionLogin = require('../middleware/validarDatosLogin')// Validaciones para el login
var validarSiLogeo = require('../middleware/validarLogeo')
var validarNoLogeo = require('../middleware/validarNoLogeo')
var cookie = require('../middleware/localsUserCheck')

const usuariosController = require('../controllers/usuariosController');

//Registro
router.get('/registro', validarNoLogeo, usuariosController.vistaRegistro);
router.post('/registro', validacionRegistro, usuariosController.registro)

//Login
router.get('/login' ,usuariosController.vistaLogin);
router.post('/login', validacionLogin, usuariosController.login);

// perfil
router.put('/perfil/:id', validarSiLogeo, usuariosController.editarPerfil)
router.get('/perfil', validarSiLogeo, usuariosController.vistaPerfil)

router.delete('/eliminar/:id', validarSiLogeo ,usuariosController.borrarUsuario);

// Cerrar sesión
router.get('/logout', validarSiLogeo ,usuariosController.sesionOff);

module.exports = router;