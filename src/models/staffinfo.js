/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('staffinfo', {
    userId: {
      type: DataTypes.INTEGER(155),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    place: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    claim: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'staffinfo'
  });
};
