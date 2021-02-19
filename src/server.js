const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes/index')

const server = express()

server.use(express.json())
server.use(express.static('public'))
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
