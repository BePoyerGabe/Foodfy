const express = require('express')

const routesIndex = require('./public/index.routes')
const routesAdmin = require('./admin/admin.routes')

const routes = express.Router()

routes.use('/', routesIndex)
routes.use('/admin', routesAdmin)

module.exports = routes
