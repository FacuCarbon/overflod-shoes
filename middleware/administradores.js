function administradores(req,res,next){
    if(req.session.user.rango == 'administrador'){
        next()
    }
    else{
        res.redirect('/')
    }
   
}

module.exports = administradores