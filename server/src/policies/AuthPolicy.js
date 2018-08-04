const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      membername: Joi.string().alphanum().min(3).max(30).required(),
      imageURL: Joi.string(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{6,128}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Használj valódi emailt.'
          })
          break
        case 'membername':
          res.status(400).send({
            error: 'Hibás felhasználó név vagy email.'
          })
          break
        case 'imageURL':
          res.status(400).send({
            error: 'asd'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Hibás jelszó használat. Min 6 Max 128 karakter'
          })
          break
        default:
          res.status(400).send({
            error: 'Hiba'
          })
      }
    } else {
      next()
    }
  }
}
