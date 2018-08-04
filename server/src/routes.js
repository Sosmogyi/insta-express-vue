const AuthController = require('./controllers/AuthController')
const ProfileController = require('./controllers/ProfileController')

const ConnectController = require('./controllers/ConnectController')

const AuthPolicy = require('./policies/AuthPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthPolicy.register,
    AuthController.register)

  app.post('/login',
    AuthController.login)

  app.get('/userList',
    ProfileController.index)

  app.get('/userList/:userId',
    ProfileController.showUserById)

  app.get('/main',
    ConnectController.displayAllUploadedImage)

  app.post('/userList/:userId',
    ConnectController.userUploadImage)
}
