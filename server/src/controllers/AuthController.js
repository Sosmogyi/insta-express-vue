const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (err) {
      res.status(400).send({
        error: 'Ez az email már használatba van.'
      })
    }
  },
  async login (req, res) {
    try {
      const {membername, password} = req.body
      const user = await User.findOne({
        where: {
          membername: membername
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'Hibás felhasználónév'
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Hibás jelszó'
        })
      }

      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (err) {
      res.status(500).send({
        error: 'Egyéb lófasz hibaaaaa'
      })
    }
  }
}
