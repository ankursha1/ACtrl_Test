var express = require('express');
	users = require('../controller/users');

var routes = function(app) {
	app.use('/users', users());
}

module.exports = routes;