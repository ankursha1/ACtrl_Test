var express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	path = require('path'),
	approutes = require('./approutes/routes');

var server = function() {
	var app = express(),
		__dirname = ".";

	app.use(morgan('dev'));                                         
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


    return app;
}

module.exports = server;
