var express = require('express'),
	users = require('../controllers/UserController'),
	session = require('../controllers/SessionController');

var routes = function(app) {
	app.use('/users', users());
	app.use('/session', session(app));
}

module.exports = routes;