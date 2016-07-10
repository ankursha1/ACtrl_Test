var express = require('express'),
	users = require('../controller/users');

var routes = function(app) {
	app.use('/users', users(app));
}

module.exports = routes;