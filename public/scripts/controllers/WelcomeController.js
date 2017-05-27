MainController.controller('WelcomeController', ['$scope', '$state', 'SessionService',
	function($scope, $state, SessionService) {
		$scope.loginname = $state.params.loginname;

		/*$scope.login = function() {
			var promise = SessionService.login($scope.credential);
			promise.then(function(res){
				$state.go('home', { 'loginname': $scope.credential.loginname});
			}, function(err){
				console.log('res');
			});
		}*/
	}]);