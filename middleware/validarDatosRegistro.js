const { check, validationResult, body } = require('express-validator')

const fs = require('fs')
const path = require('path')

//let usuarios = fs.readFileSync(path.join(__dirname, '..', 'data', 'usuarios.json'), 'utf-8')
//usuarios = JSON.parse(usuarios)

let db = require('../db/models')

let validacionRegistro = [

    check('nombre').isLength({min: 2}).withMessage('*Su nombre debe contener mínimo 2 caracteres.'),

    check('apellido').isLength({min: 2}).withMessage('*Su apellido debe contener mínimo 2 caracteres.'),

    check('email')
        .isEmail().withMessage('*El campo email tiene un formato incorrecto'),

        body('email')
        .custom(function(value){
            return db.Users.findOne({
                where:{
                    email:value
                }
                })
                .then(user => {
                    if(user){
                        return Promise.reject('*El email ya esta registrado')
                    }
                })
            }),

    check('password')
        .isLength({min:8, max:20}).withMessage('*La contraseña debe tener minimo 8 y maximo 20 caracteres')
]

module.exports = validacionRegistro;