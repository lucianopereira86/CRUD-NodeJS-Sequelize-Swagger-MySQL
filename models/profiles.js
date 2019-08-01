/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
	var profiles = sequelize.define(
		'profiles',
		{
			profile_id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING(50),
				allowNull: false
			}
		},
		{
			timestamps: false,
			freezeTableName: true,
			tableName: 'profiles'
		}
	);

	return profiles;
};
