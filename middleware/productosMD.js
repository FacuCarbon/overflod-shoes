const {check,validationResult,body} = require('express-validator');

module.exports = [

    check('nombre')
    .isLength({
        min:5
    })
    .withMessage('*El nombre debe contener minimo 5 caracteres.'),

    
    check('precio')
    .isInt({
        min:1
    }).withMessage('El producto debe tener un precio válido'),

    body('imagen')
    .custom((value,{req})=>{
        if(!req.files[0]){
            return false
        }else{
            return true
        }
    })
    .withMessage("*No producto necesita una imagen."),

    check('descripcion')
    .isLength({
        min:20
    })
    .withMessage('La descripcion del producto es obligatoria'),

    check('categoria')
    .isLength({
        min:1
    })
    .withMessage('La categoria del producto es obligatoria')

]