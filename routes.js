const express = require('express')
const data = require('./data')
const recipes = require('./controllers/admin')

const routes = express.Router()


routes.get('/', (req, res) => {
    res.render('landing', { data })
})

routes.get('/sobre', (req, res) => {
    res.render('sobre')
})

routes.get('/receitas', (req, res) => {
    res.render('receitas', { data })
})

routes.get('/receitas/:index', (req, res) => {
    const index = req.params.index

    const foundRecipe = data[index]

    res.render('detail', { infosRecipe: foundRecipe })
})

routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/:id', recipes.show)
routes.get('/admin/recipes/create', recipes.create)
routes.get('/admin/recipes/:id/edit', recipes.edit)

routes.post('/admin/recipes', recipes.post)
routes.put('/admin/recipes', recipes.put)
routes.delete('/admin/recipes', recipes.delete)

module.exports = routes