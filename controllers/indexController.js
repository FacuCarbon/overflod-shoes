const path = require('path');

const db = require('../db/models')

module.exports = {
    index : function(req,res){
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
        res.render('index', { 
            title: 'Bienvenidos a Overflod Shoes ',
            css: 'index.css',
            usuario: req.session.user,
            productos: productos
            })
        })
       
    }

}
