var express = require('express'),
	logger = require('./util/logger'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	path = require('path'),
	approutes = require('./approutes/routes');

var server = function() {
	var app = express(),
		__dirname = ".";
	logger.debug('Starting setting up server.....')
	
    app.use(bodyParser.urlencoded({'extended':'false'}));            
    app.use(bodyParser.json());
    app.use(methodOverride());
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));

    
    var router = express.Router();
	router.get('/', function( req, res, next ) {
    	res.sendfile('/public/index.html');
    });

	approutes(app);
    app.use('/', router);
	logger.debug('Finished setting up server.....')

    return app;
}

module.exports = server;
