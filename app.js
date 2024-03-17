// load the things we need
var express = require('express');
var app = express();

//
app.use(express.static('./public'));

// set the view engine to ejs
app.set('view engine', 'ejs');
// creates an absolute path pointing to a folder called "views"
app.set('views', __dirname + '/views');

// index page
app.get('/', function(req, res) {
    res.render('index');
});

// login page
app.get('/about', function(req, res) {
    res.render('about');
});

// register page
app.get('/portfolio', function(req, res) {
    res.render('portfolio');
});

app.listen(4000);
console.log('4000 puerto usado, Api funcionando');

