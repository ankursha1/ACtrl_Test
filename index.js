var morgan = require('morgan'),
	express = require('express'),
	server = require('./AccessControlApp/server');

var app = server();

app.listen(3000, function() {
  console.log('Express server listening on port ' + 3000);
});

