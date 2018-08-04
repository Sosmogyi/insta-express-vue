const {
  Connect,
  Images,
  User
} = require('../models')

module.exports = {
  displayAllUploadedImage (req, res) {
    return Images
      .findAll()
      .then(personalPicture => res.status(200).send(personalPicture))
      .catch(error => res.status(400).send(error))
  },
  async userUploadImage (req, res) {
    const user = await Images.create(req.body)
      .then(personalPicture => res.status(200).send(personalPicture))
      .catch(error => res.status(400).send(error))
  }
}
