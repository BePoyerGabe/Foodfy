const fs = require('fs')
const dataJson = require('../data.json')

exports.index = (req, res) => {
  const recipes = dataJson.recipes

  recipes.forEach((recipe, index) => {
    recipe.index = index
  })

  res.render('admin/list.recipe.njk', { recipes })
}

exports.show = (req, res) => {
  const { id } = req.params

  let recipe = dataJson.recipes[id]
  recipe.index = id

  res.render('admin/show.recipe.njk', { recipe })
}

exports.create = (req, res) => {
  res.render('admin/create.recipe.njk')
}

exports.edit = (req, res) => {
  const index = req.params.id

  let recipe = dataJson.recipes[index]
  recipe.index = index
  res.render('admin/edit.recipe.njk', { recipe })
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

exports.put = (req, res) => {
  res.send(req.body)
}

exports.delete = (req, res) => {
  const { indexDelete } = req.body

  const newRecipeArray = dataJson.recipes.filter((recipe, index) => {
    if (index != indexDelete) return recipe
  })

  dataJson.recipes = newRecipeArray

  fs.writeFile('src/data.json', JSON.stringify(dataJson, null, 2), (err) => {
    if (err) return res.send('Error: ' + err)

    res.redirect('/admin/recipes')
  })
}
