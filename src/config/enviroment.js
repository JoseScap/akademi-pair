const ENV = require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    DB: process.env.DB,
    USER: process.env.USER,
    PASS: process.env.PASS,
    HOST: process.env.HOST
}