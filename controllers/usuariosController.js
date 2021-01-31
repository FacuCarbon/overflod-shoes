const path = require('path');
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');
const fs = require('fs');



const db = require('../db/models')


module.exports = {
    // Vista registro
    vistaRegistro: (req, res) => {
       // console.log('ENTRE')
        res.render('register', {
            title: 'Registrate - Overflod Shoes ',
            css: 'register.css',
            script: 'registerValidator.js'
        });
    },
    registro: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            db.Users.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10), // 123456789
                rango: 'usuario'
            })
                .then(usuario => {
                    console.log(usuario)
                    res.redirect('/usuarios/login')
                })
                .catch(err => {
                    res.send(err)
                })
        } else {
            res.render('register', {
                errors: errors.errors,
                title: 'Registrate - Overflod Shoes ',
                css: 'register.css'
            })
        }
    },
    // Vista login
    vistaLogin: (req, res) => {
        res.render('login', {
            title: 'Iniciar sesión - Overflod Shoes',
            css: 'login.css',
            script: 'loginValidator.js'
        })
    },
    login: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            db.Users.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(usuario => {
                    req.session.user = {
                        id: usuario.id,
                        nombre: usuario.nombre,
                        apellido: usuario.apellido,
                        email: usuario.email,
                        fecha: usuario.fecha,
                        provincia: usuario.provincia,
                        ciudad: usuario.ciudad,
                        direccion: usuario.direccion,
                        rango: usuario.rango
                    }
                    if (req.body.recordar) {
                        res.cookie('usuarioOverflod', req.session.user, { maxAge: 1000 * 60 * 60 })
                    }
                    res.redirect('/')
                })
        } else {
            res.render('login', {
                errors: errors.mapped(),
                title: 'Iniciar sesión - Overflod Shoes',
                css: 'login.css',
                script: 'loginValidator.js'

            })
        }
    },
    // Vista perfil 
    vistaPerfil: (req, res) => {
        res.render('perfil', {
            title: 'Perfil - Overflod Shoes',
            css: 'perfil.css',
            script: 'loginValidator.js',
            usuario: req.session.user
        })
    },
    editarPerfil: (req, res) => {
        db.Users.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            rango: req.body.rango,
            fecha: req.body.fecha,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            provincia: req.body.provincia,
            rango: req.body.rango
        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(editaPerfil => {
                req.session.user.nombre = req.body.nombre,
                req.session.user.apellido = req.body.apellido,
                req.session.user.fecha = req.body.fecha,
                req.session.user.provincia = req.body.provincia,
                req.session.user.ciudad = req.body.ciudad,
                req.session.user.direccion = req.body.direccion,
                req.session.user.rango = req.body.rango
                res.redirect('/usuarios/perfil')
            })
            .catch(error => {
                res.send(error)
            })
    },
    borrarUsuario:function(req,res) {
        db.Users.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(resultado => {
            console.log(resultado)
            req.session.destroy();
            if(req.cookies.usuarioOverflod){
                res.cookie('usuarioOverflod','',{maxAge:-1});
            }
            return res.redirect('/')
            
        })
        .catch( error => {
            res.send(error)
        })
    },
    sesionOff: (req, res) => {
        req.session.destroy()
        if (req.cookies.usuarioOverflod) {
            res.cookie('usuarioOverflod', ' ', { maxAge: -1 });
        }
        res.redirect('/')
    }
}

