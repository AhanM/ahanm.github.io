var express = require('express');
var app = express();

const PORT = process.env.PORT || 5000


app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public'));

app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
  res.render("index.html")
});

app.get('/about', (req, res) => {
  res.render("about.html")
});

var server = app.listen(PORT, function() {
  console.log(`Listening on port ${ PORT }`);
});