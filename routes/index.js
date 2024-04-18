var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  next();
});


router.get('/ok', function(req, res, next) {
  res.send('test');
  next()
});



module.exports = router;
