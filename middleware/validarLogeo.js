module.exports = function (req,res,next){
    if(req.session.user){
        next()
    }else{
        res.redirect('/usuarios/login')
    }
}

/// Valida si el usuario inicio o no sesion 