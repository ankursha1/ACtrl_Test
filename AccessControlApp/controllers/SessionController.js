//This is test controller
var express = require('express'),
	userService = require('../services/userService'),
	logger = require('../util/logger'),
	jwt = require('jsonwebtoken');
	
var router = express.Router();
var SessionController = function(app) {
	
	router.get('/', function( req, res, next) {
		res.send('This is response from users API');
	});

	router.post('/', function(req, res, next) {
		var loginid = req.body.loginname;
		var password = req.body.password;
		/*var user = userService.findByLoginId(loginid).then(function(err, result){
			console.log('Result found or err');
			if(!err) res.status(200).send();
			else res.status(401).send();
		});*/
		userService.findByLoginId(loginid).then(function(user){
				if(!user){
					logger.error('User not found !!');
					res.status(401).send({message: 'Authentication failed. User not found.' });
				} else if(user) {
					if (user.password != req.body.password) {
						logger.error('Entered wrong password for user !!');
						res.status(401).send({message: 'Authentication failed. Wrong password.' });
				    } else {
				    	logger.debug('Creating token for user !!' + JSON.stringify(user));
				    	var token = jwt.sign({'username':user.loginid, 'password':user.password}, app.get('APP_SECRET') , { algorithm: 'HS256' });
				        logger.debug('Sending token to user !!' +token);
						res.status(200).send({'token':token});	
					}
				}
			}, function(error){
				res.status(401).send();	
			}
		);
	});

	router.delete('/', function(req, res, next) {
		var loginid = req.body.loginname;
		var password = req.body.password;
		logger.debug('Username ' + loginid +' Password '+password);
		var user = userService.findByLoginId(loginid).then(function(err, result){
			console.log('Result found or err');
			if(!err) res.status(200).send();
			else res.status(401).send();
		});
	});
	return router;
}

module.exports = SessionController;