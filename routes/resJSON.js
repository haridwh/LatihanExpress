var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({
      pesan:'Lorem ipsum dolor amet',
      user:{
        nama:'Hari',
        email:'hari@gmail.com'
      }
    });
});

module.exports = router;
