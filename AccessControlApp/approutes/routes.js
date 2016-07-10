var express = require('express'),
	users = require('../controllers/users');

var routes = function(app) {
	app.use('/users', users());
}

module.exports = routes;