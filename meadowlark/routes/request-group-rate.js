var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('tours/request-group-rate');
});

module.exports = router;
