var express = require('express');
var app = express();

app.configure(function(){
	app.use(express['static'](__dirname));
});

app.get('/', function(req, res){
  res.send('<h1>Dev Server</h1><ul><li><a href="/test">test</a></li></ul>');
});


app.listen(8080);
console.log('developer server on http://localhost:8080/');