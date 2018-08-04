module.exports = (sequelize, DataTypes) => {
  const Connect = sequelize.define('Connect', {})

  Connect.associate = function (models) {
    Connect.belongsTo(models.User)
    Connect.belongsTo(models.Images)
  }

  return Connect
}
