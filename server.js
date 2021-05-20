/**
 * Require Modules
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

/**
 * Routes
 */
app.get('/', function(req, res){
    res.render('index', {user_data: "Hey"});
});

app.post('/users', function(req, res){
    res.render('users', {user: req.body});
});

app.listen(8000, function(){
    console.log("Listening to Port 8000");
});