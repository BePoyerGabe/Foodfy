const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure(__dirname + '/views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', (req, res) => {
    res.render('landing', { data })
})

server.get('/sobre', (req, res) => {
    res.render('sobre')
})

server.get('/receitas', (req, res) => {
    res.render('receitas', { data })
})


server.get('/receitas/:index', (req, res) => {
    const index = req.params.index

    const foundRecipe = data[index]

    res.render('detail', { infosRecipe: foundRecipe })
})


server.listen(3000, function () {
    console.log('Server running')
})