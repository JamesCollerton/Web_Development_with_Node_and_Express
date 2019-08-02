var express = require('express');

var app = express();

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const hoodRiverRouter = require('./routes/hood-river');
const oregonCoastRouter = require('./routes/oregon-coast');
const requestGroupRateRouter = require('./routes/request-group-rate');

const testMiddleware = require('./lib/middleware/test');

// set up handlebars view engine
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

/*
    Middleware
*/
app.use(testMiddleware);

/*
    Static
*/
app.use(express.static(__dirname + '/public'));

/*
    All routes
*/
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/tours/hood-river', hoodRiverRouter);
app.use('/tours/oregon-coast', oregonCoastRouter);
app.use('/tours/request-group-rate', requestGroupRateRouter);

/*
    We can tell the difference between these two custom error handlers by the
    number of arguments to the function
*/

// custom 404 page
app.use(function(req, res){
    console.log("Setting up 404 page")
    res.status(404);
    res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next){
    console.log("Setting up 500 page")
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});