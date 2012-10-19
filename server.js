var express = require('express'),
    hbs = require('hbs'),
    app = express();

// setup handlebars as template engine
app.set('view engine', 'hbs');
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.configure(function(){
  app.use(express.static(__dirname));
});

app.get("/", function(req, res) {
    res.render("page1", {title:'Page 1'});
});

app.get("/page2", function(req, res) {
    res.render("page2", {title:'Page 2'});
});

var port = 8000;
app.listen(port);
console.log("visit http://localhost:" + port);
