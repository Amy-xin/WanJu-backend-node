/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userlogin', {
    userId: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    userPwd: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'userlogin'
  });
};
