var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var mime = require('mime');


router.get(/^\/(\w|.)+$/, function(req, res, next) {
    console.log(appRoot + '/downloads' + req.url);
    res.sendFile(appRoot + '/downloads' + req.url);
});

module.exports = router;
