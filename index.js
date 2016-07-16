var logger = require('./AccessControlApp/util/logger'),
	express = require('express'),
	server = require('./server'),
	envconst = require('./AccessControlApp/env/constants');

logger.info('Initializing app...')
var app = server();

app.listen(envconst.APP_PORT, function() {
  logger.info('Express server listening on port ' + envconst.APP_PORT);
});

