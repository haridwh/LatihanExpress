var express = require('express');
var router = express.Router();

//parameter pada url
router.get('/(:nama)/(:email)', function (req, res, next) {
    res.render('input',
        {
          nama: req.params.nama,
          email: req.params.email
        }
      );
});

module.exports = router;
