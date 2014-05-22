// require express and create router
var express = require('express');
var router = express.Router();

// router for index page
router.get('/', function(req, res) {
  res.render('index', 
    {
      title: 'home',
      bodyID: 'home'
    }
  );
});

module.exports = router;