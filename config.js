require('dotenv').config()

DATABASE_URL = process.env.DATABASE_URL
PORT = process.env.PORT

module.exports = {
  DATABASE_URL: DATABASE_URL,
  PORT: PORT 
}