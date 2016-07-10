var logger = require('./AccessControlApp/util/logger'),
	express = require('express'),
	server = require('./AccessControlApp/server'),
	envconst = require('./AccessControlApp/env/constants');

logger.info('Initializing app...')
var app = server();

app.listen(envconst.APP_PORT, function() {
  console.log('Express server listening on port ' + envconst.APP_PORT);
});

