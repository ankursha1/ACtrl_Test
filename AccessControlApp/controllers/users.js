//This is test controller
var express = require('express');
	
router = express.Router();
var Users = function() {
	
	router.get('/', function( req, res, next) {
		res.send('This is response from users API');
	});

	return router;
}

module.exports = Users;