var morgan = require('morgan'),
	express = require('express'),
	server = require('./AccessControlApp/server'),
	envconst = require('./AccessControlApp/env/constants');

var app = server();

app.listen(envconst.APP_PORT, function() {
  console.log('Express server listening on port ' + envconst.APP_PORT);
});

