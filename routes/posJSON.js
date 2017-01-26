var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    res.json({
      pesan:"POST_SUCCESS",
      user:{
        nama: req.param('nama'),
        email: req.param('email')
      }
    });
});

module.exports = router;
