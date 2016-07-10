//This is test controller
var express = require('express');
var router = express.Router();

var Users = functions() {
	
	router.get('/users', functions( req, res, next) {
		res.send('This is response from users API');
	});

	return router;
}

module.exports = Users;