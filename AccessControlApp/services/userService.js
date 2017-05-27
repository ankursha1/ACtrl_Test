var models  = require('../db/models'),
	logger = require('../util/logger'),
	Q = require('q');
var findByLoginId = function(loginname){
	var deferred = Q.defer();
	models.user.findOne({
		where: {
			loginid: loginname 
		}
	}).then(function(result){
		if(!result){
			deferred.reject(new Error('Not found'));
		} else {
			deferred.resolve(result);
		}
	});
	return deferred.promise;
}

module.exports = {
	findByLoginId : findByLoginId
}

