var express = require('express'),
	users = require('../controllers/users');

var routes = function(app) {
	router.get('/users', users());
}

module.exports = routes;