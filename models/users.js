/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
	var users = sequelize.define(
		'users',
		{
			user_id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			profile_id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				references: {
					model: 'profiles',
					key: 'profile_id'
				}
			},
			name: {
				type: DataTypes.STRING(100),
				allowNull: false
			},
			is_active: {
				type: DataTypes.BOOLEAN,
				allowNull: false
			}
		},
		{
			timestamps: false,
			freezeTableName: true,
			tableName: 'users'
		}
	);

	return users;
};
