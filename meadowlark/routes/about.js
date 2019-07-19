var express = require('express');
var router = express.Router();

const fortunes = require('../lib/utils/fortune');

router.get('/', function(req, res, next) {
    console.log("In about page")
    var randomFortune = fortunes.getFortune()
    console.log(`Random fortune selected ${randomFortune}`)
    res.render('about', { fortune: randomFortune });
});

module.exports = router;
