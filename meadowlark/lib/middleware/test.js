function test(req, res, next){
    console.log(`In test middleware for URL ${req.url}`);
    console.log(`Current environment ${req.app.get('env')}, value of test ${req.query.test}`);
    res.locals.showTests = req.app.get('env') !== 'production' && req.query.test === '1';
    console.log(`Show tests set as ${res.locals.showTests}`);
    next();
}

module.exports = test;