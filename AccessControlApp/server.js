var express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	path = require('path');

var server = function() {
	var app = express();
	app.use(morgan('dev'));                                         
    app.use(bodyParser.urlencoded({'extended':'true'}));            
    app.use(bodyParser.json());
    app.use(methodOverride()); 
	app.use(cookieParser()); 
	
    var router = express.Router();
	router.get('/', function( req, res, next ) {
    	res.send("Hello from server!!");
    });

    app.use('/', router);

    return app;
}

module.exports = server;
