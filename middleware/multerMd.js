var path = require('path')
var multer = require('multer')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', 'public', 'img', 'productosAgregados'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        req.fileValidationError = "Only Images";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const upload =  multer({
    storage: storage,
    fileFilter:fileFilter
})

  module.exports = upload

