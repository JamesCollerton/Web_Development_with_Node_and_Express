var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('tours/oregon-coast');
});

module.exports = router;
