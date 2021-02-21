const express = require('express')
const data = require('../../data.js')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.render('public/landing', {data})
})

routes.get('/about', (req, res) => {
  res.render('public/about')
})

routes.get('/recipes', (req, res) => {
  res.render('recipes', {data})
})

routes.get('/receitas/:index', (req, res) => {
  const {index} = req.params

  const foundRecipe = data[index]

  res.render('public/detail', {infosRecipe: foundRecipe})
})

module.exports = routes
