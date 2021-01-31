module.exports = function(req,res,next){
    if(req.cookies.usuarioOverflod){
        console.log(req.cookies.usuarioOverflod)
        req.session.user = req.cookies.usuarioOverflod;
        res.locals.user = req.session.user  
        next()
    }else{
        next()
    }
}