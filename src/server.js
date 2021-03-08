const express = require('express')
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')
const path = require('path')
const routes = require('./routes/index')

const server = express()

server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.set('view engine', 'njk')

server.use(routes)

nunjucks.configure(__dirname + '/views', {
  express: server,
  autoescape: false,
  noCache: true,
})

server.listen(5000, () => {
  console.log('Server running')
})
