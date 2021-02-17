const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')


const server = express()

server.use(express.json())
server.use(express.static('public'))
server.use(routes)
server.set('view engine', 'njk')

nunjucks.configure(__dirname + '/views', {
    express: server,
    autoescape: false,
    noCache: true
})



server.listen(5000, function () {
    console.log('Server running')
})