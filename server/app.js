console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./src/models') // database models
const config = require('./src/config/config') // portconfig
const path = require('path')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../client/dist')))

require('./src/routes')(app)

sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`A szerver elindult: ${config.port}`)
  })
