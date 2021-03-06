var express = require('express'),
logger = require('./AccessControlApp/util/logger'),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
methodOverride = require('method-override'),
path = require('path'),
approutes = require('./AccessControlApp/approutes/routes'),
envconst = require('./AccessControlApp/env/constants'),
dbconn = require('./AccessControlApp/db/dbconn.js');
var server = function() {
	var app = express();
	app.set('APP_SECRET', envconst.APP_SECRET);
	logger.debug('Starting setting up server - ' + envconst.APP_SECRET);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({'extended':'false'}));
	app.use(methodOverride());
	app.use(cookieParser());
	var router = express.Router();
	approutes(app);
	app.use('/', router);
	
	app.use(express.static(path.join(__dirname, '/'))); 

	app.get('/', function( req, res, next ) {
		res.sendFile(__dirname +'/public/index.html');
	});

	logger.info('Intializing db connection...');
	dbconn(envconst.DB_INFO);
	logger.info('Finished setting up server.....')

	return app;
}

module.exports = server;
