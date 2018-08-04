const {Images} = require('../models')
const config = require('../config/config')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    membername: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    password: DataTypes.STRING
  })

  User.associate = function (models) {
  }

  return User
}
