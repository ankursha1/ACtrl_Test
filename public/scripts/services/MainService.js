var Services = angular.module('Services', []);


Services.service('WsService', function() {

	this.wsget = function(clazz, param) {

	},

	this.wspost = function(body) {
		alert('Hello!! Welcome to WsService.');
	},

	this.wsput = function(param, body) {

	},

	this.wsdelete = function(param) {

	}

});
