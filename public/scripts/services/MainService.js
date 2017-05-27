var Services = angular.module('Services', []);


Services.service('wsservice', ['$http', '$q', function($http, $q) {

	this.wsget = function(uri) {
		var deferred = $q.defer();
		$http.get(uri).success(function(err, result){
			deferred.resolve(result);
		}).error(function(err){
			deferred.reject(err);
		});
		return deferred.promise;
	},

	this.wspost = function(uri, data) {
		var deferred = $q.defer();
		$http.post(uri, data).success(function(token, result){
			deferred.resolve(token);
		}).error(function(err){
			deferred.reject(err);
		});
		return deferred.promise;
	},

	this.wsput = function(uri, body) {

	},

	this.wsdelete = function(uri) {
		var deferred = $q.defer();
		$http.delete(uri).success(function(err, result){
			deferred.resolve(result);
		}).error(function(err){
			deferred.reject(err);
		});
		return deferred.promise;
	}

}]);
