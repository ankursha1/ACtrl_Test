var Sequelize = require('sequelize'),
	logger = require('../util/logger'),
	users = require('./model/users');


var DBConn = function(dbinfo) {
	logger.debug('Starting DB Connection  with ' + dbinfo.dbname);
	logger.debug('Starting DB Connection  with ' + dbinfo.dbuser);
	logger.debug('Starting DB Connection  with ' + dbinfo.dbpwd);
	var sequelize = new Sequelize('postgres://'+dbinfo.dbuser+':'+dbinfo.dbpwd+'@'+dbinfo.host+':5432/'+dbinfo.dbname);
	sequelize
	.authenticate()
	.then(function(err) {
		console.log('Connection has been established successfully.');
	})
	.catch(function (err) {
		console.log('Unable to connect to the database:', err);
	});
	sequelize.define('Users', users());
	
	sequelize.sync({force: true }) ;

}

module.exports = DBConn;