var express = require('express');
var router = express.Router();

//render view
router.get('/', function (req, res, next) {
  res.render('detail',
      {
        pesan:'Lorem ipsum dolor amet',
        user:{
          nama:'Hari',
          email:'hari@gmail.com'
        }
      }
    );
});

module.exports = router;
