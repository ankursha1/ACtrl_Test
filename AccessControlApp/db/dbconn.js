
var	logger 		= require('../util/logger'),
	fs        	= require("fs"),
	path      	= require("path"),
	db 		  	= require('./models');
var Sequelize 	= db.Sequelize;
var sequelize ;	
var dbconn = function(dbinfo) {
				logger.debug('Starting DB Connection  with ' + dbinfo.dbname);
				logger.debug('Starting DB user  with ' + dbinfo.dbuser);
				logger.debug('Starting DB password  with ' + dbinfo.dbpwd);
				this.connectionString = 'postgres://'+dbinfo.dbuser+':'+dbinfo.dbpwd+'@'+dbinfo.host+':5432/'+dbinfo.dbname;
				sequelize = new Sequelize(connectionString);
				sequelize
				.authenticate()
				.then(function(err) {
					console.log('Database connection has been established successfully.');
				})
				.catch(function (err) {
					console.log('Unable to connect to the database:', err);
				});
				db.sequelize = sequelize;
				logger.debug('***** [Model names] *****');
				var i = 1;
				fs.readdirSync(__dirname)
				  .filter(function(file) {
				    return (file.indexOf(".") !== 0) && (file !== "dbconn.js") && (file !== "models.js");
				  })
				  .forEach(function(file) {
				    var model = sequelize.import(path.join(__dirname, file));
				    logger.debug( i++ +'-' ,model.name);
				    db[model.name] = model;
				  });
				logger.debug('*************************');
				logger.debug('***** [Association] *****');
				var i = 1;
				Object.keys(db).forEach(function(modelName) {
				  logger.debug( i++ +'-' ,modelName);	
				  if ("associate" in db[modelName]) {
				    db[modelName].associate(db);
				  }
				});
				logger.debug('*************************');
				sequelize.sync({force: false }) ;
			}

module.exports = dbconn;
/*INSERT INTO public.users(
            name, loginid, password)
    VALUES ('administrator', 'root','password');
*/