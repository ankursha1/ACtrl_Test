MainController.controller('SessionController', ['$scope', '$rootScope','$state', 'SessionService',
	function($scope, $rootScope, $state, SessionService) {
		$scope.credential = {
			'loginname' : 'admin',
			'password' : 'admin'
		}

		$scope.login = function() {
			var promise = SessionService.login($scope.credential);
			promise.then(function(res){
				$rootScope.loginname = $scope.credential.loginname;
				SessionService.setAuthToken(res);
				$state.go('home', { 'loginname': $scope.credential.loginname});
			}, function(err){
				console.log('res');
			});
		}

		$scope.logout = function() {
			var promise = SessionService.logout($scope.credential);
			promise.then(function(res){
				clear();
				$state.go('session');
			}, function(err){
				console.log('res');
			});
		}

		function clear(){
			$scope.credential.loginname = '';
			$scope.credential.password = '';
		}

	}]);