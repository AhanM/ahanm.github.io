var express = require('express');
var app = express();

app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public'));

app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
  res.render("index.html")
});

app.get('/about', (req, res) => {
  res.render("about.html")
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});