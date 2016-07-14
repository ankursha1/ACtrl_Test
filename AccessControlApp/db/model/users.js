var Sequelize = require('sequelize');

var Users = function() {
	var props = {
		name : Sequelize.STRING,
		password : Sequelize.STRING
	};

	return props;
}

module.exports = Users;