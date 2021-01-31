const path = require('path');

module.exports = {
politicas: (req,res) => {
    res.render('politicas', { 
        title: 'Politicas de privacidad del sitio.',
        css: 'politicas.css'

});
}
}