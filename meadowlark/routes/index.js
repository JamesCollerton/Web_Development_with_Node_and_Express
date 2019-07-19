var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // console.log(req.query)
    console.log("In index page")
    res.render('home');
});

module.exports = router;
