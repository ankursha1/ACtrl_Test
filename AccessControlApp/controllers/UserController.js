//This is test controller
var express = require('express'),
	userService = require('../services/userService');
	
var router = express.Router();
var UsersController = function() {
	
	router.post('/', function( req, res, next) {
		var name = req.body.name;
		var loginid = req.body.loginid;
		var password = req.body.password;
		res.send('This is response from users API');
	});

	router.get('/', function( req, res, next) {
		res.status(200).send('This is response from users API');
	});


	return router;
}

module.exports = UsersController;