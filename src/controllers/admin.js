const data = require('../data.js')

exports.index = (req, res) => {}

exports.show = (req, res) => {
  res.send('Show')
}

exports.create = (req, res) => {
  res.render('./admin/create.recipe.njk')
}

exports.edit = (req, res) => {
  res.send('Alo editado')
}

exports.post = (req, res) => {
  res.send(req.body)
}

exports.put = (req, res) => {}

exports.delete = (req, res) => {}
