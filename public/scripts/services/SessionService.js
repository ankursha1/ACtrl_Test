Services.service('SessionService', ['wsservice', function(WsService) {

	this.authToken ='undefined';
	this.login = function(data) {
		return WsService.wspost('/session', data);
	}

	this.logout = function(data) {
		return WsService.wsdelete('/session', data);
	}

	this.setAuthToken = function(token){
		this.authToken = token;
	}
}]);