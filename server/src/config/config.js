module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'raqbmhbr',
    user: process.env.DB_USER || 'raqbmhbr',
    password: process.env.DB_PASS || 'F0USo-WvkxMXzkKlngNDwlMGc4Z8wbkf',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'stampy.db.elephantsql.com',
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
