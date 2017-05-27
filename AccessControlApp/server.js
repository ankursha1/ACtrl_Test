var express = require('express'),
	logger = require('./util/logger'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	path = require('path'),
	approutes = require('./approutes/routes'),
	envconst = require('./env/constants'),
	// dbconn = require('./db/dbconn.js');
var server = function() {
	var app = express();
	// var __dirname = '..';
	logger.debug('Starting setting up server - ' + __dirname);
	app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({'extended':'false'}));
    app.use(methodOverride());
	app.use(cookieParser());
    
	// var pa = path.join(__dirname, '..');
	// logger.debug('Root path '+ pa);
    
    var router = express.Router();
    approutes(router);
	app.use('/', router);
	
	app.use(express.static(path.join(__dirname, 'public'))); 

    app.get('/', function( req, res, next ) {
    	res.sendFile(__dirname +'/public/index.html');
    });
    

    
	logger.info('Intializing db connection...');
	// dbconn(envconst.DB_INFO);

	logger.info('Finished setting up server.....')

    return app;
}

module.exports = server;
