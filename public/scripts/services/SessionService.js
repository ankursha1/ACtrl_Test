Services.service('SessionService', function() {


	this.login = function(data) {
		alert('Hello!! Welcome to SessionService.');
		wsservice.wspost(data);
	}

});