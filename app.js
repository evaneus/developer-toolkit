var fs = require('fs'),
  http = require('http'),
  express = require('express');

var app = express();

app.use(require('connect-assets')({ src: __dirname + '/client/assets'}));
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/client/public'));
app.use(express.bodyParser());

app.get('/', function(req, res) {
  res.render('index', {title: "Index"});
});


// start server
var port = process.env.PORT || 5000;
http.createServer(app).listen(port, function() {
  console.log("Express server listening on port " + port);
});