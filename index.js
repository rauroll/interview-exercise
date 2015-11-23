var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var path = require('path');


var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '/public'));

app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

var restApi = require('./app/routes/api');

app.use('/messages/', restApi);

app.get('/*', function(req, res) {
	res.send('index');
});

;


var messageSocket = require('./app/socket').listen(app.listen(port));

console.log("Listening to port 3000.");


exports = module.exports = app;