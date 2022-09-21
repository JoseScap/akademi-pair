const express = require('express')
const morgan = require('morgan')
const ENV = require('./config/enviroment')
const rootRouter = require('./routes/productRoutes')

// APP
const app = express();

// APP vars
app.set('PORT', ENV.PORT || 8080)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api', rootRouter)

module.exports = app