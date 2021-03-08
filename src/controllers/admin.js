const fs = require('fs')
const dataJson = require('../data.json')

exports.index = (req, res) => {
  const recipes = dataJson.recipes

  res.render('admin/recipes', {recipes})
}

exports.show = (req, res) => {}

exports.create = (req, res) => {
  res.render('admin/create.recipe.njk')
}

exports.edit = (req, res) => {
  res.render('admin/edit.recipe.njk')
}

exports.post = function (req, res) {
  /* Inputs validation */
  for (let keys in req.body) {
    if (req.body[keys] == '') return res.send(`The field ${keys} must be completed`)
  }

  const newRecipe = req.body

  dataJson.recipes.push(newRecipe)
  console.log(dataJson.recipes)

  fs.writeFile('src/data.json', JSON.stringify(dataJson, null, 2), (err) => {
    if (err) {
      return res.send(`Error while writing file: ${err}`)
    }

    return res.send('Ok')
  })
}

exports.put = (req, res) => {}

exports.delete = (req, res) => {}
