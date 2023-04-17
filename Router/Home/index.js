__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {res.json({server: "Started"})});
router.get('/hi', function(req, res) {res.send('https://github.com/Ajayos.png')});
router.get('/favicon.ico', function(req, res) {res.redirect('https://github.com/Ajayos.png')});

module.exports = router;
