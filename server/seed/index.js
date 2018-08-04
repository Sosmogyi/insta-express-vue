const {
  sequelize,
  User,
  Images,
  Connect
} = require('../src/models')

const Promise = require('bluebird')
const images = require('./images.json')
const users = require('./users.json')
const connect = require('./connect.json')

sequelize.sync({force: true}).then(async function () {
  await Promise.all(
    users.map(user => {
      User.create(user)
    })
  )

  await Promise.all(
    images.map(image => {
      Images.create(image)
    })
  )

  await Promise.all(
    connect.map(connect => {
      Connect.create(connect)
    })
  )
})
