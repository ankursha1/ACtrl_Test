MainController.controller('SessionController', ['$scope', 'SessionService',
	function($scope, SessionService) {
		$scope.credential = {
			'username' : '',
			'password' : ''
		}

		$scope.login = function() {

			alert('Hello!! Welcome to UserController - login.');
			SessionService.login($scope.credential);
		}
	}]);