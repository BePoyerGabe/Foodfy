const express = require('express')
const dataJson = require('../../data.json')

const routes = express.Router()

routes.get('/', (req, res) => {
  const data = dataJson.recipes
  res.render('public/landing', { data })
})

routes.get('/about', (req, res) => {
  res.render('public/about')
})

routes.get('/recipes', (req, res) => {
  res.render('public/recipes', { dataJson })
})

routes.get('/recipes/:index', (req, res) => {
  const { index } = req.params

  const foundRecipe = dataJson.recipes[index]

  res.render('public/detail', { infosRecipe: foundRecipe })
})

module.exports = routes
