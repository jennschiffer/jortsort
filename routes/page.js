// require express and create router
var express = require('express');
var router = express.Router();

// router for /page
router.get('/', function(req, res) {
  res.render('page', 
    {
      title: 'example page',
      bodyID: 'page'
    }
  );
});

module.exports = router;