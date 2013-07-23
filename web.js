var express = require('express');

var app = express.createServer(express.logger());

var sendData = '';

// Reading a file
fs = require('fs')
fs.readFile('./index.html', 'utf8', function (err,data) {
  if (err) throw err;
  sendData = data;
  //console.log(data);
});

app.get('/', function(request, response) {
  response.send(sendData);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
