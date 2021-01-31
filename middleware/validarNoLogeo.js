module.exports = function (req,res,next){
    if(!req.session.user){
        next()
    }else{
        res.redirect('/')
    }
}

/// Valida si el usuario no esta logeado (Valido solo para el registro)