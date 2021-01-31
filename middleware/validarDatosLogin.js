const db = require('../db/models');

const {check,body} = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = [
    
    // Validamos email, para que tenga su formato correcto
    check('email')
    .isEmail()
    .withMessage('Debe colocar un correo electronico valido'),

    // Validamos password que no este vacía
    check('password')
    .isLength({
        min:1
    })
    .withMessage("Escribe tu contraseña"),

    // Chequeamos que tanto password como email coincidan con los datos de la base de datos
    body('password')
    .custom(function(value,{req}){
        return db.Users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(usuario => {
            console.log(usuario)
            if(!bcrypt.compareSync(value, usuario.password)){
                return Promise.reject('Su correo o contraseña incorrectos')
            }
        })
        .catch(error =>{
            return Promise.reject('Su correo o contraseña incorrectos')
        })
    })
]