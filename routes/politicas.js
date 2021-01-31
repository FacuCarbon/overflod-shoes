var express = require('express');
var router = express.Router();

const politicasController = require('../controllers/politicasController')

/* GET home page. */
router.get('/', politicasController.politicas);

module.exports = router;