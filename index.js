var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('Hello world');
});

var port = 8080;
app.listen(port, function() {
  console.log('Server listening on port' + port);
});
