var express = require('express');

var app = express();

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');

// set up handlebars view engine
var handlebars = require('express3-handlebars')
                    .create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

/*
    Set where we serve static files from
*/
app.use(express.static(__dirname + '/public'));

/*
    All routes
*/
app.use('/', indexRouter);
app.use('/about', aboutRouter);

/*
    We can tell the difference between these two custom error handlers by the
    number of arguments to the function
*/

// custom 404 page
app.use(function(req, res){
    res.status(404);
    res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});