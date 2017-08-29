var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var codigo = req.query.i;
    if (!codigo) // SEM CODIGO
        res.redirect('/');

    // CODIGO INVALIDO

    res.render('comprovante', {title: 'VII TMLDI - Upload de comprovante'});
});

module.exports = router;
