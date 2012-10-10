var express = require('express');
var app = express();

app.configure(function(){
	app.use(express['static'](__dirname));
});

app.get('/', function(req, res){
  res.send('<a href="/test">test</a><br/>');
});


app.listen(8080);
console.log('developer server on http://localhost:8080/');