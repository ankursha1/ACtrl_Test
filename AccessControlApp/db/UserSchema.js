var Sequelize = require('./models').Sequelize;

module.exports = function(sequelize, DataTypes) {
	var user = sequelize.define('user', {
		identifier: {
						type: Sequelize.UUID,
					 	defaultValue: Sequelize.UUIDV4, 
    					primaryKey: true
    				},
		name : Sequelize.STRING,
		loginid: { type: Sequelize.STRING, unique: 'true'},
		password : Sequelize.STRING,
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.fn('NOW')
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.fn('NOW')	
		}
	});
	return user;
};	
// module.exports = user;