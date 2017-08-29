var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('inscricao', { title: 'VII TMLDI - Inscrição' });
});

module.exports = router;
