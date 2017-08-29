var express = require('express'),
		request = require('request'),
		geoip = require('geoip-lite'),
		bodyParser= require('body-parser');

var app = express();
var router = express.Router();
var paths = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(router);

app.get('/', function(req, res){
	res.render('index');
});

app.get('/results', function(req, res){
	var baseURI= 'http://beermapping.com/webservice/locquery/';
	var apiKey ='7ff253f8031130da09eac402aced3be4/';
	var query= req.query.search;
	var url = baseURI  + apiKey + query +'&s=json';
	
	request(url, function(err, response, body){ 
		if(!err & res.statusCode === 200){
			var data = JSON.parse(body);
			if(!query){
				res.render('index');
			}else{
				res.render('results',{data: data});
			}
			
			//res.send(data);
			
		} 
	});
});

app.listen(process.env.PORT || 8080, function(){
	console.log('the server is running on port 8080');
});